"use client";

import React from 'react';
import services from '@/lib/services';

const Services = () => {
  return (
    <section id="services" className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Unsere Leistungen</h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full mb-6"></div>
          <p className="text-sm text-slate-900">
            Wir bieten ein breites Spektrum an elektrotechnischen Dienstleistungen für Privat- und Gewerbekunden in ganz Wien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 group flex flex-col transform transition-opacity transition-transform duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-yellow transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-slate-900 leading-relaxed">
                {service.description}
              </p>
              {/* Optional: Link to service details page if available 
              <div className="mt-6 pt-4">
                <a href="/leistungen" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-full">
                  Mehr Erfahren
                </a>
              </div>
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
