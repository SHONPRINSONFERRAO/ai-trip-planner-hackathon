# GoGlobe AI Trip Planner 🚀

### Smarter Paths to Every Destination ✨

GoGlobe is a full-stack AI-powered trip planning application built for a hackathon. It uses a Next.js frontend and a Python/Flask backend with the Google Gemini API to generate personalized travel itineraries based on user preferences for destination, budget, and interests.

![GoGlobe Demo](https://via.placeholder.com/800x450.png?text=Add+Your+Project+Demo+GIF+Here)

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [Usage](#-usage)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 About The Project

This project was developed as a solution to simplify the often overwhelming process of travel planning. Instead of spending hours searching through blogs and travel sites, users can get a customized, budget-conscious itinerary in seconds. Our smart AI acts as a personal travel agent, crafting unique experiences tailored to each user's desires.

---

## ✨ Key Features

* **🤖 AI-Powered Itineraries:** Generates detailed, day-by-day travel plans using the Google Gemini API.
* **👤 User-Centric Planning:** Creates plans based on user input for **Destination**, **Budget (INR)**, and **Interests**.
* **🌐 Interactive UI:** A smooth and responsive user interface built with Next.js and animated with Framer Motion.
* **🗺️ Inspiration Section:** Showcases preferred national and international itineraries to inspire users.
* **🚀 Full-Stack Architecture:** Demonstrates a modern web application structure with a separate frontend and backend API.

---

## 🛠️ Tech Stack

This project is built with a modern tech stack, separating the frontend and backend for scalability and maintainability.

**Frontend:**
* [Next.js](https://nextjs.org/)
* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Framer Motion](https://www.framer.com/motion/)

**Backend:**
* [Python](https://www.python.org/)
* [Flask](https://flask.palletsprojects.com/)
* [Google Gemini API](https://ai.google.dev/)

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:
* [Node.js](https://nodejs.org/en/) (v18 or later)
* [Python](https://www.python.org/downloads/) (v3.8 or later)
* `pip` and `venv` (usually come with Python)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
    cd YOUR_REPOSITORY_NAME
    ```

2.  **Backend Setup (Flask API):**
    ```bash
    cd backend
    
    # Create and activate a virtual environment
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    
    # Install dependencies
    pip install -r requirements.txt
    
    # Create a .env file and add your API key
    echo "GEMINI_API_KEY='YOUR_GEMINI_API_KEY_HERE'" > .env
    
    # Run the backend server (leave this terminal running)
    python app.py
    ```
    The backend will be running on `http://127.0.0.1:5000`.

3.  **Frontend Setup (Next.js App):**
    Open a **new terminal** for this step.
    ```bash
    cd frontend
    
    # Install dependencies
    npm install
    
    # Run the frontend server
    npm run dev
    ```
    The frontend will be available at `http://localhost:3000`.

---

## 📖 Usage

Once both servers are running:
1.  Open your browser and navigate to `http://localhost:3000`.
2.  Scroll down to the "Add Your Preferences" section.
3.  Enter your desired destination, budget in INR, and interests.
4.  Click the "Generate Plan ✨" button.
5.  Wait a few moments, and your personalized AI Trip Plan will appear below!

---

## 📄 License

This project is distributed under the MIT License. See `LICENSE` for more information.

---

## 📧 Contact

Your Name - [GitHub Profile](https://github.com/SHONPRINSONFERRAO)

Project Link: [https://github.com/SHONPRINSONFERRAO/ai-trip-planner-hackathon]
