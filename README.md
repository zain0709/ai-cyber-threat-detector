# ai-cyber-threat-detector

# AI-CYBER-THREAT-DETECTOR Project Structure

```
AI-CYBER-THREAT-DETECTOR/
│
├─ backend/                                 ← Flask backend (API + AI logic)
│  │
│  ├─ src/                     ← Core backend source code
│  │   ├─ api/                 ← Flask route definitions (e.g., /api/predict)
│  │   ├─ model/               ← Transformer fine-tuning and inference scripts
│  │   ├─ data/                ← Datasets and preprocessing utilities
│  │   └─ utils/               ← Helper modules (metrics, config, etc.)
│  │
│  ├─ venv/                    ← Local virtual environment (Python dependencies)
│  │   ├─ Scripts/             ← Activation scripts (activate, pip.exe, etc.)
│  │   ├─ Lib/                 ← Installed site-packages (Flask, Torch, etc.)
│  │   └─ pyvenv.cfg
│  │
│  ├─ app.py                       ← Flask entry point (main API server)
│  ├─ requirements.txt    ← Backend dependencies (Flask, Torch, Transformers, etc.)
│  └─ __init__.py                            ← Marks backend as a package
│
├─ frontend/                                ← React frontend (dashboard UI)
│  │
│  ├─ public/                               ← Static public assets served by React
│  │   ├─ favicon.ico                        ← Browser tab icon
│  │   ├─ index.html                         ← Root HTML file for React app
│  │   ├─ logo192.png                        ← React logo (used for PWA)
│  │   ├─ logo512.png                        ← Larger logo variant
│  │   ├─ manifest.json                      ← PWA configuration
│  │   └─ robots.txt                         ← Web crawler rules
│  │
│  ├─ src/                       ← React source code
│  │   ├─ components/            ← Reusable UI elements (charts, tables, alerts)
│  │   ├─ pages/                 ← Full-page views (Dashboard, Reports, etc.)
│  │   ├─ App.js                 ← Root React component (handles routes/layout)
│  │   ├─ index.js               ← Entry point for ReactDOM rendering
│  │   └─ api.js                 ← Axios instance for Flask API calls
│  │
│  ├─ package.json                           ← Node dependencies + proxy to Flask API
│  ├─ package-lock.json                      ← Locked dependency versions
│  ├─ README.md                              ← Frontend-specific documentation
│  └─ node_modules/                          ← Installed frontend dependencies (auto-generated)
│
├─ LICENSE                         ← Project license (MIT recommended)
├─ README.md                       ← Main documentation (setup, usage, roadmap)
└─ .gitignore                      ← Ignore venv, node_modules, cache, etc.
```

cd ai-cyber-threat-detector

```
    npx create-react-app frontend
```

cd frontend

```
npm install axios chart.js react-chartjs-2
```
### Run React Frontend  
```  
cd frontend
npm install
npm start 
```


# 2. Create venv
cd backend
python -m venv venv
venv\Scripts\activate

# 3. Install libs
pip install --upgrade pip
pip install flask flask-cors torch torchvision transformers scikit-learn pandas numpy matplotlib
pip freeze > requirements.txt

# 4. Run backend
python app.py

# 5. (New terminal)
cd frontend
npm install
npm start