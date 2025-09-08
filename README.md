# 🎯 Next.js LMS Platform

A modern and comprehensive **Learning Management System (LMS)** built with **Next.js 15**, **Tailwind CSS**, and **Neon PostgreSQL** — designed for creating, managing, and scaling online courses.

---

## 🚀 Features

### 📚 Core LMS Functionality
- ✅ **Authentication** with Better-Auth (Email OTP & GitHub OAuth)  
- ✅ **Admin Dashboard** – Create, edit, and manage courses  
- ✅ **Customer Dashboard** – Track enrolled courses and progress  
- ✅ **Custom Video Player** – Smooth video playback experience  
- ✅ **Lesson Completion Tracking** – Persistent progress tracking  
- ✅ **Course Structure Builder** – Drag & Drop lessons and modules  
- ✅ **Rich Text Editor** – Create detailed course content  
- ✅ **Stripe Integration** – Secure payments for courses  

### 🛡️ Security & Performance
- ✅ **Arcjet Security** – Protection against XSS, SQL injection, and other attacks  
- ✅ **Rate Limiting** – Prevents API abuse  
- ✅ **Prisma ORM** – Optimized queries with Neon PostgreSQL  
- ✅ **File Uploads with S3** (Presigned URLs) for safe storage  

### 🎨 UI & UX
- ✅ Responsive design with **Tailwind CSS**  
- ✅ Pre-built components with **Shadcn UI**  
- ✅ Smooth animations via **Framer Motion**  
- ✅ Custom Dropzone for uploads  
- ✅ Modern analytics dashboard with charts  

---

## 🧰 Tech Stack

| Layer       | Technology                                |
|-------------|-------------------------------------------|
| Frontend    | Next.js 15, React 19, Tailwind CSS, Shadcn UI |
| Backend     | Next.js API Routes, Better-Auth, Arcjet   |
| Database    | Neon PostgreSQL with Prisma ORM           |
| Payments    | Stripe                                    |
| File Upload | AWS S3 (Presigned URLs)                   |
| Animations  | Framer Motion                             |
| Charts      | Recharts / Chart.js (Analytics)           |
| Deployment  | Vercel                                    |

---

## 📸 Screenshots (Coming Soon)

<table>
  <tr>
    <td><img src="https://placehold.co/300x200" width="300"/></td>
    <td><img src="https://placehold.co/300x200" width="300"/></td>
    <td><img src="https://placehold.co/300x200" width="300"/></td>
  </tr>
</table>

---

## 🧑‍💻 Getting Started

### 🔧 Prerequisites
- Node.js `v22+`  
- PostgreSQL database (Neon recommended)  
- Stripe account  
- AWS S3 bucket  

### 📦 Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd nextjs-lms
```

```bash
# 2. Install dependencies
npm install
```
```bash
# 3. Configure environment variables
cp .env.example .env
```

**🗃️ Environment Variables**

**Update .env with your credentials:**
```bash
DATABASE_URL=""
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""
BETTER_AUTH_SECRET=""
BETTER_AUTH_GITHUB_ID=""
BETTER_AUTH_GITHUB_SECRET=""
ARCJET_API_KEY=""
AWS_S3_BUCKET=""
AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""
```

🗃️ Database Setup
# Generate Prisma client
```bash
npx prisma generate
```
# Push schema to database
```bash
npx prisma db push
```
# (Optional) Seed initial data
```bash
npx prisma db seed
```

**🧪 Run the App**
```bash
npm run dev
```

Open 👉 http://localhost:3000

**✨ Future Features**

- 🔍 Advanced course search & filtering

- 🎤 Live sessions (WebRTC integration)

- 📱 Mobile app support (React Native/Expo)

- 🔐 Role-based access control (RBAC)

**🔐 Security**

- Password hashing & OTP-based login

- Input validation & sanitization

- Arcjet middleware protection

- Stripe secure payment flow

**🚢 Deployment**
**🛠 Database (Neon Postgres)**

- Create a Neon Postgres database

- Add your DATABASE_URL to .env
```bash
npx prisma db push
```
**☁️ Deploy to Vercel**

- Push repo to GitHub

- Connect GitHub repo to Vercel

- Add environment variables in Vercel dashboard

- Deploy 🎉

📝 License


---


