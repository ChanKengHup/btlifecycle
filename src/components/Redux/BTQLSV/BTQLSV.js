import React, { Component } from 'react'
import DSSinhVien from './DSSinhVien'
import FormDangKy from './FormDangKy'

export default class BTQLSV extends Component {
  render() {
    return (
      <div className='container'>
          <FormDangKy/>
          <DSSinhVien/>
      </div>
    )
  }
}
