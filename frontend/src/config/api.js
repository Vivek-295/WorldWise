// Centralized API configuration
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || `${BACKEND_URL}/api/auth`;
