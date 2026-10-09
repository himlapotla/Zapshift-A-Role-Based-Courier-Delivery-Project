# Introduction:

## ZapShift — Role-Based Courier Delivery Platform.

### A full-stack courier delivery management platform designed to connect customers, riders, and administrators through a secure, role-based workflow. <br> ZapShift is a production-style courier management application built to model how a real delivery business can manage parcels from creation and payment to rider's delivery.

<br><br>

# Links

### 🌐 Live url -- [Add your live Firebase URL]

### 💻 Frontend Repository -- [Add GitHub repository URL]

### ⚙️ Backend Repository -- [Add backend GitHub repository URL]

### 🎥 Project Demo (video url) -- [Add demo video URL]


<br><br>

# Core Features:

## User Features -

### User registration and login

### Firebase authentication

### Social login

### Create and manage parcels

### View personal parcel history

### Track parcel delivery status

### Make online payments through Stripe

### View payment history

### Access a personalized user dashboard

### Apply to become a rider

<br>

## Rider Features - 

### Rider-specific dashboard

### View assigned delivery tasks

### Accept/reject assigned parcels

### Update delivery progress

### View completed delivery tasks

### Rider approval workflow

<br>

## Admin Features - 

### Can manage overall bussiness logics

### Dedicated admin dashboard

### User Management

### Rider Management

### Assign riders to a parcel or multiple

### Monitor parcel delivery operations

### Role-based access to administrative features

<br>

## Payment System - 

### Stripe Checkout integration

### Secure checkout-session creation

### Payment success/cancellation handling

### Parcel's document manipulation on successful payment relationship tracking

<br>

## Parcel Management (how the system works) - 

### A parcel can move through different stages of the delivery lifecycle, including:

### Case 1: Parcel Created by user -> User makes payment -> Rider will be assigned by admin ->  Rider Arriving -> Parcel Picked Up -> Parcel Delivered -> Rider's payment will be added

### Case 2: Parcel Created by user -> User makes payment -> Rider will be assigned by admin -> Rider rejects the parcel -> Parcle again appears to admin dashboard for another assignment

### Case 3: Parcel Created by user -> User makes payment -> User cancles the parcel -> parcel deleted from admin dashboard.  

### This lifecycle allows different users to see and manage only the operations relevant to their role.


<br><br>

# Tech Stack :

<br>

## Frontend - 

### React
### Vite
### React Router
### JavaScript (JSX)
### Tailwind CSS / DaisyUI
### TanStack Query
### Axios
### sweetalert2
### swiper
### Firebase Authentication
### Stripe Checkout
### react-leaflet

<br>

## Backend - 

### Node.js
### Express.js
### MongoDB
### Firebase Admin SDK
### Stripe
### cors
### 

<br>

## Deployment -

### Firebase Hosting — Frontend
### Vercel — Backend

<br><br>

# Application Architecture

### The frontend follows a feature-oriented React structure.

### src/ <br>
│
├── assets/ <br>
│
├── components/ 
│   └── Logo/
│       └── Logo.jsx
│
├── Context/ <br>
│   └── AuthContext/
│       ├── AuthContext.jsx
│       └── AuthProvider.jsx
│
├── firebase/ <br>
│   └── firebase.init.js
│
├── hooks/ <br>
│   ├── useAuth.jsx
│   ├── useAxios.jsx
│   ├── useAxiosSecurity.jsx
│   └── useRole.jsx
│
├── layout/ <br>
│   ├── AuthLayOut.jsx
│   ├── DashBoardLayout.jsx
│   └── RootLayOut.jsx
│
├── pages/ <br>
│   │
│   ├── About/
│   ├── Auth/
│   │   ├── Login/
│   │   ├── Register/
│   │   └── SocialLogin/
│   │
│   ├── Coverage/ <br>
│   ├── Dashboard/
│   │   ├── ApproveRider/
│   │   ├── AssignRider/
│   │   ├── DashBoardHome/
│   │   ├── MyParcels/
│   │   ├── Payment/
│   │   ├── Rider'sPages/
│   │   └── UserManagement/
│   │
│   ├── Home/ <br>
│   │   ├── Banar/
│   │   ├── brand/
│   │   ├── Reviews/
│   │   └── ServicesSection/
│   │
│   ├── ParcelTrack/
│   ├── Rider/
│   ├── SendParcel/
│   └── Shared/
│
├── router/ <br>
│   ├── AdminRoutes.jsx
│   ├── PrivateRoutes.jsx
│   ├── RiderRoutes.jsx
│   └── router.jsx
│
├── index.css
└── main.jsx