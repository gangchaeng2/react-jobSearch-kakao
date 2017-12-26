import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../../img/bigshine.png';
import styles from './ChatList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ChatList = ({ openChat }) => {
    return (
        <section className="chats">
            <Link to="/chat">
                <div className={cx('chat')}>
                    <img src={profileImg} alt="" className={cx('avartar')}/>
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
            <div className={cx('chat')}>
                <img src={profileImg} alt="" className={cx('avartar')}/>
                <div className={cx('text')}>
                    <span className={cx('user-name')}>
                        Bigshine
                    </span>
                    <span className={cx('preview')}>
                        Hi I'm Bigshine~
                    </span>
                </div>
                <span className={cx('date')}>
                    YesterDay
                </span>
            </div>
            <div className={cx('chat')}>
                <img src={profileImg} alt="" className={cx('avartar')}/>
                <div className={cx('text')}>
                    <span className={cx('user-name')}>
                        Bigshine
                    </span>
                    <span className={cx('preview')}>
                        Hi I'm Bigshine~
                    </span>
                </div>
                <span className={cx('date')}>
                    YesterDay
                </span>
            </div>
            <div className={cx('chat')}>
                <img src={profileImg} alt="" className={cx('avartar')}/>
                <div className={cx('text')}>
                    <span className={cx('user-name')}>
                        Bigshine
                    </span>
                    <span className={cx('preview')}>
                        Hi I'm Bigshine~
                    </span>
                </div>
                <span className={cx('date')}>
                    YesterDay
                </span>
            </div>
            <div className={cx('chat')}>
                <img src={profileImg} alt="" className={cx('avartar')}/>
                <div className={cx('text')}>
                    <span className={cx('user-name')}>
                        Bigshine
                    </span>
                    <span className={cx('preview')}>
                        Hi I'm Bigshine~
                    </span>
                </div>
                <span className={cx('date')}>
                    YesterDay
                </span>
            </div>
            <div className={cx('chat')}>
                <img src={profileImg} alt="" className={cx('avartar')}/>
                <div className={cx('text')}>
                    <span className={cx('user-name')}>
                        Bigshine
                    </span>
                    <span className={cx('preview')}>
                        Hi I'm Bigshine~
                    </span>
                </div>
                <span className={cx('date')}>
                    YesterDay
                </span>
            </div>
            <div className={cx('chat')}>
                <img src={profileImg} alt="" className={cx('avartar')}/>
                <div className={cx('text')}>
                    <span className={cx('user-name')}>
                        Bigshine
                    </span>
                    <span className={cx('preview')}>
                        Hi I'm Bigshine~
                    </span>
                </div>
                <span className={cx('date')}>
                    YesterDay
                </span>
            </div>
            <div className={cx('chat')}>
                <img src={profileImg} alt="" className={cx('avartar')}/>
                <div className={cx('text')}>
                    <span className={cx('user-name')}>
                        Bigshine
                    </span>
                    <span className={cx('preview')}>
                        Hi I'm Bigshine~
                    </span>
                </div>
                <span className={cx('date')}>
                    YesterDay
                </span>
            </div>
        </section>
    );
};

export default ChatList;