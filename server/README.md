## Activity Tracker – Server

This folder contains the backend API for the Activity Tracker app. It is a Node.js/Express server that exposes endpoints to manage users, activities and records, using PostgreSQL as the database and Prisma as the ORM.

### Technologies used

- **Node.js + Express**: HTTP server and routing for the REST API.
- **Prisma ORM**: Type-safe data access layer for PostgreSQL (`src/prisma/schema.prisma`, generated client in `src/generated/prisma`).
- **PostgreSQL**: Relational database for persisting activities, records and users (configured via `DATABASE_URL`).
- **pg**: PostgreSQL driver used under the hood by Prisma.
- **Pug**: Templating engine for server-side rendered views.
- **dotenv**: Loads environment variables from `.env` (including the database URL).
- **morgan**: HTTP request logging middleware.
- **cookie-parser** and **http-errors**: Express middlewares for cookies and error handling.
- **nodemon**: Development-time auto restarts (`npm run dev`).

### Prerequisites

- **Node.js** (LTS version recommended)
- **PostgreSQL** installed locally, or a PostgreSQL instance available (e.g. Docker, cloud DB)
- **npm** (comes with Node)

### Setting up the database

1. **Create a PostgreSQL database**

   Using `psql` (example):

   CREATE USER activity_user WITH PASSWORD 'your_password';
   CREATE DATABASE activity_tracker OWNER activity_user;

2. **Configure the DATABASE_URL**

In the server folder, create a .env file (if you don’t have one yet) and add:

   DATABASE_URL="postgresql://activity_user:your_password@localhost:5432/activity_tracker?schema=public"

Adjust username, password, host, port and database name as needed.

3. **Run Prisma migrations / generate client**

From the server folder:

   npm install
   npx prisma migrate dev

   ## or, if you only need the client:
   
   npx prisma generate

Starting the server
From the server folder:
   npm install         # first time only
   npm run dev         # starts server with nodemon on http://localhost:3000

Or to run without nodemon:

   npm start           # runs node src/server.js

Make sure PostgreSQL is running and DATABASE_URL is correctly configured before starting the server.

**If the schema.prisma is modified**

Run this steppes:

npx prisma migrate dev
npx prisma migrate reset  #this will delete all data from database
npx prisma db push
