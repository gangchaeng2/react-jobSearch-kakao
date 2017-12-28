import React from 'react';

import saramin from '../img/saramin.png';
import incruit from '../img/incruit.png';
import { ChatContainer } from '../containers';

const ChatPage = ({ match, post}) => {
    let profileImg = null;
    
    if(match.params.site === '사람인') {
        profileImg = saramin;
    } else {
        profileImg = incruit;
    }

    return (
        <div>
            <ChatContainer 
                site={match.params.site}
                profileImg={profileImg}
            />
        </div>
    );
};

export default ChatPage;