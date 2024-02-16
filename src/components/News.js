import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading,setLoading] = useState(true);

    
    const capitalizeFLetter = (string) => {
        return (string[0].toUpperCase() +
            string.slice(1));
    }





    // async updatePage() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=63daa0d2cc77462a91bcfe8b60f8ee17&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parseData = await data.json();
    //     this.setState({
    //         articles: parseData.articles,
    //         loading: false,
    //         totalResults: parseData.totalResults,
    //     });
    // }

    const updateNews = async()=>{
       const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(5);
        document.title = `${capitalizeFLetter(props.category)} - NewsMonkey`;
        let data = await fetch(url);
        let parseData = await data.json();
        setLoading(false);
        console.log(parseData);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    }, []);


    // handleNxtNews = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=63daa0d2cc77462a91bcfe8b60f8ee17&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parseData = await data.json();
    //     console.log(parseData);
    //     this.setState({
    //         articles: parseData.articles,
    //         loading: false,
    //         totalResults: parseData.totalResults,
    //         page: this.state.page + 1,
    //     });  
    // }
    // handlePrvNews = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=63daa0d2cc77462a91bcfe8b60f8ee17&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parseData = await data.json();
    //     console.log(parseData);
    //     this.setState({
    //         articles: parseData.articles,
    //         loading: false,
    //         totalResults: parseData.totalResults,
    //         page: this.state.page - 1,
    //     });
    // }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        setArticles(articles.concat(parseData.articles))
        setPage(page + 1);
        setTotalResults(parseData.totalResults);
    }
    return (
        <>
            <h1 className='text-center' style={{ margin: '35px 0px', marginTop: '80px' }}>NewsMoneky - Top {capitalizeFLetter(props.category)} Headlines</h1>
            {loading && <Loading/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}
            >
                <div className="container">
                    <div className="row ">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    category: 'General',
    pageSize: 6,
    country: 'in',
}
News.propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
    country: PropTypes.string,
}


export default News;