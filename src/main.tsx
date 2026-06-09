import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css' // Ensure your index.css is correctly importing Tailwind's base, components, and utilities

createRoot(document.getElementById("root")!).render(<App />);
