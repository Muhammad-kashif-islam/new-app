import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NaveBar from './NaveBar'
import NewsPage from './NewsPage'
import Footer from './Footer'
import { BrowserRouter,Switch, Route, Routes } from 'react-router-dom'
// import Card from './Card'
export default class App extends Component {
  render() {
    return (
      <div>
         <NaveBar /> 
        <Routes>
          <Route exacte path='/' element={<NewsPage pageSize={20} country="us" key="general" category="general"   apikey="120a0cb0d0c0409db4522c39f5b2b234" />}></Route>
          <Route exacte path='/business' element={<NewsPage pageSize={20} country="us" key="business" category="business"apikey="120a0cb0d0c0409db4522c39f5b2b234" />}></Route>
          <Route exacte path='/health' element={<NewsPage pageSize={20} country="us"  key="health" category="health"     apikey="120a0cb0d0c0409db4522c39f5b2b234" />}></Route>
          <Route exacte path='/science' element={<NewsPage pageSize={20} country="us" key="science" category="science"   apikey="120a0cb0d0c0409db4522c39f5b2b234" />}></Route>
          <Route exacte path='/sports' element={<NewsPage pageSize={20} country="in" key="sports" category="sports"      apikey="120a0cb0d0c0409db4522c39f5b2b234"  />}></Route>
          <Route exacte path='/technology' element={<NewsPage pageSize={20} country="us"  category="technology"          apikey="120a0cb0d0c0409db4522c39f5b2b234" />}></Route>
         </Routes>
         {/* <Card/> */}
         <Footer />
      </div>
    )
  }
}
