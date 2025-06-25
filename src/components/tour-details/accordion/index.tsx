import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from 'lucide-react'
import { NameTour, TypeTour } from 'domain/index'
import { Included } from './cost/Included'
import { NotIncluded } from './cost/NotIncluded'
import { YouPrepare } from './prepare/YouPrepare'
import { MePrepare } from './prepare/MePrepare'
import { Policy } from './policy'
import { Children } from './policy/Children'
import { Impossible } from './policy/Impossible'
import { TourStart } from './policy/TourStart'
import { Register } from './register'
import { Payment } from './payment'

const noticeList = [
  {
    title: '✅ Giá tour bao gồm',
    content: Included
  },
  {
    title: '❌ Giá tour không bao gồm',
    content: NotIncluded
  },
  {
    title: '🎒 Bạn cần chuẩn bị gì khi đi tour',
    content: YouPrepare
  },
  {
    title: '🧑‍🤝‍🧑 GLT sẽ chuẩn bị gì cho bạn?',
    content: MePrepare
  },
  {
    title: '⚠️ Lưu ý khi Hoàn & Huỷ tour',
    content: Policy
  },
  {
    title: '👶 Lưu ý giá trẻ em',
    content: Children
  },
  {
    title: '🛡️ Trường hợp bất khả kháng',
    content: Impossible
  },
  {
    title: '👥 Số lượng khách tham gia',
    content: TourStart
  },
  {
    title: '📝 Hướng dẫn đặt tour',
    content: Register
  },
  {
    title: '💳 Hình thức thanh toán',
    content: Payment
  }
]

interface IProps {
  type: TypeTour
  name: NameTour
}

export const TourNoticeAccordion = ({ type, name }: IProps) => {
  return (
    <section
      id="notice"
      className="bg-white py-12 px-6 md:px-16 lg:px-24 xl:px-32"
    >
      <h2 className="title-section">
        NHỮNG THÔNG&nbsp;TIN CẦN&nbsp;LƯU&nbsp;Ý
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {noticeList.map((item, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <Disclosure.Button className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium hover:bg-gray-50 transition">
                  <span>{item.title}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      open ? 'rotate-180 text-orange-500' : ''
                    }`}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition duration-200 ease-out"
                  enterFrom="transform scale-y-0 opacity-0"
                  enterTo="transform scale-y-100 opacity-100"
                  leave="transition duration-150 ease-in"
                  leaveFrom="transform scale-y-100 opacity-100"
                  leaveTo="transform scale-y-0 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pb-4 text-sm text-gray-600">
                    {typeof item.content === 'function' ? (
                      <item.content type={type} name={name} />
                    ) : (
                      item.content
                    )}
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  )
}
