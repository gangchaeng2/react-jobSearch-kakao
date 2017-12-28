import React from 'react';
import classNames from 'classnames/bind';

import myProfile from '../../img/bigshine.png';
import saramin from '../../img/saramin.png';
import incruit from '../../img/incruit.png';
import styles from './Search.scss';

const cx = classNames.bind(styles);

const Search = () => {
    return (
        <div className="friends">
            <div className={cx('search-bar')}>
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Find friends, chats, Plus Friends" />
            </div>

            <div className={cx('section')}>
                <div className={cx('section-header')}>
                    <span>My Profile</span>
                </div>
                <div className={cx('section-rows')}>
                    <div className={cx('section-row')}>
                        <img src={myProfile} alt=""/>
                        <a href="profile.html">
                            BigShine
                        </a>
                    </div>
                </div>

                <div className={cx('section')}>
                    <div className={cx('section-header')}>
                        <span>Friends</span>
                    </div>
                    <div className={cx('section-rows')}>
                        <div className={cx('with-tagline')}>
                            <div className={cx('section-column')}>
                                <img src={saramin} alt=""/>
                                <span>사람인</span>
                            </div>
                            <span className={cx('section-tagline')}>
                                안녕하세요 사람인 입니다~
                            </span>
                        </div>
                        <div className={cx('with-tagline')}>
                            <div className={cx('section-column')}>
                                <img src={incruit} alt=""/>
                                <span>인cruit</span>
                            </div>
                            <span className={cx('section-tagline')}>
                                안녕하세요 인curuit 입니다~
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;