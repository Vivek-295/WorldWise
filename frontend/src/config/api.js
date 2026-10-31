// Centralized API configuration
export const BACKEND_URL = (import.meta.env.VITE_BACKEND_URL || "https://worldwise-api-ten.vercel.app").replace(/\/$/, "");
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || `${BACKEND_URL}/api/auth`;
