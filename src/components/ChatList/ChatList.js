import React from 'react';
import { Link } from 'react-router-dom';
import saramin from '../../img/saramin.png';
import incruit from '../../img/incruit.png';
import styles from './ChatList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ChatList = ({ openChat }) => {
    document.body.className = '';
    
    return (
        <section className="chats">
            <Link to="/chat/사람인">
                <div className={cx('chat')}>
                    <img src={saramin} alt="" className={cx('avartar')}/>
                    <div className={cx('text')}>
                        <span className={cx('user-name')}>
                            사람인
                        </span>
                        <span className={cx('preview')}>
                            안녕하세요! 사람인에서 취업검색을 하세요~
                        </span>
                    </div>
                    <span className={cx('date')}>
                        YesterDay
                    </span>
                </div>
            </Link>
            <Link to="/chat/인curuit">
                <div className={cx('chat')}>
                    <img src={incruit} alt="" className={cx('avartar')}/>
                    <div className={cx('text')}>
                        <span className={cx('user-name')}>
                            인쿠르트
                        </span>
                        <span className={cx('preview')}>
                            안녕하세요! 인쿠르트에서 취업검색을 하세요~
                        </span>
                    </div>
                    <span className={cx('date')}>
                        YesterDay
                    </span>
                </div>
            </Link>
        </section>
    );
};

export default ChatList;