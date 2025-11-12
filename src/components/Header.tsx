import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';
export function Header() {
  return <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center text-xl">
            📄
          </div>
          <span className="text-xl font-bold text-gray-900">Workvip</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
            Service <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
            Agency <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
            Case study <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
            Resources <ChevronDown size={16} />
          </button>
          <button className="text-gray-700 hover:text-gray-900">Contact</button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition-colors">
            <Bell size={20} />
          </button>
          <button className="px-6 py-2 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors">
            Get started
          </button>
        </div>
      </div>
    </header>;
}