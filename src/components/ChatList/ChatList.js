import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ChatList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ChatInfo = ({chat}) => {
    return (
        <Link to={`/chat/${chat.name}`}>
            <div className={cx('chat')}>
                <img src={chat.img} alt="" className={cx('avartar')}/>
                <div className={cx('text')}>
                    <span className={cx('user-name')}>
                        {chat.name}
                    </span>
                    <span className={cx('preview')}>
                        안녕하세요! {chat.name}에서 취업검색을 하세요~
                    </span>
                </div>
                <span className={cx('date')}>
                    YesterDay
                </span>
            </div>
        </Link>
    );
}

const ChatList = ({ chatList }) => {
    document.body.className = '';
    
    return (
        <section className="chats">
            {
                chatList.map((chat, i) => {
                    return (
                        <ChatInfo
                            key={i}
                            chat={chat}
                        />
                    );
                })
            }
        </section>
    );
};

export default ChatList;