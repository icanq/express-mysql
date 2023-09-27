# Simple server dengan Express dan MySQL

```
project-root/
│
├── config/
│   ├── database.js          # Database configuration
│   └── ...
│
├── controllers/
│   ├── userController.js    # Controllers for user-related routes
│   ├── postController.js    # Controllers for post-related routes
│   └── ...
│
├── routes/
│   ├── userRoutes.js        # API routes for users
│   ├── postRoutes.js        # API routes for posts
│   └── ...
│
├── middleware/
│   ├── logger.js            # Logger middleware
│   └── ...
│
├── services/
│   ├── userService.js       # Business logic for users
│   ├── postService.js       # Business logic for posts
│   └── ...
│
├── utils/
│   ├── helpers.js           # Helper functions and utilities (if needed)
│   └── ...
│
├── app.js                   # Express application setup and entrypoint
│
└── .env                     # Environment variables configuration
```

# Requirements

```
Node.js 16.14.2 or later
Yarn 1.22.17 or later
```

# Configuration

Copy file .env.example to .env

```
cp .env.example .env
```

Create database and seed a little data

```
mysql -u root test_db < config/schema.sql
```