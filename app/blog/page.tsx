import BlogItem from '@/components/BlogItem'
import BlogBreadcrumb from '@/components/breadcrumb'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { IMAGES } from '@/constant'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=' mx-auto px-4 py-8 text-[#050505] relative'>
      <div className='absolute w-[500px] h-[500px] bg-[#CCFFEC] rounded-full blur-3xl opacity-70 left-0 top-80 transform  -translate-x-2/3'></div>

      {/* Breadcrumb */}
      <div className='w-full flex justify-center items-center my-16'>
        <BlogBreadcrumb id='/blog' />
      </div>
      <div className='flex justify-center items-center mb-8 px-4'>
        <div>
          <Image
            src={IMAGES.CALENDAR}
            alt='Calendar'
            width={195}
            height={190}
          />
        </div>
        <div className='text-center flex-1 space-y-6'>
          <h1 className='text-6xl'>
            <span className='mr-3'> Blog</span>
            <span className='bg-gradient-to-b from-[#53B086]  to-[#53B086FC] bg-clip-text text-transparent font-extrabold '>
              F
            </span>
            <span className='bg-gradient-to-br from-[#53B086] via-[#53B086] to-[#53B08680] bg-clip-text text-transparent font-extrabold'>
              O
            </span>
            <span className='bg-gradient-to-tl from-[#53B086]  to-[#53B08680] bg-clip-text text-transparent font-extrabold'>
              S
            </span>
            <span className='bg-gradient-to-tr from-[#53B086]  to-[#53B086FC] bg-clip-text text-transparent font-extrabold'>
              O
            </span>
            <span className='mx-1 '>-</span>
          </h1>
          <div className='text-6xl flex justify-center items-center space-x-2'>
            <div className='z-1'> Cập Nhật Tin Tức</div>
            <div className='text-[#050505] relative'>
              <div className='z-10 relative font-extrabold'> Mới Nhất</div>
              <div className='w-full h-7 bg-[#a3eed6] absolute bottom-0 rounded-full z-0'></div>
            </div>
          </div>
          <p className='text-[#33404A] mt-2 font-medium text-lg'>
            Cùng FOSO tham gia kiến thức, xu hướng công nghệ và sản xuất ngay!
          </p>
        </div>
        <div>
          <Image src={IMAGES.HAND} alt='Hand' width={195} height={159} />
        </div>
      </div>

      <div className='flex  gap-8 max-w-7xl m-auto'>
        {/* Main Content */}
        <div className='w-full md:w-2/3'>
          <h2 className='text-4xl font-extrabold mb-6'>Tất Cả Bài Viết</h2>

          {/* Featured Post */}
          <div className='mb-8 rounded-xl overflow-hidden bg-[url(/assets/images/banner.png)] bg-no-repeat bg-center bg-cover aspect-[1042/319] w-full max-w-[1042px]'>
            <div className='flex justify-between items-center bg-gradient-to-r from-[#013DA0] via-[#025ACE] to-[#0375F3] text-white p-6 rounded-xl overflow-hidden'>
              <div className='flex-1'>
                <h3 className='text-2xl font-bold mb-4 max-w-[376px]  '>
                  Gia nhập cộng đồng FMRP - Kết nối, chia sẻ, cùng phát triển!
                </h3>
                <Button
                  variant='outline'
                  className='bg-transparent rounded-full'>
                  <div className='flex justify-between items-center w-full px-6'>
                    <div>Tham Gia Ngay</div>
                    <ArrowUpRight className='ml-2 h-4 w-4 font-bold' />
                  </div>
                </Button>
              </div>
              <div className='relative aspect-[473/294] w-full flex-1'>
                <Image
                  src={IMAGES.BANNER_RIGHT}
                  alt='banner'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <BlogItem key={i} />
              ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className='w-full max-w-[366px]'>
          {/* Search */}
          <div className='mb-8 '>
            <h3 className='text-2xl font-extrabold mb-4'>Tìm Kiếm</h3>
            <div className='relative shadow-md px-2  rounded-xl'>
              <Input
                placeholder='Tìm kiếm bài viết'
                className='h-16 ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0 md:text-base placeholder:text-[#ACB3C7] '
              />
              <Button className=' flex justify-center items-center aspect-square w-full max-w-12 absolute right-2 top-1/2  bg-[#15AA7A] text-white rounded-xl transform  -translate-y-1/2'>
                <div className='relative aspect-square w-full max-w-6'>
                  <Image
                    src={IMAGES.SEARCH}
                    alt='search-icon'
                    fill
                    className='object-cover'
                  />
                </div>
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className='mb-8'>
            <h3 className='text-2xl font-extrabold mb-4'>Danh Mục</h3>
            <div className='space-y-2'>
              {[
                { name: 'Tất cả', count: 108 },
                { name: 'Thiết Kế Website', count: 36 },
                { name: 'Thiết Kế App Mobile', count: 13 },
                { name: 'Quản Lý Sản Xuất', count: 25 },
                { name: 'Quản Lý Bán Hàng', count: 32 },
                { name: 'Báo Chí Nói Về FOSO', count: 7 },
                { name: 'Tin Tức FOSO', count: 5 },
              ].map((category, i) => (
                <div
                  key={i}
                  className='flex justify-between items-center  text-lg font-medium'>
                  <span className='text-[#33404A]'>{category.name}</span>
                  <span className='text-[#667F93]'>{category.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Promotional Banners */}
          <div className='space-y-6'>
            <div className='relative rounded-xl bg-[url(/assets/images/side-upper.png)] bg-no-repeat bg-cover bg-center aspect-[366/651] max-w-[366px] w-full'>
              <Button className='opacity-0 absolute bottom-14 w-full h-16'></Button>
            </div>

            <div className='relative rounded-xl bg-[url(/assets/images/side-lower.png)] bg-no-repeat bg-cover bg-center aspect-[366/651] max-w-[366px] w-full'>
              <Button className='opacity-0 absolute bottom-14 w-full h-16'></Button>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className='flex justify-between items-center mt-8'>
        <div className='text-[#B3C5D4] flex justify-center items-center font-semibold space-x-2 text-base'>
          <ArrowLeft className='' />
          <div>Trang trước</div>
        </div>
        <div className='flex gap-2'>
          <Button
            variant='outline'
            className='h-10 w-10 p-0 rounded-md bg-[#D1F7EA] border-none font-semibold text-base'>
            1
          </Button>
          {[2, 3, '...', 9, 10].map((page, i) => (
            <Button
              key={i}
              variant='outline'
              className='h-10 w-10 p-0 rounded-md bg-none border-none text-[#809FB8] font-semibold text-base'>
              {page}
            </Button>
          ))}
        </div>
        <div className='text-[#4D5F6E] flex items-center font-semibold space-x-2 text-base'>
          <div>Trang kế tiếp</div>
          <ArrowRight />
        </div>
      </div>
    </div>
  )
}
