import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import profileImg from '../../img/bigshine.png';

import styles from './Chat.scss';

const cx = classNames.bind(styles);

const inputMessage = (e) => {
    // 엔터 클릭시
    if(e.charCode === 13) {
        // 현재시간
        const now = new Date();
        
        const mainDiv = document.getElementById('detail-chat');
        const makeDiv = document.createElement('div');
        makeDiv.className = "from-me";

        // span className 적용 및 텍스트 추가
        let makeTime = document.createElement('span');
        const makeTimeText = document.createTextNode(`${now.getHours()}:${now.getMinutes()}`);
        makeTime.className = "time";
        makeTime.appendChild(makeTimeText);

        // span className 적용 및 텍스트 추가
        let makeMessage = document.createElement('span');
        const makeMessageText = document.createTextNode(e.target.value);
        makeMessage.className = "message-body";
        makeMessage.appendChild(makeMessageText);  
        
        // input 클리어
        document.getElementById('input-message').value = '';
        mainDiv.appendChild(makeDiv).appendChild(makeTime).after(makeMessage);
    }
}

const Chat = () => {
    return (
        <div>
            <header className={cx("top-header")}>
                <div className={cx("header-bottom")}>
                    <div className={cx("header-column")}>
                        <Link to="chatList">
                            <i className="fa fa-chevron-left fa-lg"></i>
                        </Link>
                    </div>
                    <div className={cx("header-column")}>
                        <span className="friend-name">사람인</span>
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
                    <span className={cx("time")}>17:55</span>
                    <span className="message-body">
                        사람인~
                    </span>
                </div>

                <div className="to-me">
                    <img src={profileImg} alt="" className={cx("avartar")}/>
                    <div className={cx("message-center")}>
                        <h3 className={cx("user-name")}>
                            사람인
                        </h3>
                        <span className={cx("message-body")}>
                            안녕하세요~ 검색하고 싶은 기업이나 직종을 입력해주세요.
                        </span>
                    </div>
                    <span className={cx("time")}>
                        19:35
                    </span>
                </div>
            </div>

            <div className="type-message">
                <i className="fa fa-plus fa-lg"></i>
                <div className="type-message__input">
                    <input type="text" className="input-message" id="input-message" onKeyPress={inputMessage}/>
                    <i className="fa fa-smile-o fa-lg"></i>
                    <span className="record-message">
                        <i className="fa fa-microphone fa-lg"></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Chat;