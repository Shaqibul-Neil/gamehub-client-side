import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthProvider from "./contexts/AuthProvider";
import "./index.css";
import router from "./routes/router";
import { Toaster } from "react-hot-toast";
import NeonCursor from "./components/NeonCursor";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: "linear-gradient(90deg, #00ffe0, #6c63ff)",
              color: "#0a0a0a", // dark text for contrast
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
              border: "1px solid #00ffe0",
              boxShadow: "0 0 15px rgba(108,99,255,0.6)",
            },
            iconTheme: {
              primary: "#00ffe0",
              secondary: "#0a0a0a",
            },
          },
          error: {
            style: {
              background: "linear-gradient(90deg, #6c63ff, #ff004c)",
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
              border: "1px solid #6c63ff",
              boxShadow: "0 0 15px rgba(255,0,76,0.5)",
            },
            iconTheme: {
              primary: "#ff004c",
              secondary: "#fff",
            },
          },
        }}
      />
      <NeonCursor />
    </AuthProvider>
  </StrictMode>
);
