import { createRoot } from 'react-dom/client'
import { RootRoutes } from './routes'
import 'tailwindcss/tailwind.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <>
    <ToastContainer />
    <RootRoutes />
  </>
)
