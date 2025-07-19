# Job Portal - Full-Stack Web Application

## 🎯 Project Overview
A comprehensive job portal web application that connects job seekers with recruiters, featuring dual-role functionality with separate interfaces for candidates and employers. The platform offers a modern, responsive design and complete job application management system.

## 🚀 Key Features

### For Job Seekers:
- **User Authentication** via Clerk with seamless login/registration
- **Job Search & Filtering** by title, location, and categories
- **Job Application Management** with status tracking (Pending, Accepted, Rejected)
- **Resume Upload & Management** with PDF support
- **Application History** with detailed job information
- **Profile Management** with image and resume updates

### For Recruiters/Companies:
- **Company Registration & Login** with custom authentication
- **Job Posting & Management** with rich text editor (Quill.js)
- **Application Management** - view, approve, or reject candidates
- **Dashboard Analytics** with job statistics
- **Candidate Profile Viewing** with resume downloads
- **Job Visibility Controls** to show/hide postings

## 🛠 Technology Stack

### Frontend (Client)
- **React 19.1.0** - Modern React with latest features
- **Vite 6.3.5** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.1.10** - Utility-first CSS framework for styling
- **React Router DOM 7.6.2** - Client-side routing and navigation
- **Clerk Authentication** - Complete user authentication system
- **Axios** - HTTP client for API communications
- **React Toastify** - Toast notifications for user feedback
- **Quill.js** - Rich text editor for job descriptions
- **Moment.js** - Date/time formatting and manipulation
- **DOMPurify** - XSS protection for user-generated content

### Backend (Server)
- **Node.js & Express 5.1.0** - Server runtime and web framework
- **MongoDB & Mongoose 8.16.2** - NoSQL database and ODM
- **Clerk Express** - Server-side authentication middleware
- **JWT (jsonwebtoken)** - Token-based authentication for companies
- **bcrypt** - Password hashing for security
- **Cloudinary** - Cloud storage for images and resumes
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing
- **Sentry** - Error monitoring and performance tracking
- **Svix** - Webhook handling for Clerk events

### Database Schema (MongoDB)
- **User Model** - Clerk-integrated user profiles with resumes
- **Company Model** - Recruiter/company authentication and profiles
- **Job Model** - Job postings with categories, levels, and visibility
- **JobApplication Model** - Application tracking with status management

## 🏗 Project Architecture

### Frontend Structure
```
client/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Route-based page components
│   ├── context/          # React Context for state management
│   ├── assets/           # Images, icons, and static data
│   └── App.jsx           # Main application routing
```

### Backend Structure
```
server/
├── controllers/          # Business logic handlers
├── models/              # MongoDB schemas
├── routes/              # API endpoint definitions
├── middleware/          # Authentication and validation
├── config/              # Database and service configurations
└── utils/               # Helper functions
```

## 🔧 Advanced Features

### Authentication System
- **Dual Authentication**: Clerk for job seekers, custom JWT for companies
- **Webhook Integration**: Real-time user sync with Clerk
- **Role-based Access**: Separate permissions for users and recruiters

### File Management
- **Cloud Storage**: Cloudinary integration for resume and image uploads
- **File Validation**: PDF validation for resumes, image validation for profiles
- **Secure URLs**: Protected file access with authentication

### Search & Filtering
- **Real-time Search**: Instant job filtering by title and location
- **Category-based Browsing**: Jobs organized by categories (Programming, Data Science, etc.)
- **Level-based Filtering**: Entry, Intermediate, and Senior level positions

### Rich Content Management
- **WYSIWYG Editor**: Quill.js for detailed job descriptions
- **Content Sanitization**: DOMPurify for XSS protection
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🔒 Security Features
- **Password Hashing** with bcrypt
- **JWT Token Authentication** for companies
- **Input Validation** and sanitization
- **File Upload Security** with type restrictions
- **Environment Variable Protection** for sensitive data
- **Error Monitoring** with Sentry integration

## 📱 Responsive Design
- **Mobile-First Approach** using Tailwind CSS
- **Cross-Device Compatibility** from mobile to desktop
- **Adaptive UI Components** that scale across screen sizes
- **Touch-Friendly Interface** for mobile users

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB database
- Clerk account for authentication
- Cloudinary account for file storage

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Pradhamlr/Job-Portal.git
cd Job-Portal
```

2. **Install client dependencies**
```bash
cd client
npm install
```

3. **Install server dependencies**
```bash
cd ../server
npm install
```

4. **Environment Setup**
Create `.env` files in both client and server directories with required variables:
- Client: Clerk publishable key, backend URL
- Server: MongoDB URI, JWT secret, Cloudinary config, Clerk secret

5. **Run the application**
```bash
# Start server (from server directory)
npm run server

# Start client (from client directory)
npm run dev
```

## 🚀 Deployment
- **Vercel Configuration** files included for both client and server
- **Production Optimization** with Vite build system
- **Environment Variables** properly configured for deployment

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Pradhamlr/Job-Portal/issues).

## 👨‍💻 Author
**Pradhamlr**
- GitHub: [@Pradhamlr](https://github.com/Pradhamlr)

---

This Job Portal represents a production-ready application showcasing modern web development practices, comprehensive authentication systems, and a scalable architecture suitable for real-world deployment.
