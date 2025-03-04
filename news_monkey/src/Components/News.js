import React, { Component } from 'react'
import Newsitem from './Newsitem'
export default class News extends Component {
    constructor() {
        super();
        console.log("i am constructor")
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        console.log("cdm")
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=38e082c5daaa4c14a68b2e5e9158b01e"
        let data = await fetch(url)
        let parseddata = await data.json()
        console.log(parseddata)
        this.setState({articles: parseddata.articles})
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className='col-md-4' key={element.url}>
                                <Newsitem
                                    title={element.title ? element.title:" "}
                                    desc={element.description ? element.description:" "}
                                    imageurl={element.urlToImage}
                                    newsurl={element.url}
                                />
                            </div>
                        );
                    })}
                </div>

            </div>
        )
    }
}
