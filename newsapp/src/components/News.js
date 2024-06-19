import React, { Component } from 'react'
import Newsitem from '../Newsitem'
// import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
import Spinner from './spinner';

export class News extends Component {
 static defaultProps = {
  country:'in',
  pagesize:6,
  category:'general'
}

static propTypes={
country:PropTypes.string,
pagesize:PropTypes.number,
category:PropTypes.string
}
capitalizeFirst=(string)=>{

  return string.charAt(0).toUpperCase()+string.slice(1)
}
constructor(props){
  super(props);
  console.log("This is constructor method")
  this.state={
    articles:[],
    loading:true,
    page:1,
    totalResults:0

  }
  document.title= `QuickUpdates-${this.capitalizeFirst(this.props.category)}`
}
async UpdateNews(){
  this.props.setProgress(0)
  let url=
  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2ec29a6cebd94cec8c50f031ffa2e1be&page=${this.state.page}&pagesize=${this.props.pagesize}`;
  
  this.setState({loading:true})
  let data=await fetch(url)
  this.props.setProgress(30)
  let parseData=await data.json()
  this.props.setProgress(50)
  console.log(parseData)
  this.setState({articles: parseData.articles,
    totalResults:parseData.totalResults,
    loading:false
  })
  this.props.setProgress(100)
 }

 async componentDidMount(){
  this.UpdateNews();

 }

//  handleNextclick=async ()=>{
//   if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize))){

//     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2ec29a6cebd94cec8c50f031ffa2e1be&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
//    this.setState({loading:true}) 
//     let data=await fetch(url)
//     let parseData=await data.json()

//     this.setState({
//       page:this.state.page+1,
//       articles: parseData.articles,
//        loading:false
//     })
//   }
  
//  }

//  handlePrevclick=async ()=>{
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2ec29a6cebd94cec8c50f031ffa2e1be&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
 
//   this.setState({loading:true})
//   let data=await fetch(url)
//   let parseData=await data.json()
//   this.setState({
//     page:this.state.page-1,
//     articles: parseData.articles,
//     loading:false
//   })
//  }
fetchMoreData= async()=>{
  this.setState({page:this.state.page+1})
  let url=
  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2ec29a6cebd94cec8c50f031ffa2e1be&page=${this.state.page}&pagesize=${this.props.pagesize}`;
  
  // this.setState({loading:true})
  let data=await fetch(url)
  let parseData=await data.json()
 
  this.setState({articles: this.state.articles.concat(parseData.articles),
    totalResults:parseData.totalResults,
    loading:false
  })

 }
  render() {
    return (
      <>
    <h1 className='text-center m-3'>Top Headlines on {this.capitalizeFirst(this.props.category)} category</h1>
    {this.state.loading&&<Spinner />}
    <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
      <div className='container m-3'>
          <div className='row'>
    {this.state.articles.map((element)=>{
      return <div className='col-md-4' key={element.url}>
        <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url}
        author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
    })}   
    </div>
          </div>
   
    </InfiniteScroll>
   
{/* <div className='container d-flex justify-content-between'>
<button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" class="btn btn-dark m-4" onClick={this.handleNextclick}>Next &rarr;</button>
<button disabled={this.state.page<1}type="button" class="btn btn-dark m-4" onClick={this.handlePrevclick}>&larr; Previous</button>

</div> */}

      </>
      
    )
  }
}

export default News;