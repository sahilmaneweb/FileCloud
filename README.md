git clone [https://github.com/sahilmaneweb/FileCloud.git](https://github.com/sahilmaneweb/FileCloud.git)
# 📂 FileCloud

> **Tags:** `#Next.js` `#Supabase` `#Clerk` `#Nodemailer` `#TailwindCSS` `#FileSharing` `#CloudStorage` `#React`

FileCloud is a modern, secure, and user-friendly platform for uploading, storing, and sharing files in the cloud. Built with **Next.js**, **Supabase**, **Clerk authentication**, and **Nodemailer**, it offers seamless file management, short URLs, password protection, and email sharing—all with a beautiful responsive UI.

---

## 🚀 Features

- 🔐 **Authentication:** Secure login/signup via Clerk
- ☁️ **Cloud Storage:** Store files using Supabase
- 🔗 **Short URLs:** Instantly generate shareable links
- 📧 **Email Sharing:** Send files directly to any email
- 🔒 **Password Protection:** Add passwords to files for extra security
- � **File Preview:** View, manage, and control your uploads
- 🗑️ **Delete & Visibility:** Toggle file visibility or delete files
- 📱 **Responsive Design:** Works on mobile, tablet, and desktop

---

## 🛠 Tech Stack

- **Frontend:** Next.js 15, React 18, Tailwind CSS
- **Backend Services:** Supabase (storage + database)
- **Authentication:** Clerk
- **Email Service:** Nodemailer
- **Icons:** Lucide React, React Icons

---

## 📦 Installation

```bash
git clone https://github.com/sahilmaneweb/FileCloud.git
cd FileCloud
npm install
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Base URL (e.g., http://localhost:3000)
NEXT_PUBLIC_BASE_URL=

# Supabase Project Credentials
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Nodemailer Email Configuration
NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=
```

> - `NODEMAILER_EMAIL` should be your SMTP-compatible email (e.g., Gmail).
> - `NODEMAILER_PASSWORD` is your SMTP or App Password.
> - Clerk and Supabase keys are available in their respective dashboards.

---

## 🗄️ Model Structure

**Supabase Table: `userfiles`**

| Field         | Type    | Description                       |
|---------------|---------|-----------------------------------|
| fileId        | number  | Unique file identifier            |
| userEmail     | string  | Uploader's email                  |
| userName      | string  | Uploader's name                   |
| password      | string  | Password for file (optional)      |
| fileName      | string  | Name of the file                  |
| fileType      | string  | MIME type                         |
| fileSize      | string  | Size in MB                        |
| fileUrl       | string  | Public URL from Supabase          |
| filePath      | string  | Storage path in Supabase          |
| shortUrl      | string  | Shortened URL for sharing         |
| isActive      | boolean | Visibility toggle                 |

---

## ▶️ Running Locally

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📤 Deployment

Deploy easily on **Vercel**:

1. Push your code to GitHub.
2. Go to Vercel Dashboard.
3. Import your repository.
4. Add all required environment variables.
5. Deploy 🚀

---

## � Usage Guide

- **Upload:** Drag & drop or select image files to upload.
- **Files:** View all your uploaded files, preview, and manage.
- **Preview:** Copy short URL, set/remove password, send via email, toggle visibility, or delete.
- **Share:** Use short URLs or email to share files securely.

---

## 📝 License

MIT License

---

## 👤 Author

**Sahil Mane**  
[LinkedIn](https://www.linkedin.com/in/sahil-mane-b113032ba) | [GitHub](https://github.com/sahilmaneweb) | [Instagram](https://www.instagram.com/sahil_mane_1304)

---