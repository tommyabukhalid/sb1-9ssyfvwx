import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Partners } from './components/Partners';
import { ProjectsHighlight } from './components/ProjectsHighlight';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <Partners />
        <ProjectsHighlight />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;