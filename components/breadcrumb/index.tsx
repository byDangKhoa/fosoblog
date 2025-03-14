'use client'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface Props {
  id: string
}
function BlogBreadcrumb({ id }: Props) {
  const isBlog = id.includes('blog')
  return (
    // <div className='text-sm text-gray-500 mb-6 text-center'>
    //   <span>Trang Chủ</span> <span className='mx-1'>{'>'}</span>
    //   <span>Tin nguyên</span> <span className='mx-1'>{'>'}</span>
    //   <span className={cn({})}>Blog</span>
    // </div>
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Trang chủ</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>Tài nguyên</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {!isBlog ? (
            <BreadcrumbLink href='/blog'>Blog</BreadcrumbLink>
          ) : (
            <BreadcrumbPage>Blog</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {!isBlog ? (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{id}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : null}
        <BreadcrumbItem></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BlogBreadcrumb
