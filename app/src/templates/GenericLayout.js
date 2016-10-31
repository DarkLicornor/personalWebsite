import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const GenericLayout = (props) => <div className='app'>
  <Header />
  <div>
    { props.children}
  </div>
  <Footer />
</div>

export default GenericLayout
