import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import { API_KEY } from './consts';


//refractoring complonent to class

//functional based component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
        });

    }
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}


//Take this component's generated HTML and put it on the page
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));  
