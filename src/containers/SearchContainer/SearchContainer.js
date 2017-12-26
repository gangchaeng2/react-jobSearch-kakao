import React, { Component } from 'react';

import { Search, Header } from '../../components';

class SearchContainer extends Component {
    render() {
        return (
            <div>
                <Header>친구검색</Header>
                <Search />
            </div>
        );
    }
}

export default SearchContainer;