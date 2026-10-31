import { useEffect, useState } from 'react'
import { ChevronDownIcon, UserCheckIcon, CartIcon, MenuIcon, CloseIcon } from '../icons'

// آیتم‌های منو: همه یکسان‌اند. hasDropdown فقط برای نمایش chevron است
const menuItems = [
  { label: 'خانه', href: '/' },
  { label: 'محصولات', href: '#', hasDropdown: true },
  { label: 'تماس با ما', href: '#' },
  { label: 'تخفیف ها', href: '#' },
]

// لوگو: از قبل زرشکی است، پس hover با کاهش opacity
const logoClass =
  'hover:opacity-80 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

// آیکون‌ها و همبرگر: hover با تغییر رنگ، هماهنگ با منو
const iconLinkClass =
  'hover:text-brand transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

// لینک‌های منوی دسکتاپ (border بالا و پایین هم‌اندازه تا متن دقیقاً وسط بماند)
const menuLinkClass =
  'flex items-center gap-1.5 xl:gap-[11px] py-1 xl:py-[7px] border-y-[1.5px] xl:border-y-[3px] border-transparent transition-colors duration-200 hover:text-brand hover:border-b-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

export default function Navbar() {
  // state: منوی موبایل باز است یا بسته
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  // با زدن Escape منو بسته شود (فقط وقتی باز است گوش می‌دهیم)
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    // cleanup: وقتی منو بسته شد یا کامپوننت حذف شد، شنونده برداشته شود
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <nav aria-label="منوی اصلی">
      {/* ردیف اصلی */}
      <div className="flex items-center justify-between h-10 xl:h-[74px] px-8 xl:px-15 bg-background">
        {/* سمت راست: همبرگر (فقط موبایل) + لوگو + منو */}
        <div className="flex items-center">
          <button
            type="button"
            className={`md:hidden me-3 text-text-primary ${iconLinkClass}`}
            aria-label={isOpen ? 'بستن منو' : 'باز کردن منو'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>

          <a
            href="/"
            lang="en"
            dir="ltr"
            className={`font-logo text-[14px] xl:text-[26px] font-bold text-brand ${logoClass}`}
          >
            Sporty
          </a>

          {/* منوی میانی دسکتاپ: زیر md مخفی */}
          <ul className="hidden md:flex items-center gap-6 xl:gap-11 ms-8 xl:ms-[59px] text-[12px] xl:text-[22px] font-bold text-text-primary">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={menuLinkClass}>
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDownIcon className="w-2.5 h-2.5 xl:w-[18px] xl:h-[18px] shrink-0" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* سمت چپ: سبد خرید اول (سمت راست)، سپس کاربر */}
        <div className="flex items-center gap-3.5 xl:gap-[26px] text-text-primary">
          <a href="#" aria-label="سبد خرید" className={iconLinkClass}>
            <CartIcon className="w-4 h-4 xl:w-[30px] xl:h-[30px]" />
          </a>
          <a href="#" aria-label="حساب کاربری" className={iconLinkClass}>
            <UserCheckIcon className="w-4 h-4 xl:w-[30px] xl:h-[30px]" />
          </a>
        </div>
      </div>

      {/* پنل منوی موبایل: فقط وقتی isOpen=true رندر می‌شود. چون absolute نیست، محتوای زیرش را پایین می‌دهد */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col px-8 py-2 text-[14px] font-bold text-text-primary">
            {menuItems.map((item) => (
              <li key={item.label} className="border-b border-border last:border-b-0">
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-3 hover:text-brand transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}