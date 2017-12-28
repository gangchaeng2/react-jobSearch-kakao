import React from 'react';
import classNames from 'classnames/bind';
import styles from './Search.scss';

const cx = classNames.bind(styles);

const Friend = ({ name, img, introduce }) => {
    return (
        <div>
            <div className={cx('with-tagline')}>
                <div className={cx('section-column')}>
                    <img src={img} alt=""/>
                    <span className={cx('friend-name')}>
                        {name}
                    </span>
                </div>
                <span className={cx('section-tagline')}>
                    {introduce}
                </span>
            </div>
        </div>
    );
};

export default Friend;