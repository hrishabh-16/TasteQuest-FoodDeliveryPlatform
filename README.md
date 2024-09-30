# TasteQuest - A Food Delivery Platform

TasteQuest is a full-stack food ordering web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a comprehensive platform for users to browse, select, and order food items.

## Features

1. **User Registration and Authentication**
   - User registration with email and password
   - Secure login mechanism

2. **Browse Item Inventory**
   - Browse items by category (e.g., All, Fruit, Vegetable, Non-veg, Breads, etc.)
   - Creative display of available inventory

3. **Selection Basket/Cart**
   - Add items to cart with quantity selection
   - Real-time stock availability check
   - Persistent cart across sessions and devices
   - Multiple device login support



## Setting Up TasteQuest

Follow these instructions to set up TeachQuest locally.

### Prerequisites

- Node.js and npm must be installed on your system.
- MongoDB account and cluster for database connection.

### Cloning the Repository

```bash
git clone https://github.com/hrishabh-16/TasteQuest-FoodDeliveryPlatform.git

cd TasteQuest
```

### Configurations

#### Backend Environment File:

Navigate to the backend folder and create a `.env` file with the following content:

```
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
JWT_SECRET=your_jwt_secret
```

- Replace `your_mongodb_connection_string` with your MongoDB cluster connection string.
- Add your Google OAuth credentials.
- Set a secure random string for `JWT_SECRET`.

#### Frontend Environment File:

Navigate to the frontend folder and create a `.env` file with the following content:

```
REACT_APP_SERVER_URL=http://localhost:5000
GOOGLE_CLIENT_ID=your_google_client_id
VITE_BACKEND_URL=http://localhost:5000
```

- Adjust the URLs if your backend runs on a different port.
- Use the same Google Client ID as in the backend.

### Running the Application

#### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

#### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../TasteQuest
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend application:
   ```bash
   npm run dev
   ```

The application should now be running. Access the frontend at `http://localhost:5173` (or the port specified by Vite) and the backend at `http://localhost:5000`.

## Tech Stack

- Frontend: React, Vite
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT, Google OAuth
- Styling: Tailwind CSS
- State Management: React Query, Recoil

## Additional Notes

- Ensure both backend and frontend are running simultaneously for full functionality.
- For local development, you may need to configure CORS settings in the backend to allow requests from the frontend.
- The project uses Vite for faster development and building processes.

## Contributing

Contributions to TeachQuest are welcome. Please ensure to follow the project's code style and submit pull requests for any new features or bug fixes.

