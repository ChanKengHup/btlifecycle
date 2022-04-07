import React, { Component } from 'react'
import { connect } from 'react-redux'

 class DSNguoiDung extends Component {
    render() {
       let handleSearch = (e) => {
           let  action = {
               type: 'DATA_INPUT',
               ten: e.target.value
           }
           this.props.dispatch(action)

       }


        return (
            <div >
                <div className="search mt-5">
                     <label>Nhập tên sinh viên để tìm</label>
                    <input onChange={handleSearch}  type="text" name='maSV' className="form-control" id="inputEmail4" />
                    <button type='button' onClick={() => {
                        console.log(this.props.tenSV);
                        let action = {
                            type: "SEARCH_SV",
                            nameSV: this.props.tenSV
                        }
                        this.props.dispatch(action)

                    }} className='btn btn-danger'>Search</button>
                </div>

            <div className='card mt-5'>
                <div className="card-header bg-dark text-white">
                    Danh sách người dùng
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Họ tên</th>
                                <th scope="col">Email</th>
                                <th scope="col">Số điện thoại</th>
                                <th scope="col"></th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.props.arrSV.map((item,index) => (

                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.hoTen}</td>
                                    <td>{item.email}</td>
                                    <td>{item.sdt}</td>
                                    <td>
                                        <button className='btn btn-danger mr-2'
                                         onClick={() => {
                                            let action = {
                                                type: 'XOA_NGUOI_DUNG',
                                                maSV: item.maSV
                                            }
                                            this.props.dispatch(action)
                                        }}>Xóa</button>
                                        <button className='btn btn-info'
                                        onClick={() => {
                                            let action = {
                                                type: 'XEM_THONG_TIN',
                                                thongTinSV: item
                                            }
                                        this.props.dispatch(action)

                                        }}

                                        >Xem</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
            </div>
        )
    }
}

const mapToProps = (rootReducer) => {
  return {
      arrSV: rootReducer.quanLySVReducer.mangSV,
      tenSV: rootReducer.quanLySVReducer.tenSV,
  }
}
export default connect(mapToProps)(DSNguoiDung)