# SportsStore | فروشگاه ورزشی

فروشگاه اینترنتی ورزشی با رابط کاربری فارسی (راست‌ به‌چپ)

> 🚧 **وضعیت:** پروژه در حال توسعه است. فعلاً بخش فرانت‌اند در دست ساخت است و بک‌اند هنوز شروع نشده.

## ویژگی‌ها

- رابط کاربری کاملاً RTL با فونت Vazirmatn
- طراحی ریسپانسیو (موبایل تا دسکتاپ)
- سیستم طراحی مبتنی بر توکن‌های رنگ (بدون رنگ مستقیم در کامپوننت‌ها)
- کامپوننت‌های قابل استفاده‌ی مجدد
- ساختار HTML معنادار (semantic) و دسترس‌پذیر

## استک فنی

| بخش | تکنولوژی |
| --- | --- |
| Frontend | React, Vite, Tailwind CSS v4 |
| Backend | Python (FastAPI یا Django، هنوز انتخاب نشده) |
| کنترل نسخه | Git, GitHub |

## ساختار پروژه

```
SportsStore/
├── frontend/        # اپلیکیشن React
│   └── src/
│       └── components/
│           ├── icons/     # آیکون‌های SVG
│           └── layout/    # TopBar, Navbar, Header
├── backend/         # (به‌زودی)
└── README.md
```

## راه‌اندازی

پیش‌ نیاز: Node.js نسخه‌ی ۱۸ یا بالاتر.

```bash
# کلون کردن پروژه
git clone https://github.com/elhetlby-afk/SportsStoreProject.git
cd SportsStoreProject/frontend

# نصب وابستگی‌ها
npm install

# اجرای سرور توسعه
npm run dev

بعد از اجرا، پروژه روی `http://localhost:5173` در دسترس است.

## نقشه‌ی راه

- [x] فاز ۰: پایه‌ی پروژه و هدر
- [ ] فاز ۱: Router، Layout و Footer
- [ ] فاز ۲ تا ۸: صفحات محصولات، سبد خرید، بک‌اند و ...

#نویسنده
ELAHE TALEBI — [GitHub](https://github.com/elhetlby-afk)