import TopBar from './TopBar'
import Navbar from './Navbar'

// <header> ریشه semantic است و هر دو بخش داخل آن قرار می‌گیرند
export default function Header() {
  return (
    <header>
      <TopBar />
      <Navbar />
    </header>
  )
}