import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
function routes() {
  const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
  const AboutPage = React.lazy(() => import("./pages/About/AboutPage"));
  const ContactPage = React.lazy(() => import("./pages/Contact/ContactPage"));
  const FeaturesPage = React.lazy(() => import("./pages/Features/Features"));
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<div className="loading">Loading...</div>}>
            <HomePage />
          </React.Suspense>
        }
      />

      <Route
        path="/about"
        element={
          <React.Suspense fallback={<div className="loading">Loading...</div>}>
            <AboutPage />
          </React.Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <React.Suspense fallback={<div className="loading">Loading...</div>}>
            <ContactPage />
          </React.Suspense>
        }
      />
      <Route
        path="/features"
        element={
          <React.Suspense fallback={<div className="loading">Loading...</div>}>
            <FeaturesPage />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default routes;
