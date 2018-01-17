import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import history from '../../utils/history';
// import $ from 'jquery';

import * as service from '../../services/jobSearch';
import styles from '../../components/Chat/Chat.scss';

const cx = classNames.bind(styles);

class ChatContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            site: this.props.site,
            profileImg: this.props.profileImg,
            page: 1,
            query: ''
        }
    }

    componentWillMount() {
        console.log(history.location);
        document.body.className = 'chatting';
    }

    answerMessage = (jobList) => {
        if(jobList !== null) {
            jobList.forEach((job, i) => {
                this.messageToMe(job);
            });
            this.moreView();
            // $(".to-me:last-child").after(`<div class="to-me"><img class="avartar" src="/static/media/saramin.765c2345.png"><div class="message-center"><h3 class="user-name">사람인</h3><span class="message-body"><span class="more-view">더보기</span></div></div>`);
        } else {
            this.messageToMe(null);
        }
    }

    inputMessage = async (e) => {
        // 엔터 클릭시
        if(e.keyCode === 13) {
            const query = e.target.value;
            const { site } = this.state;
            document.getElementById('input-message').value = '';
            
            this.setState({
                query
            });

            this.messageFromMe(query);

            const jobList = await service.getJobList(query, site, this.state.page);
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
        
        // input clear
        mainDiv.appendChild(makeDiv).appendChild(makeTime).after(makeMessage);
    }

    moreJobList = async() => {
        // 삭제할 element 찾기
        const field = document.getElementById('more');
        // #field 에서 삭제할 element 제거하기
        document.getElementById('detail-chat').removeChild(field);

        this.setState({
            page: this.state.page + 1
        });
        const jobList = await service.getJobList(this.state.query, this.state.site, this.state.page);
        this.answerMessage(jobList);
    }

    moreView = () => {
        const now = new Date();

        const mainDiv = document.getElementById('detail-chat');
        const toMeDiv = document.createElement('div');
        toMeDiv.className = "to-me";
        toMeDiv.id = "more";
        toMeDiv.addEventListener('click', this.moreJobList);

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
        let messageBodyColorSpan = document.createElement("span");
        messageBodyColorSpan.className = "highlite-span";

        let jobInfo = "";

        jobInfo = document.createTextNode('더보기');
        messageBodySpan.appendChild(jobInfo);
        messageWrapperDiv.appendChild(userNameH3).after(messageBodySpan); 
        mainDiv.appendChild(toMeDiv).appendChild(profileImg).after(messageWrapperDiv);
        toMeDiv.appendChild(makeTimeSpan);
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
        let messageBodyColorSpan = document.createElement("span");
        messageBodyColorSpan.className = "highlite-span";

        let jobInfo = "";
        let jobInfoHL = "";

        if(job !== null && job !== undefined) {
            messageBodySpan.title = `${job.detail.title} 사람인으로 이동`;

            jobInfo = document.createTextNode(`${job.company} - ${job.detail.title} `);
            jobInfoHL = document.createTextNode(` [${job.detail['experience-level']}]`);
            
            messageBodySpan.appendChild(jobInfo);
            messageBodySpan.appendChild(messageBodyColorSpan);
            
            messageBodyColorSpan.appendChild(jobInfoHL);
            jobInfo = document.createTextNode(`위치 - ${service.ConvertSystemSourcetoHtml(job.detail.location)}`);
        } else {
            jobInfo = document.createTextNode('검색결과가 없거나 검색어를 정확히 입력하지 않으셨습니다. 다시 입력해주세요.');
            messageBodySpan.appendChild(jobInfo);
            messageWrapperDiv.appendChild(userNameH3).after(messageBodySpan); 
            mainDiv.appendChild(toMeDiv).appendChild(profileImg).after(messageWrapperDiv);
            toMeDiv.appendChild(makeTimeSpan);
            return;
        }

        // span appendChild
        messageBodySpan.appendChild(br);
        messageBodySpan.appendChild(jobInfo);
        messageBodySpan.addEventListener('click', function(){
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
        const week = ['월', '화', '수', '목', '금', '토', '일'];
        const now = new Date();

        return (
            <div className="Wrapper">
                <header className={cx("chat-header")}>
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
                            {now.getFullYear()}년 {service.leadingZeros(now.getMonth() + 1, 2)}월 {service.leadingZeros(now.getDate(), 2)}일 {week[now.getDay() - 1]}요일
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
                        <input type="text" className="input-message" id="input-message" onKeyUp={inputMessage} />
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