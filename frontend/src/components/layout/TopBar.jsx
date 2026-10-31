import { Fragment } from 'react'
import { TruckIcon } from '../icons'

// داده‌ها بیرون از JSX: برای تغییر یا اضافه کردن لینک فقط این آرایه را ویرایش می‌کنیم
const links = [
  { label: 'پشتیبانی', href: '#' },
  { label: 'پیگیری سفارش', href: '#' },
  { label: 'درباره ی ما', href: '#' },
]

// کلاس‌های تکراری لینک‌ها در یک متغیر
const linkClass =
  'hover:opacity-80 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-on-brand'

export default function TopBar() {
  return (
    <div className="flex items-center justify-between h-7 xl:h-13 px-8 xl:px-15 bg-brand text-text-on-brand">
      {/* شروع RTL (سمت راست): آیکون کامیون + متن ارسال رایگان */}
      <p className="flex items-center gap-2 xl:gap-3.5 text-[11px] xl:text-[20px]">
        <TruckIcon className="w-[22px] h-[18px] xl:w-10 xl:h-[33px] shrink-0" />
        <span>ارسال رایگان برای سفارش های بالای 1.500.000 تومان</span>
      </p>

      {/* انتهای RTL (سمت چپ): لینک‌ها با جداکننده؛ زیر md مخفی */}
      <ul className="hidden md:flex items-center gap-3 xl:gap-[22px] text-[8px] xl:text-[15px]">
        {links.map((link, index) => (
          <Fragment key={link.label}>
            {index > 0 && (
              <li aria-hidden="true">
                <span className="block w-px h-3 xl:h-[22px] bg-text-on-brand/50" />
              </li>
            )}
            <li>
              <a href={link.href} className={linkClass}>
                {link.label}
              </a>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  )
}