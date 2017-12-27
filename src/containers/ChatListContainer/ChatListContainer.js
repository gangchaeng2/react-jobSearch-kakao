import React, { Component } from 'react';
import { ChatList, Header } from '../../components';

class ChatContainer extends Component {
    render() {
        return (
            <div>
                <Header>채팅목록</Header>
                <ChatList />
            </div>
        );
    }
}

export default ChatContainer;