import React from 'react';
import classNames from 'classnames/bind';

import styles from './Search.scss';

const cx = classNames.bind(styles);

const Search = () => {
    return (
        <div className={cx('search-bar')}>
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Find friends, chats, Plus Friends" />
        </div>
    );
};

export default Search;