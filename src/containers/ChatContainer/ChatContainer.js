import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import * as service from '../../services/jobSearch';
import styles from '../../components/Chat/Chat.scss';

const cx = classNames.bind(styles);

class ChatContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            site: this.props.site,
            profileImg: this.props.profileImg
        }
    }

    componentDidMount() {
        document.body.className = 'chatting';
    }
    

    answerMessage = (jobList) => {
        if(jobList !== null) {
            jobList.forEach((job, i) => {
                this.messageToMe(job);
            });
        } else {
            this.messageToMe(null);
        }
    }
    
    inputMessage = async (e) => {
        // 엔터 클릭시
        if(e.charCode === 13) {
            const { site } = this.state;
            const query = e.target.value;
            this.messageFromMe(query);

            const jobList = await service.getJobList(query, site);
            this.answerMessage(jobList);
        }
    }

    messageFromMe = (query) => {
        const now = new Date();
        
        const mainDiv = document.getElementById('detail-chat');
        const makeDiv = document.createElement('div');
        makeDiv.className = "from-me";

        // span className 적용 및 텍스트 추가
        let makeTime = document.createElement('span');
        const makeTimeText = document.createTextNode(`${service.leadingZeros(now.getHours(), 2)} : ${service.leadingZeros(now.getMinutes(), 2)}`);
        makeTime.className = "time";
        makeTime.appendChild(makeTimeText);

        // span className 적용 및 텍스트 추가
        let makeMessage = document.createElement('span');
        const makeMessageText = document.createTextNode(query);
        makeMessage.className = "message-body";
        makeMessage.appendChild(makeMessageText);  
        
        // input 클리어
        document.getElementById('input-message').value = '';
        mainDiv.appendChild(makeDiv).appendChild(makeTime).after(makeMessage);
    }

    messageToMe = (job) => {
        const now = new Date();
        // br Tag
        const br = document.createElement("br");

        const mainDiv = document.getElementById('detail-chat');
        const toMeDiv = document.createElement('div');
        toMeDiv.className = "to-me";
        
        let profileImg = document.createElement("img");
        profileImg.className = "avartar";
        profileImg.src = this.state.profileImg;

        // message Div
        let messageWrapperDiv = document.createElement("div");
        messageWrapperDiv.className = "message-center";

        // answerName h3
        let userNameH3 = document.createElement("h3");
        const userNameText = document.createTextNode(this.state.site);
        userNameH3.className = "user-name";
        userNameH3.appendChild(userNameText);

        // time span
        let makeTimeSpan = document.createElement('span');
        const makeTimeText = document.createTextNode(`${service.leadingZeros(now.getHours(), 2)} : ${service.leadingZeros(now.getMinutes(), 2)}`);
        makeTimeSpan.className = "time";
        makeTimeSpan.appendChild(makeTimeText);

        // answer span
        let messageBodySpan = document.createElement("span");
        messageBodySpan.className = "message-body";
        messageBodySpan.title = `${job.detail.title} 사람인으로 이동`;

        let messageBodyColorSpan = document.createElement("span");
        messageBodyColorSpan.className = "highlite-span";
        
        let jobInfo = "";
        let jobInfo2 = "";
        let jobInfoHL = "";

        if(job !== null && job !== undefined) {
            jobInfo = document.createTextNode(`${job.company} - ${job.detail.title} `);
            jobInfoHL = document.createTextNode(` [${job.detail['experience-level']}]`);
            messageBodyColorSpan.appendChild(jobInfoHL);
            jobInfo2 = document.createTextNode(`위치 - ${service.ConvertSystemSourcetoHtml(job.detail.location)}`);
        } else {
            jobInfo = document.createTextNode('검색결과가 없거나 검색어를 정확히 입력하지 않으셨습니다. 다시 입력해주세요.');
            messageBodySpan.appendChild(jobInfo);
            messageWrapperDiv.appendChild(userNameH3).after(messageBodySpan); 
            mainDiv.appendChild(toMeDiv).appendChild(profileImg).after(messageWrapperDiv);
            toMeDiv.appendChild(makeTimeSpan);
            return;
        }

        // span appendChild
        messageBodySpan.appendChild(jobInfo);
        messageBodySpan.appendChild(messageBodyColorSpan);
        messageBodySpan.appendChild(br);
        messageBodySpan.appendChild(jobInfo2);
        messageBodySpan.addEventListener('click', function() {
            const newWindow = window.open("about:blank");
            newWindow.location.href = job.url;
        });

        messageWrapperDiv.appendChild(userNameH3).after(messageBodySpan);
        
        mainDiv.appendChild(toMeDiv).appendChild(profileImg).after(messageWrapperDiv);
        toMeDiv.appendChild(makeTimeSpan);
    }

    render() {
        const { inputMessage } = this;
        const { site } = this.state;
        const now = new Date();

        return (
            <div className="Wrapper">
                <header className={cx("top-header")}>
                    <div className={cx("header-bottom")}>
                        <div className={cx("header-column")}>
                            <Link to="/chatList">
                                <i className="fa fa-chevron-left fa-lg"></i>
                            </Link>
                        </div>
                        <div className={cx("header-column")}>
                            <span className="friend-name">{site}</span>
                        </div>
                        <div className={cx("header-column")}>
                            <i className="fa fa-search"></i>
                            <i className="fa fa-bars"></i>
                        </div>
                    </div>
                </header>
                <div className={cx('detail-chat')} id="detail-chat">
                    <div className={cx('date-divider')}>
                        <span>
                            Wednesday, August 2, 2017
                        </span>
                    </div>

                    <div className={cx('from-me')}>
                        <span className={cx("time")}>
                            {service.leadingZeros(now.getHours(), 2)} : {service.leadingZeros(now.getMinutes(), 2)}
                        </span>
                        <span className="message-body">
                            {site}~
                        </span>
                    </div>

                    <div className="to-me">
                        <img src={this.state.profileImg} alt="" className={cx("avartar")} />
                        <div className={cx("message-center")}>
                            <h3 className={cx("user-name")}>
                                {site}
                            </h3>
                            <span className={cx("message-body")}>
                                안녕하세요 {site} 입니다. 검색하고 싶은 기업이나 직종을 입력해주세요.
                            </span>
                        </div>
                        <span className={cx("time")}>
                            {service.leadingZeros(now.getHours(), 2)} : {service.leadingZeros(now.getMinutes(), 2)}
                        </span>
                    </div>
                </div>

                <div className={cx("type-message")}>
                    <i className="fa fa-plus fa-lg"></i>
                    <div className={cx("input-box")}>
                        <input type="text" className="input-message" id="input-message" onKeyPress={inputMessage}/>
                        <i className="fa fa-smile-o fa-lg"></i>
                        <span className={cx("record-message")}>
                            <i className="fa fa-microphone fa-lg"></i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatContainer;