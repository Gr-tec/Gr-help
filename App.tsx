
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ServiceSection from './components/ServiceSection';
import Portfolio from './components/Portfolio';
import NewsSection from './components/NewsSection';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import About from './components/About';
import ProductionGallery from './components/ProductionGallery';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<ServiceSection />} />
            <Route path="/blocos" element={<ProductSection />} />
            <Route path="/galeria-producao" element={<ProductionGallery />} />
            <Route path="/obras" element={<Portfolio />} />
            <Route path="/noticias" element={<NewsSection />} />
            <Route path="/contacto" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Líderes em Qualidade de Construção e Produção
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            A A.M.C combina experiência em engenharia com tecnologia de ponta na fabricação de blocos e pavimentos.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="p-6 bg-gray-50 rounded-xl">
              <i className="fas fa-hard-hat text-4xl text-blue-700 mb-4"></i>
              <h3 className="text-lg font-bold">Obras Certificadas</h3>
              <p className="text-gray-600 mt-2">Seguimos rigorosamente todas as normas de segurança e engenharia.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <i className="fas fa-industry text-4xl text-blue-700 mb-4"></i>
              <h3 className="text-lg font-bold">Produção Escalonável</h3>
              <p className="text-gray-600 mt-2">Capacidade de produção diária para atender grandes empreitadas.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <i className="fas fa-truck text-4xl text-blue-700 mb-4"></i>
              <h3 className="text-lg font-bold">Entrega Eficiente</h3>
              <p className="text-gray-600 mt-2">Logística própria para garantir que o seu material chega no tempo certo.</p>
            </div>
          </div>
        </div>
      </div>
      <ProductSection preview />
      <ServiceSection preview />
      <NewsSection preview />
    </>
  );
};

export default App;
