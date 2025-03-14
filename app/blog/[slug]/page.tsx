'use client'
import BlogItem from '@/components/BlogItem'
import BlogBreadcrumb from '@/components/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ICONS, IMAGES } from '@/constant'
import { cn } from '@/lib/utils'
import { Calendar, ChevronDown, ChevronUp, Clock } from 'lucide-react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const SOCIALS = [
  {
    name: 'zalo',
    icon: ICONS.ZALO,
  },
  {
    name: 'facebook',
    icon: ICONS.FACEBOOK,
  },

  {
    name: 'twitter',
    icon: ICONS.TWITTER,
  },
  {
    name: 'linkedin',
    icon: ICONS.LINKEDIN,
  },
  {
    name: 'reddit',
    icon: ICONS.REDDIT,
  },
]

function BlogPost() {
  const params = useParams<{ slug: string }>()
  const [activeTOC, setActiveTOC] = useState('')
  const [isOpen, setIsOpen] = useState(true)

  const handleScroll = (id: string) => {
    setActiveTOC(id)
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  return (
    <div className='relative'>
      {/* Social Share Sidebar */}
      <div className='flex z-50 flex-col items-center gap-3 w-12 fixed left-[10%] top-[40%]'>
        {SOCIALS.map((item, i) => (
          <div
            key={i}
            className='cursor-pointer w-12 h-12 border border-[#15AA7A] flex justify-center items-center rounded-2xl'>
            <Image
              width={24}
              height={24}
              alt={item.name}
              src={item.icon}></Image>
          </div>
        ))}
      </div>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        {/* Breadcrumb */}
        <div className='w-full flex justify-center items-center my-16'>
          <BlogBreadcrumb id={params.slug} />
        </div>

        <div className='flex flex-col md:flex-row gap-8'>
          {/* Main Content */}
          <div className='flex-1 space-y-4'>
            <div className='text-xs font-medium text-[#0F4F9E] mb-2 bg-[#E2F0FE] w-fit px-2 py-1 rounded-lg'>
              Quản Lý Sản Xuất
            </div>
            <h1 className='text-4xl font-extrabold  mb-6'>
              Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nhất Nên Biết
            </h1>
            <div className='flex justify-between'>
              <div className='flex justify-center items-center space-x-4'>
                <div className='p-4 rounded-full border border-[#F1F5F7]'>
                  <Image
                    width={34}
                    height={33}
                    alt='logo'
                    src={ICONS.LOGO}></Image>
                </div>
                <div>
                  <div className='text-[#667F93] text-sm font-medium'>
                    Tác giả
                  </div>
                  <div className='text-[#33404A] text-base font-bold'>
                    FOSO Creator
                  </div>
                </div>
              </div>
              <div className='flex items-center text-[#667F93]  mb-6 space-x-4'>
                <div className='flex items-center space-x-2'>
                  <Calendar className='h-4 w-4' />
                  <span>Cập nhật vào 12/31/2022</span>
                </div>

                <div className='flex items-center space-x-2 border-l-2 border-[#D9E1E7] pl-4'>
                  <Clock className='h-4 w-4' />
                  <div>10 phút đọc</div>
                </div>
              </div>
            </div>

            {/* Part 1 */}
            <figure>
              <div className='relative w-full aspect-[900/600]'>
                <Image src={IMAGES.PIC1} alt='Quy Trình 5S Là Gì?' fill />
              </div>

              <figcaption className='text-center font-normal text-[#667F93]'>
                Quy trình 5s là gì?
              </figcaption>
            </figure>

            <div className='prose max-w-none'>
              <blockquote className='border-l-4 border-blue-500 pl-4 italic text-gray-600'>
                "5S là một phương pháp quản lý và tổ chức nơi làm việc một cách
                khoa học, sạch sẽ và an toàn. 5S giúp cải thiện năng suất, chất
                lượng và tạo môi trường làm việc tốt hơn cho nhân viên."
              </blockquote>

              <h2
                id='blog-1'
                className='text-xl font-bold text-[#15AA7A] mt-8 mb-4 flex items-center'>
                1. 5S là gì và nguồn gốc?
              </h2>
              <p>
                Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong
                sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào
                Nhật Bản
              </p>
              <p>
                Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận
                dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5
                chữ S đầu trong tiếng Nhật
              </p>
              <ul className='list-disc pl-6 mb-4 text-[#15AA7A] text-base'>
                <li>
                  <strong>Seiri </strong>
                  <span className='text-black'>(Ngăn nắp)</span>
                </li>

                <li>
                  <strong>Seiso </strong>
                  <span className='text-black'>(Sạch sẽ)</span>
                </li>
                <li>
                  <strong>Seiton </strong>
                  <span className='text-black'>(Trật tự)</span>
                </li>

                <li>
                  <strong>Shitsuke </strong>
                  <span className='text-black'>(Sẵn sàng)</span>
                </li>
                <li>
                  <strong>Seiketsu </strong>
                  <span className='text-black'>(Săn sóc)</span>
                </li>
              </ul>

              {/* Part 2 */}
              <h2
                id='blog-2'
                className='text-xl font-bold text-[#15AA7A]  mt-8 mb-4 flex items-center'>
                2. Tại sao doanh nghiệp cần áp dụng quy trình 5S?
              </h2>
              <p>
                Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho
                mỗi bước của quy trình với mục đích cải tiến môi trường làm việc
                của doanh nghiệp.
              </p>
              <br />
              <p>
                Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh
                nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc
                logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng
                sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần
                thiết
              </p>
              <br />
              <p>
                Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói
                quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên
                một văn hóa doanh nghiệp tích cực.
              </p>
              <figure>
                <div className='relative w-full aspect-[900/600]'>
                  <Image
                    src={IMAGES.PIC2}
                    alt='Tại sao doanh nghiệp cần quy trình 5S?'
                    fill
                  />
                </div>

                <figcaption className='text-center font-normal text-[#667F93]'>
                  Tại sao doanh nghiệp cần quy trình 5S?
                </figcaption>
              </figure>
              {/* Part 3 */}
              <h2
                id='blog-3'
                className='text-xl font-extrabold text-[#15AA7A]  mt-8 mb-4 flex items-center'>
                3. Tại sao doanh nghiệp cần áp dụng quy trình 5S?
              </h2>
              <p>
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
                trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng
                minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các
                lý do vì sao bạn nên lựa chọn quy trình:
              </p>
              <br />
              <ul className='list-none mb-4'>
                <li>
                  <h5 id='blog-3.1' className='text-[#15AA7A] font-semibold'>
                    3.1 Cải thiện rõ nét môi trường làm việc
                  </h5>
                  <p>
                    Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn,
                    gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không
                    gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.
                  </p>
                </li>
                <br />

                <li>
                  <h5 id='blog-3.2' className='text-[#15AA7A] font-semibold'>
                    3.2 Tiết kiệm thời gian đáng kể
                  </h5>
                  <p>
                    Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm
                    được thời gian đáng kể khi không còn mất nhiều thời gian tìm
                    kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc.
                    Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ
                    dàng. 
                  </p>
                </li>
                <br />
                <li>
                  <h5 id='blog-3.3' className='text-[#15AA7A] font-semibold'>
                    3.3 Tăng năng suất làm việc
                  </h5>
                  <p>
                    Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần
                    thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ
                    dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu,
                    giúp tiết kiệm thời gian và tăng năng suất làm việc.
                  </p>
                </li>
                <br />
                <li>
                  <h5 id='blog-3.4' className='text-[#15AA7A] font-semibold'>
                    3.4 Tiết kiệm chi phí
                  </h5>
                  <p>
                    Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng
                    phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể
                    giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của
                    mình
                  </p>
                </li>
                <br />
                <li>
                  <h5 id='blog-3.5' className='text-[#15AA7A] font-semibold'>
                    3.5 Tăng chất lượng sản phẩm
                  </h5>
                  <p>
                    5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn
                    gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm
                    thiểu lỗi sản xuất không mong muốn.
                  </p>
                </li>
              </ul>
              <figure>
                <div className='relative w-full aspect-[900/600]'>
                  <Image
                    src={IMAGES.PIC3}
                    alt='Quy trình 5s gồm các bước'
                    fill
                  />
                </div>

                <figcaption className='text-center font-normal text-[#667F93]'>
                  Quy trình 5s gồm các bước
                </figcaption>
              </figure>

              {/* Part 4 */}
              <h2
                id='blog-4'
                className='text-xl font-bold text-[#15AA7A] mt-8 mb-4 flex items-center'>
                4. Quy trình 5S gồm các bước
              </h2>
              <p>
                5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường
                hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao
                gồm năm bước cơ bản sau:
              </p>
              <br />
              <ul className='list-none  mb-4 text-[#15AA7A] text-base'>
                <li>
                  <strong id='blog-4.1'>4.1 Seiri </strong>
                  <span>(Ngăn nắp)</span>
                  <p className='text-black'>
                    Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn
                    nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần
                    thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và
                    tiết kiệm thời gian.
                  </p>
                </li>
                <br />

                <li>
                  <strong id='blog-4.2'>4.2 Seiso </strong>
                  <span>(Sạch sẽ)</span>
                  <p className='text-black'>
                    Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ,
                    thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để
                    giúp tìm kiếm và sử dụng chúng một cách dễ dàng.
                  </p>
                </li>
                <br />
                <li>
                  <strong id='blog-4.3'>4.3 Seiton </strong>
                  <span>(Vệ sinh)</span>
                  <p className='text-black'>
                    Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá
                    nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn
                    sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm
                    thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
                    nhân viên.
                  </p>
                </li>
                <br />
                <li>
                  <strong id='blog-4.4'>4.4 Seiketsu </strong>
                  <span>(Tiêu chuẩn hóa)</span>
                  <p className='text-black'>
                    Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa.
                    Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng
                    và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.
                  </p>
                </li>
                <br />
                <li>
                  <strong id='blog-4.5'>4.5 Shitsuke </strong>
                  <span>(Kỷ luật)</span>
                  <p className='text-black'>
                    Đây được xem là bước cuối cùng trong quy trình. Và bước này
                    đóng vai trò quan trọng trong duy trì tính hiệu quả của quy
                    tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ
                    thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người
                    trong tổ chức duy trì và tuân thủ theo quy trình.
                  </p>
                </li>
              </ul>
              <figure>
                <div className='relative w-full aspect-[900/600]'>
                  <Image
                    src={IMAGES.PIC4}
                    alt='Các bước thực hiện quy trình 5s'
                    fill
                  />
                </div>

                <figcaption className='text-center font-normal text-[#667F93]'>
                  Các bước thực hiện quy trình 5s
                </figcaption>
              </figure>
              {/* Part 5 */}
              <h2
                id='blog-5'
                className='text-xl font-bold text-[#15AA7A] mt-8 mb-4 flex items-center'>
                5. Quy trình được thực hiện như sau:
              </h2>
              <p>
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
                trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng
                minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các
                lý do vì sao bạn nên lựa chọn quy trình:
              </p>
              <br />
              <ul className='list-none  mb-4 text-[#15AA7A] text-base'>
                <li>
                  <h5 id='blog-5.1'>5.1 Giai đoạn chuẩn bị </h5>
                  <p className='text-black'>
                    Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực
                    đứng ra điều hành và quản lý quá trình thực hiện quy trình
                    5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng
                    quy tắc 5S sẽ hiệu quả hơn.
                  </p>
                </li>
                <br />
                <li>
                  <h5 id='blog-5.2'>5.2 Triển khai rộng rãi </h5>
                  <p className='text-black'>
                    Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về
                    quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ
                    kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp
                    của bạn.
                  </p>
                </li>
                <br />
                <li>
                  <h5 id='blog-5.3'>
                    5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp{' '}
                  </h5>
                  <p className='text-black'>
                    Đây là bước có thể khiến mọi người không hào hứng trong các
                    bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực
                    và tạo không khí hào hứng cho từng cá nhân.
                  </p>
                </li>
                <br />
                <li>
                  <h5 id='blog-5.4'>5.4 Sàng lọc, sắp xếp và đánh giá </h5>
                  <p className='text-black'>
                    Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh
                    toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ
                    ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học
                    hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này.
                  </p>
                </li>
                <br />
                <li>
                  <h5 id='blog-5.5'>5.5 Đánh giá </h5>
                  <p className='text-black'>
                    Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại
                    quá trình cải tiến và xem xét cần cải tiến phương diện nào
                    hay không trong quá trình thực hiện quy trình 5S
                  </p>
                </li>
              </ul>

              {/* Part 6 */}
              <h2
                id='blog-6'
                className='text-xl font-bold text-[#15AA7A] mt-8 mb-4 flex items-center'>
                6. Quy trình 5S có giống với Kaizen?
              </h2>
              <p>
                Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
                không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng
                giữa chúng có mối quan hệ chặt chẽ với nhau.
              </p>
              <br />
              <blockquote className='border-l-4 border-[#15AA7A] pl-4 italic text-[#33404A] text-xl'>
                Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục
                trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích
                cực, mang tính liên tục và bền vững. 
              </blockquote>
              <br />
              <blockquote className='border-l-4 border-[#15AA7A] pl-4 italic text-[#33404A] text-xl'>
                Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải
                tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp
                đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. 
              </blockquote>
              <br />
              <p>
                Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy
                tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm
                việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước
                đầu tiên trong quá trình cải tiến liên tục của phương pháp
                Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải
                tiến tiếp theo. 
              </p>

              {/* Part 7 */}
              <div>
                <h2
                  id='blog-7'
                  className='text-xl font-extrabold text-[#15AA7A] mt-8 mb-4 flex items-center'>
                  7. Đối tượng nào nên áp dụng 5S?
                </h2>
                <br />
                <p>
                  Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng
                  rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác
                  nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản
                  xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các
                  doanh nghiệp nhỏ.
                </p>
                <br />
                <p>
                  Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động
                  phức tạp, các trang thiết bị và vật dụng phải được quản lý và
                  sử dụng hiệu quả.
                </p>
                <figure>
                  <div className='relative w-full aspect-[900/600]'>
                    <Image
                      src={IMAGES.PIC5}
                      alt='Các yếu tố tạo nên thành công cho quy trình 5S'
                      fill
                    />
                  </div>

                  <figcaption className='text-center font-normal text-[#667F93]'>
                    Các yếu tố tạo nên thành công cho quy trình 5S
                  </figcaption>
                </figure>
              </div>
              {/* Part 8 */}
              <div>
                <h2
                  id='blog-8'
                  className='text-xl font-extrabold text-[#15AA7A] mt-8 mb-4 flex items-center'>
                  8. Các yếu tố tạo nên thành công cho quy trình 5S
                </h2>
                <br />
                <p>
                  Và những nhân tố quyết định đến quá trình thành công của quy
                  trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là
                  từ phía
                </p>
                <br />
                <ul className='list-disc mb-4 '>
                  <li>
                    <p>
                      Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh
                      nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh
                      nghiệp có áp dụng quy tắc này hay không
                    </p>
                  </li>
                  <li>
                    <p>
                      Chương trình, kế hoạch thực hiện quy trình: Sau khi phía
                      lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng,
                      kế hoạch thực hiện triển khai 5S. 
                    </p>
                  </li>
                  <li>
                    <p>
                      Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp
                      cần huy động và khuyến khích nhân viên tự nguyện thực hiện
                      vì lợi ích chung của tổ chức, của doanh nghiệp.
                    </p>
                  </li>
                </ul>
                <br />
                <p>
                  Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng
                  cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi
                  bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình.
                  Và với những thông tin bổ ích như trên, FOSO mong rằng phần
                  nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt
                  bậc trong tương lai.
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className='mt-8 space-y-6'>
              <div className='text-center text-[#33404A]  space-y-2 '>
                <p className='text-center  font-extrabold text-xl'>
                  Bạn thấy bài viết này thế nào?
                </p>
                <div className='font-medium'>4 phản hồi</div>
              </div>

              <div className='grid grid-cols-6 items-center justify-center w-fit m-auto gap-10'>
                {[
                  {
                    icon: ICONS.LIKE,
                    name: 'Hữu ích',
                    amount: 1,
                  },
                  {
                    icon: ICONS.LOVE,
                    name: 'Yêu thích',
                    amount: 2,
                  },
                  {
                    icon: ICONS.HAPPY,
                    name: 'Thú vị',
                    amount: 0,
                  },
                  {
                    icon: ICONS.WOW,
                    name: 'Bất ngờ',
                    amount: 1,
                  },
                  {
                    icon: ICONS.YAWN,
                    name: 'Nhàm chán',
                    amount: 0,
                  },
                  {
                    icon: ICONS.ANGRY,
                    name: 'Tức giận',
                    amount: 0,
                  },
                ].map((rating, i) => (
                  <div
                    className='flex flex-col items-center justify-center col-span-1 '
                    key={i}>
                    <div>
                      <Image
                        width={48}
                        height={48}
                        src={rating.icon}
                        alt={rating.name}></Image>
                    </div>
                    <div
                      className={cn('font-bold', { 'text-[#10805B]': i == 0 })}>
                      {rating.amount}
                    </div>
                    <div
                      className={cn('text-sm font-medium', {
                        'text-[#10805B]': i == 0,
                      })}>
                      {rating.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Articles */}
          </div>

          {/* Right Sidebar */}
          <div className='max-w-[492px]'>
            {/* Table of Contents */}
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className='w-[350px] space-y-2'>
              <div className='flex items-center justify-between space-x-4 mb-6'>
                <h3 className='font-extrabold text-2xl  text-[#050505]'>
                  Nội Dung Bài Viết
                </h3>
                <CollapsibleTrigger asChild>
                  <Button variant='ghost' size='sm'>
                    {isOpen ? (
                      <ChevronUp className='h-5 w-5 text-[#15AA7A]' />
                    ) : (
                      <ChevronDown className='h-5 w-5 text-[#15AA7A]' />
                    )}

                    <span className='sr-only'>Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>

              <CollapsibleContent className='space-y-2'>
                <div className=' mb-6 font-medium text-lg'>
                  <ul className='text-sm space-y-2'>
                    <li
                      onClick={() => {
                        handleScroll('blog-1')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-1',
                      })}>
                      1. Quy trình 5S là gì?
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-2')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-2',
                      })}>
                      2. Lợi ích quy trình 5S đem lại
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-3')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-3',
                      })}>
                      3. Tại sao doanh nghiệp cần áp dụng quy trình 5S?
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-3.1')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-3.1',
                      })}>
                      3.1 Cải thiện rõ nét môi trường làm việc
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-3.2')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-3.2',
                      })}>
                      3.2 Tiết kiệm thời gian đáng kể
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-3.3')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-3.3',
                      })}>
                      3.3 Tăng năng suất làm việc
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-3.4')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-3.4',
                      })}>
                      3.4 Tiết kiệm chi phí
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-3.5')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-3.5',
                      })}>
                      3.5 Tăng chất lượng sản phẩm
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-4')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-4',
                      })}>
                      4. Quy trình 5S gồm các bước
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-4.1')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-4.1',
                      })}>
                      4.1 Seiri (Ngăn nắp)
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-4.2')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-4.2',
                      })}>
                      4.2 Seiton (Sắp xếp)
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-4.3')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-4.3',
                      })}>
                      4.3 Seiso (Vệ sinh)
                    </li>
                    <li className=' font-medium ml-4'>
                      4.4 Seiketsu (Tiêu chuẩn hóa)
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-4.5')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-4.5',
                      })}>
                      4.5 Shitsuke (Kỷ luật)
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-5')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-5',
                      })}>
                      5. Quy trình được thực hiện như sau:
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-5.1')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-5.1',
                      })}>
                      5.1 Giai đoạn chuẩn bị
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-5.2')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-5.2',
                      })}>
                      5.2 Triển khai rộng rãi 
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-5.3')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-5.3',
                      })}>
                      5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-5.4')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-5.4',
                      })}>
                      5.4 Sàng lọc, sắp xếp và đánh giá
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-5.5')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-5.5',
                      })}>
                      5.5 Đánh giá
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-6')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-6',
                      })}>
                      6. Quy trình 5S có giống với Kaizen?
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-7')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-7',
                      })}>
                      7. Đối tượng nào nên áp dụng 5S?
                    </li>
                    <li
                      onClick={() => {
                        handleScroll('blog-8')
                      }}
                      className={cn(' font-medium cursor-pointer', {
                        'text-[#15AA7A] font-bold': activeTOC == 'blog-8',
                      })}>
                      8. Các yếu tố tạo nên thành công cho quy trình 5S
                    </li>
                  </ul>
                </div>
              </CollapsibleContent>
            </Collapsible>

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
        <div className='mt-12'>
          <h3 className='text-4xl font-extrabold text-[#050505] mb-6'>
            Bài Viết Liên Quan
          </h3>
          <div className='grid grid-cols-3 gap-6'>
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className='col-span-1'>
                  <BlogItem />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlogPost
