/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TopProjects } from './components/TopProjects';
import { CustomerReviews } from './components/CustomerReviews';
import { CallToAction } from './components/CallToAction';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CostEstimatorModal } from './components/CostEstimatorModal';
import { ProjectItem, ServiceItem } from './types';
import { PROJECTS_DATA } from './data/mockData';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [consultationService, setConsultationService] = useState('Interior Design');

  const handleOpenConsultationWithService = (serviceName: string) => {
    setConsultationService(serviceName);
    setIsConsultationOpen(true);
  };

  const handleEstimateToBooking = (estimateSummary: string) => {
    setIsEstimatorOpen(false);
    setConsultationService(`Cost Estimate: ${estimateSummary}`);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-amber-900 selection:text-amber-100">
      {/* Fixed Header Navbar */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultationWithService('General Consultation')}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenConsultation={() => handleOpenConsultationWithService('Hero Consultation')}
        onViewProjects={() => {
          const el = document.getElementById('top-projects');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Services Section */}
      <Services
        onSelectService={(service) => {
          setSelectedService(service);
          handleOpenConsultationWithService(service.title);
        }}
      />

      {/* Top Projects Section */}
      <TopProjects
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* Customer Reviews Section */}
      <CustomerReviews />

      {/* Call To Action Banner */}
      <CallToAction
        onOpenConsultation={() => handleOpenConsultationWithService('Call to Action')}
      />

      {/* About Us Section */}
      <AboutUs />

      {/* Footer */}
      <Footer />

      {/* Book a Call Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={consultationService}
      />

      {/* Project Detail & Before/After Inspector Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(projectName) => handleOpenConsultationWithService(`Inquiry: ${projectName}`)}
      />

      {/* Interactive Cost Estimator Modal */}
      <CostEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onProceedToBook={handleEstimateToBooking}
      />
    </div>
  );
}
