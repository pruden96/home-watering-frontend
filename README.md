## 🪴 Automated Home Irrigation System - Frontend

This repository contains the source code for the user interface (Frontend) of the Automated Home Watering System. Built with **React**, **Vite**, and **TypeScript**, this application provides a responsive control panel to manage the watering schedule, monitor the system, and configure hardware connection settings.

### 🚀 Key Features

The application is structured around three main views:

-   **Home (Dashboard):**
    -   View the current system status.
    -   **Manual Irrigation:** Start and stop the water pump immediately.
    -   Select the **duration** for the manual irrigation cycle.
-   **Tasks (Schedules):**
    -   Create, view, and manage **automated watering schedules**.
    -   Set specific **days and times** for scheduled irrigation.
-   **Settings:**
    -   Configure connection parameters for the backend components.
    -   Set the **IP address and Port** for the **Raspberry Pi API Server**.
    -   Set the **IP address and Port** for the **ESP32** (direct control/status, if applicable).

### ⚙️ Technologies

-   **Framework:** React
-   **Build Tool:** Vite
-   **Language:** TypeScript
-   **Styling:** _[Add your styling library here, e.g., Tailwind CSS, Styled Components, etc.]_

### 💻 Local Development Setup

These instructions will get a copy of the project running on your local machine for development and testing purposes.

#### Prerequisites

-   Node.js (LTS version recommended)
-   npm (or Yarn/pnpm)

#### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/pruden96/home-watering-frontend
    cd watering-ui
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure API Endpoints:**
    You may need to update the environment variables or configuration files (e.g., `.env` file) to point to your local Raspberry Pi API server.

    > **Note:** The application expects the **Raspberry Pi API Server** to be running for task scheduling and system configuration.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will now be running locally, typically accessible at `http://localhost:5173` (or the port specified by Vite).

### 🛑 Important Note on Deployment

This project is currently designed and tested for **local development (`npm run dev`) only**. The next phase will involve configuring a secure deployment strategy. **Do not deploy this application publicly** until all security measures and backend validation are complete.

### 🤝 Contribution

This is a personal project. Feel free to use the code as inspiration for your own smart home projects.
