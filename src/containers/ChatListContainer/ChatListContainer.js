import React, { Component } from 'react';
import { ChatList, Header } from '../../components';

class ChatContainer extends Component {
    componentDidMount() {
        // axios.get(`https://cors-anywhere.herokuapp.com/http://api.saramin.co.kr/job-search?keywords=웹+퍼블리셔`)
        // .then(function(res){
        //     const jsonObj = fastXmlParser.parse(res.data);
        //     console.log(jsonObj);
        // });
    }
    
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