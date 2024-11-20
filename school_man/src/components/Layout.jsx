import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const location = useLocation()
  const controlRoutes = ['/control', '/students', '/teachers', '/courses', '/schedule']
  const hideNavbar = controlRoutes.some(route => location.pathname.includes(route))

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <div className="flex">
        {hideNavbar && <Sidebar />}
        <main className={`flex-1 ${hideNavbar ? 'ml-64' : 'mt-16'}`}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout