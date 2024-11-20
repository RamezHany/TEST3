import React from 'react';


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0B0F19]/95 backdrop-blur-sm z-50 border-b border-gray-800/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
          <img 
        src="./public/img/logo.svg" 
        alt="Client Satisfaction Icon" 
    
      />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">About Us</a>
            <a href="#services" className="hover:text-blue-500 transition-colors">Services</a>
            <a href="#blog" className="hover:text-blue-500 transition-colors">Blog</a>
            <a href="#meetup" className="hover:text-blue-500 transition-colors">Meetup</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>
          <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}