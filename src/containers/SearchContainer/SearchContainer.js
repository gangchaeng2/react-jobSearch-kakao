import React, { Component } from 'react';

import { Search, Header } from '../../components';

class SearchContainer extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
            </div>
        );
    }
}

export default SearchContainer;