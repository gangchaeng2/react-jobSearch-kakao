import React from 'react';
import { SearchContainer } from '../containers';
import { Header } from '../components';

const FriendListPage = () => {
    return (
        <div>
            <Header>친구목록</Header>
            <SearchContainer />
        </div>
    );
};

export default FriendListPage;