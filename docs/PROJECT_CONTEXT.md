# SportsStore: زمینه پروژه

## هدف
فروشگاه ورزشی فارسی (RTL) برای پروژه واقعی، پایان‌نامه و رزومه.

## استک
- Frontend: React + Vite + Tailwind CSS v4 (پوشه frontend)
- Backend: Python (پوشه backend، هنوز شروع نشده؛ FastAPI یا Django)
- Git: شاخه master

## قواعد ثابت
- Tailwind v4 با @theme در src/index.css، بدون tailwind.config.js
- هیچ رنگ hex مستقیم در کامپوننت‌ها. فقط توکن‌ها
- html: lang="fa" dir="rtl"؛ فونت Vazirmatn (sans) و Poppins (logo)
- فقط logical properties (ms-, me-, ps-, pe-)، نه ml/mr
- semantic HTML، آیکون‌ها inline SVG، focus-visible روی لینک‌ها
- مقیاس: ابعاد پایه برای ۷۸۲px، و xl: برابر ×۱.۸۴ برای ۱۴۴۰px

## توکن‌های رنگ
brand #6E0C19 | brand-hover #8C0A20 | text-on-brand #FBF8F3
background #FBF8F3 | text-primary #281113 | text-secondary #6B5558 | border #E8E0D3

## ساختار فعلی frontend/src
- components/icons: TruckIcon, ChevronDownIcon, UserCheckIcon, CartIcon, MenuIcon, CloseIcon (+ index.js)
- components/layout: TopBar, Navbar (منوی موبایل با useState)، Header
- App.jsx فقط <Header /> را رندر می‌کند

## وضعیت فازها
- [x] فاز ۰: پایه و هدر (commit 386519e)
- [ ] فاز ۱: README، GitHub، Router، Layout و Footer
- [ ] فاز ۲ تا ۸: طبق نقشه راه

## تصمیم‌های طراحی
- hover منو با تغییر رنگ و خط زیرین (نه opacity)؛ border شفاف برای جلوگیری از پرش
- شکست دسکتاپ روی xl (۱۲۸۰px)

## روش کار با Claude
قدم‌به‌قدم؛ کد کامل فایل (نه تکه‌تکه)؛ توضیح مفهوم قبل از کد؛ پاسخ فارسی.