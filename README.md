
# BTU Project - BigTime Crypto Dashboard

This is a comprehensive cryptocurrency management dashboard and application, featuring a robust Django backend and a modern Next.js 15 frontend. The system is designed to handle user authentication, cryptocurrency wallets (Bitcoin, Ethereum), transactions, and administrative oversight.

## 🚀 Tech Stack

### Backend (Python/Django)
The backend is built with **Django 5.1** and **Django Rest Framework (DRF)**, providing a secure and scalable API.
- **Core Framework**: Django 5.x, Django Rest Framework 3.15
- **Database**: MySQL (via `mysqlclient`)
- **Cryptography & Blockchain**:
  - `web3` (Ethereum interaction)
  - `bitcoinlib` (Bitcoin integration)
  - `cryptography`
- **Security**: `pyarmor` (code obfuscation/protection), `python-dotenv`
- **Server**: Gunicorn, Whitenoise (static files)
- **Containerization**: Docker & Docker Compose

### Frontend (Next.js/React)
The frontend is a high-performance web application built with **Next.js 15** and **React 19**.
- **Framework**: Next.js 15 (App Router), React 19
- **Styling**: Tailwind CSS 4, Material UI (MUI) v7, Emotion
- **Icons**: Lucide React, React Icons
- **Animation**: Framer Motion
- **Notifications**: React Hot Toast

## 📂 Project Structure

```bash
root/
├── backend/            # Django API server
│   ├── core/          # Project settings and configuration
│   ├── home/          # Main application logic
│   ├── payments/      # Payment processing
│   ├── profiles/      # User profiles and authentication
│   ├── wallets/       # Cryptocurrency wallet management
│   ├── providers/     # External service providers
│   ├── static/        # Static assets
│   ├── manage.py      # Django management script
│   ├── ...
├── frontend/           # Next.js web application
│   ├── src/           # Source code
│   │   ├── app/       # App router pages
│   │   ├── components/ # Reusable UI components
│   ├── public/        # Static public assets
│   ├── package.json   # Frontend usage dependencies
│   ├── ...
```

## 🛠️ Setup & Installation

### Prerequisites
- **Python 3.10+**
- **Node.js 18+** & **npm/yarn**
- **MySQL/MariaDB** Server

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   # Activate on Windows:
   venv\Scripts\activate
   # Activate on macOS/Linux:
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure Environment Variables:
   - Copy `env.sample` to `.env`.
   - Update `SECRET_KEY`, Database credentials (`DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`), and other settings.
   - Example .env:
     ```env
     DEBUG=True
     SECRET_KEY=your_secure_secret_key
     DB_ENGINE=django.db.backends.mysql
     DB_NAME=btu_db
     DB_USER=root
     DB_PASSWORD=password
     DB_HOST=localhost
     DB_PORT=3306
     ```

5. Run Migrations:
   ```bash
   python manage.py migrate
   ```

6. Create a Superuser (Admin):
   ```bash
   python manage.py createsuperuser
   ```

7. Start the Development Server:
   ```bash
   python manage.py runserver
   ```
   The API will be available at `http://localhost:8000`.

### 2. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the Development Server:
   ```bash
   npm run dev
   ```
   The app will be running at `http://localhost:3001`.

## 🐳 Docker Support

The backend includes a `Dockerfile` and `docker-compose.yml` for containerized deployment.

To run with Docker:
1. Ensure Docker Desktop is running.
2. In the `backend` directory, create a `.env` file with necessary variables (including `GITHUB_TOKEN` if accessing private repos).
3. Build and run:
   ```bash
   cd backend
   docker-compose up --build
   ```
   This will start the app container and Nginx.

## 📄 License
This project is licensed under the MIT License - see the `LICENSE.md` file for details.
