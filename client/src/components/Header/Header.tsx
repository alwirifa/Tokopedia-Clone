import React from 'react'
import { IoCartOutline, IoPhonePortraitOutline, IoSearchOutline } from 'react-icons/io5'
import TrendingList from './TrendingList'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='fixed top-0 w-full z-50 bg-white'>

      <div className='border-b border-solid border-zinc-100 shadow-sm'>
        <div className='flex justify-between items-center px-8 py-2 bg-zinc-100 '>
          <div className='flex items-center'>
            <IoPhonePortraitOutline className="text-xl text-zinc-500 mr-2" />
            <p className='text-sm text-zinc-500 hover:text-green-500 cursor-pointer'>Download Tokopedia App</p>
          </div>
          <div className='hidden md:flex items-center space-x-8'>
            <p className='text-sm text-zinc-500 hover:text-green-600 cursor-pointer'>Tetang Tokopedia</p>
            <p className='text-sm text-zinc-500 hover:text-green-600 cursor-pointer'>Mitra Tokopedia</p>
            <p className='text-sm text-zinc-500 hover:text-green-600 cursor-pointer'>Mulai Berjualan</p>
            <p className='text-sm text-zinc-500 hover:text-green-600 cursor-pointer'>Promo</p>
            <p className='text-sm text-zinc-500 hover:text-green-600 cursor-pointer'>Tokopedia Care</p>
          </div>
        </div>
      </div>

      <div className='px-8 py-3 flex flex-col space-y-3 border-b '>
        <div className='flex items-center space-x-6'>

          {/* Logo */}
          <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" alt="" className='w-[150px] h-[35px] object-fill' />

          {/* Catergories */}
          <div className='px-4 py-2 hover:bg-zinc-100 rounded-md cursor-pointer'>
            <p className='text-sm'>Kategori</p>
          </div>

          {/* Search Bar */}
          <div className='w-full max-w-7xl  '>
            <div className='relative flex items-center w-full p-3 rounded-md border boder-solid border-zinc-300 focus-within:border-green-600 overflow-hidden'>
              <IoSearchOutline className="text-xl text-zinc-500" />
              <input
                className="peer h-full w-full outline-none text-sm placeholder:text-zinc-500 px-2"
                type="text"
                id="search"
                placeholder="Cari di Tokopedia.." />
            </div>
          </div>

          <div className='px-4 py-2 hover:bg-zinc-100 rounded-md cursor-pointer'>
            <IoCartOutline className="text-3xl text-zinc-500" />
          </div>

          {/* Auth Button */}
          <div className='flex space-x-3'>
            <button className='px-4 py-2 rounded-md text-sm font-semibold text-green-600 border border-green-600'>Masuk</button>
            <button className='px-4 py-2 rounded-md text-sm font-semibold text-white bg-green-600 border border-green-600'>Daftar</button>
          </div>

        </div>

        <div className='w-full mx-auto max-w-7xl px-2'>
          <TrendingList />
        </div>
      </div>
    </div>

  )
}

export default Header