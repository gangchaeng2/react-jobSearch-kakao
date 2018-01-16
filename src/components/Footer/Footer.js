import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer = (match) => {
    const activeStyle =  {
        textDecorationLine: 'underline'
    };

    return (
        <footer className={cx('footer')}>
           <NavLink to="/friendList" activeStyle={activeStyle}>
                <div className={cx('icon')}>
                    <i className="fa fa-user"></i>
                    <span className={cx('text')}>Friends</span>
                </div>
            </NavLink>

           <NavLink exact to="/" activeStyle={activeStyle}>
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
        </footer>
    );
};

export default Footer;