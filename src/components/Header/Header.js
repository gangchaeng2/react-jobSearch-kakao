import React from 'react';
import { NavLink } from 'react-router-dom'; 
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = ({children}) => {
    const activeStyle = {
        color: 'white'
    };
    
    return (
        <div className={cx('header')}>
            <div className={cx('top-header')}>
                <span className={cx('title')}>WorkTalk</span>
            </div>
            <div className={cx('bottom-header')}>
                <div className={cx('tab-bar')}>
                    <NavLink exact to="/" activeStyle={activeStyle} className={cx('tab')}>
                        <div className={cx('icon')}>
                            <i className="fa fa-user"></i>
                            <span className={cx('text')}>Friends</span>
                        </div>
                    </NavLink>

                    <NavLink exact to="/chatList" activeStyle={activeStyle} className={cx('tab')}>
                        <div className={cx('icon')}>
                            <i className="fa fa-comment"></i>
                            <span className={cx('text')}>Chat</span>
                        </div>
                    </NavLink>

                    <NavLink to="/more" className={cx('tab')}>
                        <div className={cx('icon')}>
                            <i className="fa fa-book"></i>
                            <span className={cx('text')}>Channel</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;