## 🚗 RentWheels – Car Rental Platform (MERN Stack)
Live Site: https://rent-wheels-d4b9a.web.app/

# Rent Wheels :
RentWheels is a full-stack MERN car rental platform that connects users with local car owners and rental providers. Users can browse cars, view full details, and book vehicles. Providers can add cars, manage listings, and track bookings — all with secure authentication.
________________________________________
# 📌 Project Theme
RentWheels is a community-driven online car rental system where:
•	Users can browse and book available cars
•	Providers can add, update, and delete car listings
•	Booking availability is handled in real-time
•	Secure login system with Firebase Authentication
________________________________________
# ✨ Main Features
•	🔐 Authentication System
o	Email & Password login
o	Google Sign-in
o	Protected private routes
o	Persistent login (no redirect on reload)
•	🚘 Car Management (CRUD)
o	Add new cars with full details
o	Update and delete own listings
o	Provider-wise “My Listings” dashboard
•	📖 Booking System
o	Private car details page
o	Book cars with one click
o	Prevents double booking
o	Automatically updates car availability
•	🔍 Browse & Search
o	Public browse cars page
o	Home page search by car name
o	“Available / Booked” badges
•	🌐 Modern UI/UX
o	Responsive for mobile, tablet, desktop
o	Toast & SweetAlert messages
o	Animated sections (Framer Motion)
o	Clean, professional car-rental themed design
________________________________________
# 🏠 Pages & Routes
•	Home
•	Browse Cars (Public)
•	Login / Register
•	Add Car (Private)
•	My Listings (Private)
•	My Bookings (Private)
•	Car Details (Private)
•	Custom 404 Page
________________________________________
# 🛠️ Tech Stack
Client Side:
•	React
•	React Router
•	Firebase Authentication
•	Tailwind CSS
•	Framer Motion
•	SweetAlert / React Hot Toast
Server Side:
•	Node.js
•	Express.js
•	MongoDB (Native Driver)
•	JWT
•	Firebase Admin SDK (optional advanced)
Hosting:
•	Client → Netlify / Firebase
•	Server → Vercel
________________________________________
# 📦 Database Structure
🔵 cars collection
{
  "_id": ObjectId,
  "carName": "Toyota Axio",
  "description": "Comfortable sedan",
  "category": "Sedan",
  "pricePerDay": 3500,
  "location": "Dhaka",
  "image": "https://...",
  "providerName": "Arman",
  "providerEmail": "arman@gmail.com",
  "status": "available",
  "createdAt": Date
}
🔵 bookings collection
{
  "_id": ObjectId,
  "carId": ObjectId,
  "carName": "Toyota Axio",
  "userName": "Rahim",
  "userEmail": "rahim@gmail.com",
  "providerEmail": "arman@gmail.com",
  "pricePerDay": 3500,
  "bookingDate": Date,
  "status": "booked"
}
________________________________________
# 🧩 Key Challenges Implemented
•	✔ Prevent double booking
•	✔ Real-time availability update
•	✔ Provider-based update & delete
•	✔ Secure private routing
•	✔ Responsive grid layout
•	✔ Search by car name
•	✔ Booking status badges
________________________________________
# 📜 Rules Followed
•	Minimum 15+ client commits
•	Minimum 8+ server commits
•	No Lorem Ipsum used
•	No browser alert used
•	Toast/SweetAlert implemented
•	Reload protected routing fixed
•	Firebase domain authorized
________________________________________
# 👨‍💻 Developer
Mohammad Arman
Diploma in Computer Science & Technology
