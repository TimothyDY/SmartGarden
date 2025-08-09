# 🌿 SmartGarden - Smart Home Temperature Monitoring

SmartGarden is a cutting-edge smart home solution that delivers real-time temperature and humidity monitoring capabilities. Built with a **Python/FastAPI backend** and a **React frontend**, it offers a streamlined, user-friendly interface for environmental monitoring.

## 📂 Project Structure

```
SmartGarden/
├── api/                    # Backend API (FastAPI/Flask)
│   ├── app.py             # Main FastAPI application
│   ├── flask_app.py       # Flask application (WSGI compatible)
│   ├── requirements.txt   # Python dependencies
│   ├── wsgi.py           # WSGI configuration
│   └── temperature.db    # SQLite database
├── src/                   # Frontend React (Source)
│   ├── components/        # React components
│   │   ├── Dashboard.js   # System dashboard component
│   │   ├── Navbar.js      # Navigation component
│   │   └── TemperatureWidget.js # Live temperature widget
│   ├── pages/            # Page components
│   │   ├── Home.js       # Home page with dashboard
│   │   ├── About.js      # About page with company info
│   │   ├── Contact.js    # Contact page with form
│   │   └── Temperature.js # Temperature monitoring page
│   ├── services/         # API services
│   │   └── api.js        # API service functions
│   └── ...
├── public/                # Frontend React (Public)
├── package.json           # Frontend dependencies
├── vercel.json           # Vercel deployment config
└── README.md             # This file
```

## ⚡ Quick Start

### Prerequisites

*   **Python 3.8+** (for backend)
*   **Node.js 14+** (for frontend)
*   **npm** or **yarn** (package manager)

### Backend Setup (API)

1.  **Navigate to api folder:**
    ```bash
    cd api
    ```

2.  **Install Python dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

3.  **Run API server:**
    ```bash
    uvicorn app:app --reload --host 0.0.0.0 --port 8000
    ```

4.  **API will be available at:** `http://localhost:8000`
5.  **API Documentation:** `http://localhost:8000/docs`

### Frontend Setup (React)

1.  **Navigate to project root:**
    ```bash
    cd SmartGarden
    ```

2.  **Install Node.js dependencies:**
    ```bash
    npm install
    ```

3.  **Start React development server:**
    ```bash
    npm start
    ```

4.  **Frontend will be available at:** `http://localhost:3000`

## 🔥 Features

### Backend API (FastAPI/Flask)

*   ✅ RESTful API for temperature and humidity data
*   ✅ SQLite database with SQLAlchemy ORM
*   ✅ Automatic API documentation (Swagger UI)
*   ✅ Real-time data monitoring
*   ✅ Dummy data generation for testing
*   ✅ CORS enabled for React frontend
*   ✅ WSGI compatible for deployment
*   ✅ Health check endpoint

### Frontend (React)

*   ✅ **Home Page** - Landing page with live temperature widget and system dashboard
*   ✅ **About Page** - Company information, mission, technology overview, and team details
*   ✅ **Contact Page** - Contact form and company contact information
*   ✅ **Temperature Page** - Detailed temperature monitoring and history
*   ✅ **System Dashboard** - Real-time monitoring dashboard with statistics
*   ✅ **Live Temperature Widget** - Real-time temperature display
*   ✅ **Responsive Design** - Mobile-friendly interface
*   ✅ **Auto-refresh** - Data updates every 30 seconds
*   ✅ **Modern UI** - Clean blue color scheme

## 🔌 API Endpoints

| Method | Endpoint                        | Description                 |
| ------ | ------------------------------- | --------------------------- |
| GET    | /                               | API information             |
| GET    | /api/health                     | Health check                |
| GET    | /api/temperature                | Current temperature data    |
| GET    | /api/temperature/history        | Temperature history         |
| GET    | /api/temperature/stats          | Temperature statistics       |
| POST   | /api/temperature/generate-dummy | Generate dummy data         |

## 🧪 Testing

### API Testing

```bash
# Health check
curl http://localhost:8000/api/health

# Current temperature
curl http://localhost:8000/api/temperature

# Generate dummy data
curl -X POST "http://localhost:8000/api/temperature/generate-dummy?count=20"
```

### Frontend Testing

1.  Ensure API is running on port 8000
2.  Open `http://localhost:3000` in your browser
3.  Navigate through the pages to test functionality:
    - **Home** - View dashboard and live temperature widget
    - **About** - Read company information and technology details
    - **Contact** - Test contact form and view company details
    - **Temperature** - Monitor detailed temperature data

## 🛠️ Technologies

### Backend

*   **Python 3.8+**
*   **FastAPI** - Modern web framework
*   **Flask** - WSGI compatible framework
*   **SQLAlchemy** - Database ORM
*   **Pydantic** - Data validation
*   **Uvicorn** - ASGI server
*   **SQLite** - Database

### Frontend

*   **React 18**
*   **JavaScript (ES6+)**
*   **CSS3** - Modern styling with CSS Grid and Flexbox
*   **Axios** - HTTP client
*   **React Router** - Navigation

## 🎨 Design Features

*   **Modern Blue Color Scheme** - Professional and clean appearance
*   **Live Temperature Widget** - Real-time data display
*   **Consistent Card Heights** - Uniform dashboard appearance
*   **Auto-refresh Functionality** - Data updates automatically
*   **Error Handling** - Graceful error display and recovery
*   **Responsive Layout** - Optimized for all device sizes
*   **Interactive Contact Form** - Functional form with validation
*   **Company Information Pages** - Professional About and Contact sections

## 📝 Notes

*   **Database**: SQLite file is created automatically on first API run
*   **Dummy Data**: 10 dummy records are created automatically on startup
*   **Auto-refresh**: Frontend refreshes data every 30 seconds
*   **CORS**: Backend is configured to accept requests from frontend
*   **Deployment**: Backend on PythonAnywhere, Frontend on Vercel
*   **API URL**: Configured to use `https://cr4kn.pythonanywhere.com`
*   **Contact Form**: Currently simulates submission (can be connected to backend)

---

**Happy Monitoring! 🌿** # SmartGarden
