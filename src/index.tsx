import { createRoot } from 'react-dom/client'
import { RootRoutes } from './routes'
import 'tailwindcss/tailwind.css'
import './style.css'
const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<RootRoutes />)
