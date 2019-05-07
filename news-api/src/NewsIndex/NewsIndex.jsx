import React, { Component } from 'react';

class NewsIndex extends Component {
    constructor(props){
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount = () => {
        this.findGayNews('');
    }

    findGayNews = async () => {
        const url = 'https://newsapi.org/v2/everything?' +
        'q=gay&' +
        'from=2019-05-07&' +
        'sortBy=popularity&' +
        'apiKey=64c3c945a2f24a298dfbfb57e9fd47a9';
        // const req = new Request(url);
        const foundNews = await fetch(url);
        const parsedResults = await foundNews.json();
        this.setState({
            news: parsedResults.articles
        })
        console.log(this.state)
    }

    showNews = () => {
        return this.state.news.map((newsItems) => 
            <div key = {newsItems.url}>
                <img src={newsItems.urlToImage} style={{ height: '200px' }}></img>
                <h3><a href={newsItems.url}> {newsItems.title} </a>  </h3>
                <b>from {newsItems.source.name}</b><br/>
                <p>{newsItems.description}</p>
                <br/><br/>

            </div>
        )
    }

    render(){
        const newsList = this.showNews();
        return(
            <div>
                <center>
            <h2>Here's What's Gay Today, {this.props.username}:</h2>
                {newsList}
                </center>
            </div>
        )
    }
}

export default NewsIndex;