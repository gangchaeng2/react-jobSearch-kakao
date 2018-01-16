import React from 'react';
import classNames from 'classnames/bind';

import Friend from './Friend';

import myProfile from '../../img/bigshine.png';
import styles from './Search.scss';

const cx = classNames.bind(styles);

const Search = ({ friendList, handleChange }) => {
    const renderFriends = (friendList) => {
        return friendList.map((friend, i) => (  
            <Friend 
                key={i}
                name={friend.name}
                img={friend.img}
                introduce={friend.introduce}
            />
        ));
    }

    return (
        <div className="friends">
            <div className={cx('search-bar')}>
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Find friends, chats, Plus Friends" onChange={handleChange}/>
            </div>

            <div className={cx('section')}>
                <div className={cx('section-header')}>
                    <span>내 프로필</span>
                </div>
                <div className={cx('section-rows')}>
                    <div className={cx('section-row')}>
                        <img src={myProfile} alt=""/>
                        <span className={cx('friend-name')}>
                            BigShine
                        </span>
                    </div>
                </div>

                <div className={cx('section')}>
                    <div className={cx('section-header')}>
                        <span>친구목록</span>
                    </div>
                    <div className={cx('section-rows')}>
                        {renderFriends(friendList)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;