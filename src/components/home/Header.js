import React from "react";
import searchImage from '../../assets/magnifier.png'
import userImage from '../../assets/user1.png'
import './HeaderCSS.css'
import {useState} from 'react'

function Header() {
  const dictDay = {
    0:'Chủ nhật',
    1:'Thứ Hai',
    2:'Thứ Ba',
    3:'Thứ Tư',
    4:'Thứ Năm',
    5:'Thứ Sáu',
    6:'Thứ Bảy'
  }
  let date = new Date()
  const [dateCurr,setDateCurr] = useState(date.toLocaleDateString())
  const [dayCurr,setDayCurr] = useState(dictDay[date.getDate()])

  return (
    <div className="Header">
      <div className="tool-bar">
        <label className='namePaper'>Time News</label>
        <label className='text-color text-date'>{`${dayCurr}, ${dateCurr}`}</label>

        
        <div className='div-search'>
            <input type='text' placeholder='Nhập nội dung...' className='search'/>
            <img src={searchImage} className='image' alt='search'/>
        </div>
            
        <div className='div-user'>
            <img src ={userImage} className='userIcon' />
            <p className='text-color'>Đăng nhập</p>

        </div>

      </div>
      
    </div>
  );
}

export default Header;
