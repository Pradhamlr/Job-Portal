# Job Portal - Full-Stack Web Application

## 🎯 Overview
A modern job portal that connects job seekers with recruiters through an intuitive dual-role platform. Features comprehensive job management, application tracking, and secure authentication for both candidates and employers.

## ✨ Key Features

### For Job Seekers
- Secure authentication via Clerk
- Advanced job search with filters
- One-click job applications
- Resume upload and management
- Real-time application status tracking
- Personalized profile management

### For Recruiters
- Company registration and dashboard
- Job posting with rich text editor
- Application management system
- Candidate profile and resume viewing
- Job analytics and insights
- Application approval/rejection workflow

## 🛠 Tech Stack

### Frontend
- **React 19.1** - Modern UI framework
- **Vite** - Fast development build tool
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side navigation
- **Clerk** - Authentication service
- **Quill.js** - Rich text editing

### Backend
- **Node.js & Express** - Server framework
- **MongoDB & Mongoose** - Database and ODM
- **JWT** - Token-based authentication
- **Cloudinary** - File storage service
- **Clerk Express** - Server-side auth middleware

### DevOps & Tools
- **Vercel** - Deployment platform
- **Sentry** - Error monitoring
- **Axios** - HTTP client
- **Multer** - File upload handling

## 🏗 Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Client  │    │  Express Server │    │   MongoDB       │
│                 │    │                 │    │                 │
│ • Components    │◄──►│ • Controllers   │◄──►│ • Collections   │
│ • Pages         │    │ • Routes        │    │ • Indexes       │
│ • Context       │    │ • Middleware    │    │ • Aggregations  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       
         │                       │                       
         ▼                       ▼                       
┌─────────────────┐    ┌─────────────────┐              
│   External APIs │    │   File Storage  │              
│                 │    │                 │              
│ • Clerk Auth    │    │ • Cloudinary    │              
│ • Webhooks      │    │ • Resume/Images │              
└─────────────────┘    └─────────────────┘              
```

### Frontend Architecture
- **Component-based design** with reusable UI elements
- **Context API** for global state management
- **Route-based code splitting** for optimal performance
- **Responsive design** with mobile-first approach

### Backend Architecture
- **RESTful API design** with clear endpoint structure
- **Middleware pipeline** for authentication and validation
- **Service layer** for business logic separation
- **Error handling** with centralized monitoring

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB database
- Clerk account
- Cloudinary account

### Installation

1. **Clone and setup**
   ```bash
   git clone https://github.com/Pradhamlr/Job-Portal.git
   cd Job-Portal
   ```

2. **Install dependencies**
   ```bash
   # Install client dependencies
   cd client && npm install
   
   # Install server dependencies
   cd ../server && npm install
   ```

3. **Environment configuration**
   - Create `.env` files in both `client/` and `server/` directories
   - Add required API keys and configuration variables

4. **Start development servers**
   ```bash
   # Terminal 1 - Start backend
   cd server && npm run server
   
   # Terminal 2 - Start frontend
   cd client && npm run dev
   ```

## 🔧 Project Structure

```
Job-Portal/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── context/        # State management
│   │   └── assets/         # Static files
│   └── package.json
├── server/                 # Node.js backend
│   ├── controllers/        # Route handlers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── package.json
└── README.md
```

## 🔒 Security Features
- **Dual authentication** system (Clerk + JWT)
- **Input validation** and sanitization
- **File upload security** with type restrictions
- **Password hashing** with bcrypt
- **CORS** protection and rate limiting

## 📱 Deployment
Ready for production deployment with Vercel configuration files included for both frontend and backend services.

## 🤝 Contributing
Contributions welcome! Please read our contributing guidelines and submit pull requests for any improvements.

## 📄 License
MIT License - see the [LICENSE](LICENSE) file for details.

---

**Author:** [Pradhamlr](https://github.com/Pradhamlr)