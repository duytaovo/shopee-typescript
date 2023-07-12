import React from 'react'
import { Link } from 'react-router-dom'

export default function Tags() {
  const sidebarLink = [
    {
      list_top: [
        {
          tiltle: 'Thư giãn',
          id: 1,
          to: '/',
        },
        {
          tiltle: 'Nạp năng lượng',
          id: 2,
          to: '/',
        },
        {
          tiltle: 'Tập thể dục',
          id: 3,
          to: '/',
        },
        {
          tiltle: 'Đi làm',
          id: 4,
          to: '/',
        },
        {
          tiltle: 'Tập trung',
          id: 5,
          to: '/',
        },
       
      ]
    }
  ]

  const renderListLink = () => {
    return sidebarLink[0].list_top.map((item) => {
      return (
        <Link to={item.to} key={item.id}>
          <div className='text-[#c3cada] opacity-60 hover:opacity-100 cursor-pointer p-2 rounded m-2 bg-[rgba(255,255,255,0.1)]'>
            <span className=' text-white cursor-pointer'>{item.tiltle}</span>
          </div>
        </Link>
      )
    })
  }
  return (
    <div className="flex items-center justify-start">
      {renderListLink()}
    </div>
  )
}
