import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth > 768)
    }

    checkMobile()

    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className='max-h-screen h-screen bg-[#211f23] text-white flex'>
      <Sidebar />

      <div className='flex-1 overflow-hidden'>
        <Outlet />

      </div>
    </div>
  )
}

export default MainLayout