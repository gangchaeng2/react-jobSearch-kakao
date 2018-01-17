import React, { Component } from 'react';

import saramin from '../../img/saramin.png';
import incruit from '../../img/incruit.png';
import { Search, Header } from '../../components';

class SearchContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friendList: this.initializeState
        };
    }
    
    get initializeState() {
        return [
            {name: "사람인", introduce: "안녕하세요 사람인 입니다~", img: saramin},
            {name: "인cruit", introduce: "안녕하세요 인cruit 입니다~", img: incruit},
            {name: "잡코리아", introduce: "안녕하세요 잡코리아 입니다~", img: saramin}
        ];
    }

    // 검색
    handleChange = (e) => {
        const friendList = this.state.friendList;

        if(e.target.value !== '') {
            let friends = [];
            friendList.forEach((friend, i) => {
                if(friend.name.indexOf(e.target.value) >= 0) {
                    friends.push(friend);
                }
            });

            if(friends.length > 0) {
                this.setState({
                    friendList: friends
                });
            }
        } else { 
            this.setState({
                friendList: this.initializeState
            });
        }
    }

    render() {
        const { handleChange } = this;
        const { friendList } = this.state;

        return (
            <div>
                <Header />
                <Search
                    handleChange={handleChange} 
                    friendList={friendList}
                />
            </div>
        );
    }
}

export default SearchContainer;