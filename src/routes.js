import React from "react";
import { Route, Routes } from "react-router-dom";

function routes() {
  const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
  const AboutPage = React.lazy(() => import("./pages/About/AboutPage"));
  const ContactPage = React.lazy(() => import("./pages/Contact/ContactPage"));
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </React.Suspense>
        }
      />

      <Route
        path="/about"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <AboutPage />
          </React.Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <ContactPage />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default routes;
