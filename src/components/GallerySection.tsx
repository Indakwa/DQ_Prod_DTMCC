import SecurityImage from "../images/secure.jpeg";
import emptyRoom from "../images/hero-3.jpeg";
import ladyImage from "../images/lady.jpeg";
import hallImage from "../images/hallway.jpeg";

export function GallerySection() {
  return <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See How Our Space Transforms Work
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
           A workspace that elevates every part of your day.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Left Card - Open Workspace */}
          <div className="relative rounded-3xl overflow-hidden md:row-span-2 lg:col-span-1 lg:row-span-2 h-[400px] md:h-auto group">
            <img src={SecurityImage} alt="Open workspace" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Secure Entrance</h3>
              <p className="text-sm text-white/90">
                Smart biometric access for approved members only.
              </p>
            </div>
          </div>

          {/* Top Right Small - Private Office */}
          <div className="relative rounded-3xl overflow-hidden h-[250px] md:h-[300px] lg:col-span-2 group">
            <img src={emptyRoom} alt="Private office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Space to Be Partitioned</h3>
              <p className="text-sm text-white/90">
                Open floor ready for transformation into private offices and team rooms.
              </p>
            </div>
          </div>

          {/* Middle Right Small - Collaboration */}
          <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[350px] group">
            <img src={ladyImage} alt="Collaboration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-bold mb-2">People Working</h3>
              <p className="text-sm text-white/90">
                Connect, get work done, and share ideas effortlessly.
              </p>
            </div>
          </div>

          {/* Bottom Wide - Lounge */}
          <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[350px] group">
            <img src={hallImage} alt="Lounge with cozy seating" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">
                Minimal hallway
              </h3>
              <p className="text-sm text-white/90">
                Shared zones for a seamless workspace experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}