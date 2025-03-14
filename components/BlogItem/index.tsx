import { IMAGES, ROUTES } from '@/constant'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function BlogItem() {
  return (
    <div className='rounded-xl overflow-hidden'>
      <div className='relative aspect-[505/475] w-full max-w-[505px] bg-blue-100 rounded-3xl'>
        <Image
          src={IMAGES.BLOG}
          alt='BOM LÀ GÌ?'
          fill
          className='object-cover'
        />
      </div>
      <div className='py-4'>
        <div className='text-xs font-medium text-[#0F4F9E] mb-2 bg-[#E2F0FE] w-fit px-2 py-1 rounded-lg'>
          Quản Lý Sản Xuất
        </div>
        <h3 className='text-2xl font-extrabold mb-2 text-[#33404A]'>
          Tại sao BOM quan trọng trong quản lý sản xuất?
        </h3>
        <div className='flex items-center text-[#667F93] mb-3 font-medium'>
          <Calendar className='h-4 w-4 mr-1' />
          <span className='mr-3'>12/31/2022</span>
          <Clock className='h-4 w-4 mr-1' />
          <span>10 phút đọc</span>
        </div>
        <div className='flex justify-start text-[#667F93] font-medium'>
          <Link
            href={ROUTES.BLOG_DETAIL('1')}
            className='text-lg flex items-center  hover:text-blue-600'>
            Khám phá thêm
            <ArrowRight className='ml-4' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
