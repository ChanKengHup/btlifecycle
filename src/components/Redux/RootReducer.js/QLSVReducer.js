let student = {
    mangSV: [
        {maSV: 'user123', hoTen: 'Trần Văn Dũng',
         sdt: '0961237278', email: 'dungk51a2@gmail.com',
        
        },
        {maSV: 'user456', hoTen: 'Trần Văn Ngọc',matKhau: '12342135',
         sdt: '0961237278', email: 'dungk51a2@gmail.com',
         
        },
    ],

    thongTinSV: {
        maSV: '', hoTen: '',
        sdt: '', email: '',
       
       
    },
    SinhVien: {
        values: {
            maSV: '',
            hoTen: '',
            sdt: '',
            email: '',
           
        },
        errors: {
            maSV: '',
            hoTen: '',
            sdt: '',
            email: '',
           
        }
    },
    tenSV: ''
}
var mangSVPro = []
 student.mangSV.map(item => {
     mangSVPro.push(item)
 })

export const quanLySVReducer = (state = student, action) => {
    switch(action.type) {
        case 'ADD__DATA': {
           mangSVPro.push(action.sv)
            state.mangSV = [...state.mangSV, action.sv]
            return {...state}
        }
        case 'XOA_NGUOI_DUNG': {
           let mangNDXoa = [...state.mangSV]
          mangSVPro =  mangSVPro.filter(sv => sv.maSV !== action.maSV)
           state.mangSV = mangNDXoa.filter((nd) => {
                return nd.maSV !== action.maSV
           })
           return {...state}
        }
        case 'XEM_THONG_TIN': {
            // state.thongTinNguoiDung = action.thongTinND
            state.thongTinSV = action.thongTinSV
            // state.thongTinSV = {...state.thongTinSV}
            console.log( state.thongTinSV);
            return {...state}
        }
        case 'HANDLE__INPUT': {
            state.SinhVien = action.SinhVien
            return {...state}
        }
        case 'CAP_NHAT': {
            let mangCapNhat = [...state.mangSV]
            let SinhVienCapNhat = mangCapNhat.find((nd) => {
                return nd.maSV === action.thongtinCN.maSV
            })
            if(SinhVienCapNhat) {
                SinhVienCapNhat.maSV = action.thongtinCN.maSV
                SinhVienCapNhat.hoTen = action.thongtinCN.hoTen
                SinhVienCapNhat.sdt = action.thongtinCN.sdt
                SinhVienCapNhat.email = action.thongtinCN.email

            }
            state.mangSV = mangCapNhat;
            return {...state}
        }
        case 'DATA_INPUT': {
            state.tenSV = action.ten
            return {...state}
        }
        case 'SEARCH_SV': {
            
            let mangTimKiem = [...state.mangSV]
           
            if(mangTimKiem.length > 0) {
                var svFind = mangTimKiem.filter(sv => {
                    let svLower = sv.hoTen.toLowerCase()
                    let hotenLowe = action.nameSV.toLowerCase()
                    let index = svLower.indexOf(hotenLowe)
                    console.log(index);
                    return index > 0
                })

            }
            else {
                    state.mangSV = mangTimKiem
            }
            if(svFind.length == 0) {
                state.mangSV = mangSVPro

            }
             else if(svFind.length > 0) {
                state.mangSV =  svFind

            }
            
            return {...state}
        }
        default: return state
    }
}