# React + Vite - techXtra-blog

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Technologies Used

### Frontend
- React
- Vite
- [Any other libraries you're using]

### Backend
- Express
- PostgreSQL
- [Any other libraries you're using]

## Setup and Installation

### Prerequisites
- Node.js (version x.x.x)
- npm or yarn
- PostgreSQL (version x.x.x)

### Database Setup
1. Install PostgreSQL
2. Create a database
3. Update connection details in the backend .env file

### Backend Setup
1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Create a .env file with the following variables:

PORT=3030
DATABASE_URL=postgresql://username:password@localhost:5432/database_name

4. Run the development server: `npm run dev`

### Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Create a .env file with your backend URL: