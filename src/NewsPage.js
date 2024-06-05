import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiners from './spiners';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
export default class NewsPage extends Component {
    articles = [];
    static defaultProps =
        {
            country: '',
            pageSize: 6,
            category: 'general',
            apikey: 'ad4d69524b544458bcb9457fe72c7de9'
        }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            page: 1,
            loading: false,
            totalresult:0

        }
    }
    async fetchMe() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles, totalresult: parseData.totalResults, loading: false });
        // console.log(this.state);
    }

    
    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parseData = await data.json();
        // this.setState({ articles: parseData.articles, totalresult: parseData.totalResults,loading:false });
        // console.log(this.state);
        this.fetchMe();
    }

     //for fetching data using next and fre button
    // previous = async () => {
    //     // this.setState({ loading: true });
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    //     // let data = await fetch(url);
    //     // let parseData = await data.json();
    //     // this.setState({
    //     //     articles: parseData.articles,
    //     //     page: this.state.page - 1,
    //     //     loading: false
    //     // });
    //     // console.log(this.state);
    //     this.setState({ page: this.state.page - 1 });
    //     this.fetchMe();
    // }
    // next = async () => {

    //     if (this.state.page + 1 >= Math.ceil(this.state.totalresult / this.props.pageSize)) {

    //     }
    //     else {
    //         // this.setState({ loading: true });
    //         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;

    //         // let data = await fetch(url);
    //         // let parseData = await data.json();
    //         // this.setState({
    //         //     articles: parseData.articles,
    //         //     page: this.state.page + 1,
    //         //     loading: false
    //         // });
    //         // console.log(this.state);
    //         // console.log(Math.ceil(this.state.totalresult /this.props.pageSize));
    //         this.setState({ page: this.state.page + 1 });
    //         this.fetchMe();
    //     }
    // }




    //for infinte scroll



//for infinte scroll fetch data
    fetchData= async()=>{
             let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;

            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                articles: this.state.articles.concat(parseData.articles),
                page: this.state.page + 1,
                loading: false
            });
}
    render() {
        return (
            <>
                <h1 id="headingtitle">Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} News</h1>
                {/* for using loading spiners */}
                {/* {this.state.loading&&<Spiners />}
                <section id="newsItems">
                    <div className='main'>
                        {!this.state.loading&& this.state.articles.map((element, index) => {
                            return <div className='item' key={element.url}><NewsItem title={element.title} descrption={element.description} img={element.urlToImage} url={element.url} /></div>;
                        })}
                    </div>
                </section> */}
                {/* {!this.state.loading && <div className="paginate">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.previous} className="">&larr; Previous </button>
                    <button disabled={this.state.page + 1 >= Math.ceil(this.state.totalresult / this.props.pageSize)} type="button" onClick={this.next} className="">Next &rarr;</button>
                </div>} */}


                {/* for using infinite scrool */}
                {this.state.loading && <Spiners />}
                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={this.state.articles.length!==this.state.totalresult}
                    loader={<Spiners/>}>
                    <section id="newsItems">
                        <div className='main'>
                            {this.state.articles.map((element, index) => {
                                return <div className='item' key={element.url}><NewsItem title={element.title} descrption={element.description} img={element.urlToImage} url={element.url} /></div>;
                            })}
                        </div>
                    </section>
                </InfiniteScroll>
            </>
        )
    }
}
