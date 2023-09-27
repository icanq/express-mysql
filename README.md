# Simple server dengan Express dan MySQL

```
project-root/
│
├── config/
│   ├── prisma.js          # Prisma configuration
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
├── prisma/
│   ├── migrations/            # Logger middleware
│   └── schema.prisma         # Prisma config & database schema
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


# Prisma Config

Kita perlu untuk melakukan generate Migrations terlebih dahulu pada prisma, dimana migrations ini berguna untuk translate `schema.prisma` menjadi file sql yang bisa dijalankan nantinya
Untuk menjalankannya bisa dengan menggunakan command

```
npx prisma migrate dev --name=init
```

lalu akan terbuat folder migrations secara otomatis pada folder `prisma`


Selanjutnya untuk melakukan singkronisasi database dengan skema yang sudah ditulis pada `schema.prisma` bisa jalankan

```
npx prisma db push
```

Apabila kalian menambahkan schema baru pada `schema.prisma` jangan lupa untuk menjalankan kembali migrationsnya

```
npx prisma migrate dev
```