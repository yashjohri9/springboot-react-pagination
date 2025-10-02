# Spring Boot + React Books Pagination App

This project is a full-stack web application for displaying a paginated list of books. The backend is built with Spring Boot, and the frontend uses React with Vite.

## Features

- Paginated book listing (ID, Title, Author)
- Backend: Spring Boot, H2 in-memory database, JPA
- Frontend: React, Vite, Dockerized with Nginx
- Easy local development with Docker Compose

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed

## Getting Started

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd springboot-react-pagination
```

### 2. Build and Run with Docker Compose

```sh
docker-compose up --build
```

- The backend will be available at [http://localhost:8080](http://localhost:8080)
- The frontend will be available at [http://localhost:3000](http://localhost:3000)

### 3. Access the Application

Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the paginated books list.

### 4. H2 Database Console (Optional)

You can access the H2 database console at [http://localhost:8080/h2-console](http://localhost:8080/h2-console)

- **JDBC URL:** `jdbc:h2:mem:booksdb`
- **Username:** `sa`
- **Password:** *(leave blank)*

## Project Structure

```
springboot-react-pagination/
├── backend/      # Spring Boot backend
│   ├── src/
│   ├── pom.xml
│   └── Dockerfile
├── frontend/     # React frontend
│   ├── src/
│   ├── package.json
│   └── Dockerfile
└── docker-compose.yml
```

## Development

### Backend (Spring Boot)

To run the backend locally (without Docker):

```sh
cd backend
./mvnw spring-boot:run
```

### Frontend (React)

To run the frontend locally (without Docker):

```sh
cd frontend
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) (default Vite port).

## Frontend (React) - Docker Usage

The frontend is containerized and served using Nginx. The Dockerfile builds the React app and copies the static files to Nginx for production use.

### Build and Run Frontend with Docker

To build and run only the frontend container:

```sh
cd frontend
docker build -t react-frontend .
docker run -p 3000:80 react-frontend
```

- The React app will be available at [http://localhost:3000](http://localhost:3000)

### Development (without Docker)

For local development (hot reload):

```sh
cd frontend
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

### Notes

- In Docker, the app is served by Nginx on port 80 (mapped to 3000).
- For production, use the Docker image as shown above.

## API Reference

- **GET /api/books?page={page}&size={size}**
  - Returns paginated books data.

## License

MIT
