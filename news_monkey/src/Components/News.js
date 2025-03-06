import React, { Component } from 'react'
import Newsitem from './Newsitem'
export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=38e082c5daaa4c14a68b2e5e9158b01e&page=1"
        let data = await fetch(url)
        let parseddata = await data.json()
        console.log(parseddata)
        this.setState({ articles: parseddata.articles, totalArticles: parseddata.totalResults})
    }

    handleNextPage = () => {
        if(this.state.page+1>Math.ceil(this.state.totalArticles/20)){

        }
        else
           this.setState({ page: this.state.page + 1 }, this.fetchNews);
    };

    handlePreviousPage = () => {
        this.setState({ page: this.state.page - 1 }, this.fetchNews);
    };

    fetchNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=38e082c5daaa4c14a68b2e5e9158b01e&page=${this.state.page}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({ articles: parseddata.articles });
    };


    render() {
        return (
            <>
                <div className='container my-3'>
                    <h2>NewsMonkey - Top Headlines</h2>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return (
                                <div className='col-md-4' key={element.url}>
                                    <Newsitem
                                        title={element.title ? element.title : " "}
                                        desc={element.description ? element.description : " "}
                                        imageurl={element.urlToImage}
                                        newsurl={element.url}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark my-2" onClick={this.handlePreviousPage}>&larr; Prev</button>
                    <button type="button" className="btn btn-dark my-2" onClick={this.handleNextPage}>Next &rarr;</button>
                </div>
            </>
        )
    }
}
