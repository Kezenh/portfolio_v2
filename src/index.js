import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Career from './components/Career';
import Future from './components/Future';
import ProjectsGallery from './components/ProjectsGallery';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <Introduction />
      <Career />
      <Future />
      <ProjectsGallery />
    </main>
    <Footer />
  </React.StrictMode>
);