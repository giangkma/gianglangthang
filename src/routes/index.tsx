import { HomeLayout } from 'components/layouts/home'
import { TourLayout } from 'components/layouts/tour'
import { Home } from 'pages/home'
import { KyQuanSan } from 'pages/tours/trekking/ky-quan-san'
import { LaoThan } from 'pages/tours/trekking/lao-than'
import { LungCung } from 'pages/tours/trekking/lung-cung'
import { NguChiSon } from 'pages/tours/trekking/ngu-chi-son'
import { NhiuCosan } from 'pages/tours/trekking/nhiu-co-san'
import { PhuSaPhin } from 'pages/tours/trekking/phu-sa-phin'
import { Putaleng } from 'pages/tours/trekking/pu-ta-leng'
import { Samu } from 'pages/tours/trekking/samu'
import { TaChiNhu } from 'pages/tours/trekking/ta-chi-nhu'
import { TaChiNhuNamNghiep } from 'pages/tours/trekking/ta-chi-nhu-nam-nghiep'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const RootRoutes = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/tours" element={<TourLayout />}>
            <Route path="/tours/lao-than" element={<LaoThan />} />
            <Route path="/tours/samu" element={<Samu />} />
            <Route path="/tours/ngu-chi-son" element={<NguChiSon />} />
            <Route path="/tours/putaleng" element={<Putaleng />} />
            <Route
              path="/tours/ta-chi-nhu-nam-nghiep"
              element={<TaChiNhuNamNghiep />}
            />
            <Route path="/tours/nhiu-co-san" element={<NhiuCosan />} />
            <Route path="/tours/lung-cung" element={<LungCung />} />
            <Route path="/tours/phu-sa-phin" element={<PhuSaPhin />} />
            <Route path="/tours/ky-quan-san" element={<KyQuanSan />} />
            <Route path="/tours/ta-chi-nhu" element={<TaChiNhu />} />
          </Route>

          <Route path="*" element={<></>} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  )
}
