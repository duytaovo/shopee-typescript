import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import './styles.css'
interface Props {
  children?: React.ReactNode
}
function MainLayoutInner({ children }: Props) {
  return (
    <div className='h-100vh w-[100vw] bg'>
        <Header />
      {children}
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}
const MainLayout = memo(MainLayoutInner)
export default MainLayout
