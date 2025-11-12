import React from 'react';
export function GallerySection() {
  return <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See How Our Space Transforms Work
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            With years of expertise, our mission is to make solar energy
            accessible, affordable, and efficient for everyone.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Left Card - Open Workspace */}
          <div className="relative rounded-3xl overflow-hidden md:row-span-2 lg:col-span-1 lg:row-span-2 h-[400px] md:h-auto group">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80" alt="Open workspace" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Open workspace</h3>
              <p className="text-sm text-white/90">
                No barriers to collaboration—just join instantly, connect with
                your team from anywhere.
              </p>
            </div>
          </div>

          {/* Top Right Small - Private Office */}
          <div className="relative rounded-3xl overflow-hidden h-[250px] md:h-[300px] lg:col-span-2 group">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Private office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Private office with...</h3>
              <p className="text-sm text-white/90">
                No barriers to collaboration—just join instantly.
              </p>
            </div>
          </div>

          {/* Middle Right Small - Collaboration */}
          <div className="relative rounded-3xl overflow-hidden h-[250px] md:h-[300px] group">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" alt="Collaboration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Collaboration</h3>
              <p className="text-sm text-white/90">
                No barriers to collaboration—just join instantly.
              </p>
            </div>
          </div>

          {/* Bottom Wide - Lounge */}
          <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[350px] group">
            <img src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200&q=80" alt="Lounge with cozy seating" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">
                Lounge with cozy seating
              </h3>
              <p className="text-sm text-white/90">
                Make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}