import React from 'react'
import Home from '../Page/Home'
import { Routes, Route } from 'react-router-dom'
import About from '../Page/About'
import Services from '../Page/Services'
import Contact from '../Page/Contact'
import LocalDB from '../Page/LocalBD'
import PageNotFound from '../Page/PageNotFound'
import StudentDetail from '../Page/StudentDetail'

function Section() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/localdb" element={<LocalDB />}/>
          <Route path="/studentdetails/:id" element={<StudentDetail />} />
          <Route path='/*' element={<PageNotFound />}/>
        </Routes>
    </>
  )
}

export default Section
