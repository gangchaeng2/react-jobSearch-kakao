import React, { Component } from 'react';

import saramin from '../../img/saramin.png';
import incruit from '../../img/incruit.png';
import { Search, Header } from '../../components';

class SearchContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friendList: [
                {name: "사람인", introduce: "안녕하세요 사람인 입니다~", img: saramin},
                {name: "인cruit", introduce: "안녕하세요 인cruit 입니다~", img: incruit}
            ]
        };
    }

    render() {
        const { friendList } = this.state;

        return (
            <div>
                <Header />
                <Search 
                    friendList={friendList}
                />
            </div>
        );
    }
}

export default SearchContainer;