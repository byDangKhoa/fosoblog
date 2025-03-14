'use client'

import { Button } from '@/components/ui/button'
import { IMAGES } from '@/constant'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className='w-full bg-white rounded-full    max-w-7xl mx-auto px-4 py-4 border-none shadow-lg mt-8 flex justify-center items-center'>
      <div className='max-w-7xl mx-auto flex items-center justify-between space-x-20'>
        <Link href='/' className='flex-shrink-0'>
          <Image
            src={IMAGES.FULL_LOGO}
            alt='FOSO Logo'
            width={135}
            height={56}
          />
        </Link>

        {/* Navigation */}
        <nav className='hidden md:flex items-center space-x-6'>
          <Link
            href='/about'
            className='text-gray-700 hover:text-emerald-600 font-medium'>
            Về Chúng tôi
          </Link>

          <div className='relative group'>
            <button className='flex items-center text-[#25272A] hover:text-emerald-600 font-medium'>
              Giải pháp
              <ChevronDown className='ml-1 h-4 w-4' />
            </button>
          </div>

          <div className='relative group'>
            <button className='flex items-center text-[#25272A] hover:text-emerald-600 font-bold'>
              Tài nguyên
              <ChevronDown className='ml-1 h-4 w-4' />
            </button>
            <div className='absolute w-2 h-2 aspect-square bg-[#1AD598] rounded-full -bottom-1 left-1/2 transform  -translate-x-1/2 translate-y-1/2'></div>
          </div>

          <Link
            href='/contact'
            className='text-[#25272A] hover:text-emerald-600 font-medium'>
            Liên hệ
          </Link>
        </nav>
        <div className='flex items-center space-x-4'>
          <div className='relative group'>
            <div className='relative inline-block p-[2px] rounded-full bg-gradient-to-t from-[#09090B0D] to-[#09090B1A]'>
              <Button className='flex items-center  bg-gray-100 rounded-full text-black py-1 hover:bg-primary/0'>
                <div className='rounded-full overflow-hidden'>
                  <Image
                    src={IMAGES.VN_FLAG}
                    alt='Vietnam Flag'
                    width={24}
                    height={24}
                  />
                </div>
                <span className='text-sm font-medium'>VI</span>
                <ChevronDown />
              </Button>
            </div>
          </div>
          <Button className='bg-[#1AD598] hover:bg-emerald-600  rounded-full  hidden md:flex items-center text-[#052B1E] font-bold text-sm'>
            Trở Thành Khách Hàng
            <ArrowUpRight className='ml-2  font-bold rounded-full bg-black text-white p-[2px]' />
          </Button>
        </div>
      </div>
    </header>
  )
}
