import React from 'react';
import { ArrowRight } from 'lucide-react';
export function FeaturesSection() {
  return <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left - Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Everything You Need, All in One Place
            </h2>
          </div>

          {/* Right - Description */}
          <div className="flex items-start lg:items-center">
            <p className="text-gray-500 text-sm leading-relaxed">
              Stay connected with reliable Wi-Fi across the workspace. Work on
              your own schedule with round-the-clock availability. Professional
              spaces for client meetings and presentations.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Feature Card 1 - Networking Events */}
          <div className="relative rounded-3xl overflow-hidden group">
            <div className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full z-10"></div>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Networking Events" className="w-full h-64 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white font-medium">Networking Events</p>
            </div>
          </div>

          {/* Feature Card 2 - Prime Location */}
          <div className="relative rounded-3xl overflow-hidden group">
            <div className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full z-10"></div>
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80" alt="Prime Location" className="w-full h-64 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white font-medium">Prime Location</p>
            </div>

            {/* Stats Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-gray-900">+145</div>
              <div className="text-gray-500 text-sm mt-1">objects</div>
            </div>
          </div>

          {/* Feature Card 3 - High-Speed Internet */}
          <div className="relative rounded-3xl overflow-hidden group md:col-span-2 lg:col-span-1">
            <div className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full z-10"></div>
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" alt="High-Speed Internet" className="w-full h-64 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white font-medium">High-Speed Internet</p>
            </div>
          </div>
        </div>

        {/* See All Button */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors group">
            See All
            <span className="w-6 h-6 bg-white text-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
              <ArrowRight size={14} />
            </span>
          </button>
        </div>
      </div>
    </section>;
}