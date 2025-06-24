import {
  Facebook,
  Phone,
  Mail,
  MapPin,
  Heart,
  MessageCircle
} from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-700 text-white py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-8 gap-8 text-sm">
        {/* Cột 1 */}
        <div className="col-span-3">
          <h3 className="text-2xl font-bold mb-3">Giang Lang Thang</h3>
          <p className="leading-relaxed text-gray-100">
            Giang Lang Thang – khám phá thiên nhiên, kết nối cộng đồng. Chúng
            tôi tổ chức các tour trekking chuyên nghiệp kết hợp hoạt động trao
            quà, xây trường và hỗ trợ trẻ em vùng cao. Mỗi chuyến đi là một bước
            chân góp phần lan toả yêu thương đến những nơi còn khó khăn.
          </p>
        </div>
        <div className="col-span-1 sm:block hidden" />
        {/* Cột 2 */}
        <div className="col-span-2">
          <h4 className="text-lg font-semibold mb-3">Liên hệ</h4>
          <ul className="space-y-2 text-gray-100">
            <li className="flex items-center gap-2">
              <Phone size={16} /> 0986.20.22.20
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Hà Nội
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> gianglangthangvivu@gmail.com
            </li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div className="col-span-2">
          <h4 className="text-lg font-semibold mb-3">Kết nối với chúng tôi</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://facebook.com/gianglangthangg"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 hover:underline hover:text-green-200 transition"
              >
                <Facebook size={16} /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://zalo.me/0986202220"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 hover:underline hover:text-green-200 transition"
              >
                <MessageCircle size={16} /> Zalo
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Phần bản quyền */}
      <div className="mt-10 text-center text-xs text-green-200">
        © {new Date().getFullYear()} Giang Lang Thang. Made with{' '}
        <Heart size={12} className="inline mx-1 text-red-400" /> in Vietnam.
      </div>
    </footer>
  )
}
