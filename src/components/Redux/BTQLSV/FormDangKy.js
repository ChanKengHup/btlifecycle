    import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormDangKy extends Component {

   

    
   

    render() {
        const handeInput = (e) => {
            let {value, name} = e.target
            console.log(value);
         

            let newValues = {...this.props.SinhVien.values}
            newValues[name] = value

            let newErrors = {...this.props.SinhVien.errors}
            let message = ''
            // Kiểm tra rỗng
            
            if(value.trim() === '') {
                message = name + ' không được để trống';
            }
            // kiểm tra email
            let atrrValue = e.target.getAttribute('data-type')
            let regex = ''
            if( atrrValue === 'email') {
                regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                if(!regex.test(value)) {
                    message = name + ' không đúng định dạng'
                }
                
            }
            newErrors[name] = message

            let action = {
                type: 'HANDLE__INPUT',
                SinhVien: {
                    values: newValues,
                    errors: newErrors
                }
            }
            this.props.dispatch(action)
        }
        let {dispatch} = this.props
        const handleSubmit = (e) => {
            e.preventDefault()
            let isValid = true

            // Duyệt từng thuộc tính của obj
            for(let key in this.props.SinhVien.errors ) {
                if(this.props.SinhVien.errors[key] !== '') {
                    isValid = false;
                    break;
                }
            }   
            if(!isValid) {
                return;  
            }
            let action = {
                type: 'ADD__DATA',
                sv: this.props.SinhVien.values
            }
            dispatch(action)
        }

        let {maSV, hoTen, sdt, email} = this.props.SinhVien.errors
        let {values} = this.props.SinhVien
        console.log(values.maSV);


        
       
        return (
            <div className="card mt-5">
                <div className="card-header bg-dark text-white">
                   Thông tin Sinh Viên
                </div>
                <form onSubmit={handleSubmit}>

                    <div className="card-body">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Mã sinh viên</label>
                                <input value={values.maSV} onChange={handeInput} type="text" name='maSV' className="form-control" id="inputEmail4" />
                                <p className='text-danger'>{maSV}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Họ Tên</label>
                                <input value={values.hoTen} onChange={handeInput} type="text" name='hoTen' className="form-control" id="inputEmail4" />
                                <p className='text-danger'>{hoTen}</p>
                                
                            </div>
                        </div>

                        <div className="form-row">
                            
                            <div className="form-group col-md-6">
                                <label>Số điện thoại</label>
                                <input value={values.sdt} onChange={handeInput} type="text" name='sdt' className="form-control" id="inputEmail4" />
                                <p className='text-danger'>{sdt}</p>
                                
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input value={values.email} data-type='email' onChange={handeInput} type="email" name='email' className="form-control" id="inputEmail4" />
                                <p className='text-danger'>{email}</p>
                            
                            </div>
                        </div>


                    </div>
                    <div className="card-footer">
                        <button className='btn btn-success mr-2'>Đăng kí</button>
                        <button className='btn btn-primary' type='button' onClick={() => {
                            let action = {
                                type: 'CAP_NHAT',
                                thongtinCN: this.state.values
                            }
                            this.props.dispatch(action)
                        }}>Cập nhật</button>
                    </div>
                </form>
            </div>

        )
    }
}

const mapToProps = (rootReducer) => {
    return {
        thongTinSV: rootReducer.quanLySVReducer.thongTinSV,
        SinhVien: rootReducer.quanLySVReducer.SinhVien
    }
}
export default connect(mapToProps)(FormDangKy)