
import { ArrowRight } from 'lucide-react';
import { WorkspaceForm } from './WorkspaceForm';
import heroImage from "../images/hero-2.jpeg";


export function HeroSection() {
  return <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 min-h-screen flex flex-col justify-center">
        {/* Large Headline */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-12 tracking-tight">
          DIGITAL WORKING STUDIOS
        </h1>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-white text-lg leading-relaxed max-w-lg">
              An intelligent workspace that blends physical and digital tools to boost collaboration, productivity, and innovation.
            </p>

            <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-full font-medium text-gray-900 hover:bg-gray-100 transition-colors group">
              GET A FREE QUOTE
              <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>

          {/* Right Content - Form */}
          <div className="flex justify-end">
            <WorkspaceForm />
          </div>
        </div>
      </div>
    </section>;
}