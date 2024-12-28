import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { FeatureBanner } from "./Components/FeatureBanner";
import { Hero } from "./Components/Hero";
import PartnerCompanies from "./Components/PartnerCompanies";
import { SkillsSection } from "./Components/SkillSection";
import StatisticsSection from "./Components/InfoSection";
import InfoSection from "./Components/InfoSection";
import CertificationSection from "./Components/CertificationSection";
import PricingSection from "./Components/PricingSection";
import { Testimonials } from "./Components/Testimonials";
import { EnrollmentSection } from "./Components/EnrollmentSection";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminLogin } from "./Components/AdminLogin";
import { AdminDashboard } from "./Components/AdminDashboard";
import ProtectedAdminRoute from "./Components/ProtectedAdminRoute";
import Footer from "./Components/Footer";
// import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Define Routes */}
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Header />
                {/* <FeatureBanner /> */}
                <Hero />
                <PartnerCompanies />
                <SkillsSection />
                <InfoSection />
                <CertificationSection />
                <PricingSection />
                <Testimonials />
                <EnrollmentSection />
                <Footer />
              </>
            }
          />

          {/* Admin Routes */}
          <Route path="/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
