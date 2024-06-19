import React, { Component } from 'react'
import Navbar from './components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  pageSize=5;
  apikey=process.env.REACT_NEWS_APP_API
  state= {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div className='container'>
  <BrowserRouter>
  <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
    
      />
  <Navbar/>
<Routes>
  <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={5} country="in" category="general" />} />
  <Route path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey}key="business" pageSize={5} country="in" category="business" />} />
  <Route path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey}key="entertainment" pagesize={5} country="in" category="entertainment" />}/>
  <Route path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey}key="health" pagesize={5} country="in" category="health"/>}/>
  <Route path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey}key="science" pagesize={5} country="in" category="science"/>}/>
  <Route path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey}key="sports" pagesize={5} country="in" category="sports"/>}/>
  <Route path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey}key="technology" pagesize={5} country="in" category="technology"/>}/>
</Routes>
  {/* <Switch>  
 <Route exact path="/"><News setProgress={this.setProgress} apikey={this.apikey}key="general" pagesize={6} country="in" category="general"/>
</Route>
<Route exact path="/business"><News setProgress={this.setProgress} apikey={this.apikey}key="business" pagesize={6} country="in" category="business"/>
</Route>
<Route exact path="/entertainment"><News setProgress={this.setProgress} apikey={this.apikey}key="entertainment" pagesize={6} country="in" category="entertainment"/>
</Route>
<Route exact path="/health"><News setProgress={this.setProgress} apikey={this.apikey}key="health" pagesize={6} country="in" category="health"/>
</Route>
<Route exact path="/science"><News setProgress={this.setProgress} apikey={this.apikey}key="science" pagesize={6} country="in" category="science"/>
</Route>
<Route exact path="/sports"><News setProgress={this.setProgress} apikey={this.apikey}key="sports" pagesize={6} country="in" category="sports"/>
</Route>
<Route exact path="/technology"><News setProgress={this.setProgress} apikey={this.apikey}key="technology" pagesize={6} country="in" category="technology"/>
</Route>
</Switch> */}
</BrowserRouter>
</div>
    )
  }
}
