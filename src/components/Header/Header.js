import React from 'react';
import { NavLink } from 'react-router-dom'; 
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = ({children}) => {
    const activeStyle = {
        color: 'red'
    };
    
    return (
        <div>
            <div className={cx('header')}>
                <span className={cx('title')}>{children} <i className="fa fa-caret-down"></i></span>
            </div>
            <div className={cx('subheader')}>
                <NavLink to="/findSummoner" activeStyle={activeStyle}>
                    <div className={cx('icon')}>
                        <i className="fa fa-user"></i>
                        <span className={cx('text')}>Friends</span>
                    </div>
                </NavLink>

                <NavLink exact to="/chatList" activeStyle={activeStyle}>
                    <div className={cx('icon')}>
                        <i className="fa fa-comment"></i>
                        <span className={cx('text')}>Chat</span>
                    </div>
                </NavLink>

                <NavLink to="/more">
                    <div className={cx('icon')}>
                        <i className="fa fa-book"></i>
                        <span className={cx('text')}>Channel</span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;