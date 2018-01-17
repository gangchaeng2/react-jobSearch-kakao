import React, { Component } from 'react';
import { ChatList, Header } from '../../components';

import saramin from '../../img/saramin.png';
import incruit from '../../img/incruit.png';
import jobKorea from '../../img/jobKorea.png';

class ChatContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chatList: this.initializeState
        }
    }

    get initializeState() {
        return [
            {name: '사람인', img: saramin},
            {name: '인cruit', img: incruit},
            {name: '잡코리아', img: jobKorea}
        ];
    }

    render() {
        const { chatList } = this.state;

        return (
            <div>
                <Header>채팅목록</Header>
                <ChatList chatList={chatList}/>
            </div>
        );
    }
}

export default ChatContainer;