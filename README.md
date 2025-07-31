# 📂 FileCloud

FileCloud is a modern and secure file storage and sharing platform built with **Next.js**, **Clerk authentication**, **Supabase storage**, and **Nodemailer** for email notifications. It allows users to upload, manage, and share files securely with features like **short URLs**, **password protection**, and **email sharing**.

---

## 🚀 Features

- 🔐 **Secure Authentication** with Clerk  
- ☁ **Cloud Storage** using Supabase  
- 🔗 **Short URL Generation** for easy sharing  
- 📧 **Email Notifications** using Nodemailer  
- 🔒 **Password Protection** for sensitive files  
- 📜 **Detailed File Preview & Management** - 📱 **Responsive Design** for mobile, tablet, and desktop  

---

## 🛠 Tech Stack

- **Frontend:** Next.js 15, React 18, Tailwind CSS  
- **Backend Services:** Supabase (storage + database)  
- **Authentication:** Clerk  
- **Email Service:** Nodemailer  
- **Icons:** Lucide React / React Icons  

---

## 📦 Installation

Clone the repository and install dependencies:

```
git clone [https://github.com/sahilmaneweb/FileCloud.git](https://github.com/sahilmaneweb/FileCloud.git)
cd FileCloud
npm install
```

### ⚙️ Environment Variables

Before running the project, create a `.env.local` file in the root directory and add the following variables:

```
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Base URL of your application (e.g., http://localhost:3000 in development)
NEXT_PUBLIC_BASE_URL=

# Supabase Project Credentials
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Nodemailer Email Configuration
NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=
```

**Note:**

  - `NODEMAILER_EMAIL` should be your SMTP-compatible email address (e.g., Gmail).
  - `NODEMAILER_PASSWORD` should be your SMTP or App Password.
  - For Clerk keys, generate them from the Clerk Dashboard.
  - For Supabase keys, get them from Supabase Project Settings → API.

### ▶️ Running the Project Locally

```bash
npm run dev
```

The app will be available at:

`http://localhost:3000`

-----

## 📤 Deployment

You can deploy FileCloud easily on Vercel:

1.  Push your code to GitHub.
2.  Go to Vercel Dashboard.
3.  Import your GitHub repository.
4.  Add all required Environment Variables in Vercel settings.
5.  Deploy 🚀.

-----

## 📌 License

This project is licensed under the MIT License.

-----

## 👤 Author

Sahil Mane

```
```