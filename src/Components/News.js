import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        };
    }

    componentDidMount() {
        this.fetchArticles();
    }

    fetchArticles = async() => {
        const { page } = this.state;
        const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=279853eb77864fd08ce9681df3719ba9&page=${page}&pageSize=20`;

        console.log(`Fetching articles from URL: ${url}`); // Debugging

        this.setState({ loading: true });

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log("Fetched data:", data); // Debugging
            this.setState({
                articles: data.articles,
                totalResults: data.totalResults,
                loading: false,
            });
        } catch (error) {
            console.error('Error fetching articles:', error);
            this.setState({ loading: false });
        }
    };

    handlePrevClick = () => {
        if (this.state.page > 1) {
            this.setState(
                (prevState) => ({ page: prevState.page - 1 }),
                this.fetchArticles
            );
        }
    };

    handleNextClick = () => {
        const totalPages = Math.ceil(this.state.totalResults / 20);
        if (this.state.page < totalPages) {
            this.setState(
                (prevState) => ({ page: prevState.page + 1 }),
                this.fetchArticles
            );
        }
    };

    render() {
        const { articles, page, totalResults, loading } = this.state;
        const totalPages = Math.ceil(totalResults / 20);

        return ( <
            div className = "container my-3" >
            <
            h1 className = "text-center" > NewsMonkey - Top Headlines < /h1> {
                loading && < p > Loading... < /p>} <
                    div className = "row" > {
                        articles.map((element) => ( <
                            div className = "col-md-4"
                            key = { element.url } >
                            <
                            NewsItem title = { element.title ? element.title.slice(0, 45) : '' }
                            description = { element.description ? element.description.slice(0, 88) : '' }
                            imageUrl = { element.urlToImage }
                            newsUrl = { element.url }
                            /> <
                            /div>
                        ))
                    } <
                    /div> <
                    div className = "container d-flex justify-content-between" >
                    <
                    button
                type = "button"
                className = "btn btn-dark"
                onClick = { this.handlePrevClick }
                disabled = { page === 1 || loading } >
                    Previous <
                    /button> <
                    button
                type = "button"
                className = "btn btn-dark"
                onClick = { this.handleNextClick }
                disabled = { page === totalPages || loading } >
                    Next <
                    /button> <
                    /div> <
                    /div>
            );
        }
    }