import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: false, // Deshabilitar archivos .css.map en desarrollo
    // Puedes agregar otras opciones aquí si es necesario
  },
});
