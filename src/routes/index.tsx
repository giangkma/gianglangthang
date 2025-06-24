import { TourLayout } from 'components/layouts/TourLayout'
import { LaoThan } from 'pages/tours/lao-than'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const RootRoutes = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<TourLayout />}>
            <Route path="/lao-than" element={<LaoThan />} />
          </Route>
          <Route path="*" element={<></>} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  )
}
