import Brenda from "../images/brenda.jpeg";

import { useState } from "react";

import { Briefcase, Building2, Users } from 'lucide-react';
export function SpacesSection() {
  const [activeTab, setActiveTab] = useState('strategy');
  const tabs = [{
    id: 'strategy',
    label: 'Strategy & Planning'
  }, {
    id: 'analytics',
    label: 'Analytics'
  }, {
    id: 'support',
    label: 'Support'
  }, {
    id: 'integrations',
    label: 'Integrations'
  }, {
    id: 'security',
    label: 'Security'
  }];
  const spaces = [{
    icon: Briefcase,
    title: 'Hot Desk',
    description: 'Your own permanent desk with storage. Ideal for professionals who need consistency.'
  }, {
    icon: Building2,
    title: 'Private Offices',
    description: 'Enclosed, fully furnished offices for small to mid-sized team data-driven decisions.'
  }, {
    icon: Users,
    title: 'Meeting Rooms',
    description: 'Book hourly or daily for presentations, client meetings, and brainstorming sessions.'
  }];
  return <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Find the Right Space for Your Work
            </h2>
          </div>
          <div className="flex items-start lg:items-center">
            <p className="text-gray-500 text-sm leading-relaxed">
              We make marketing easy with a clear, step-by-step approach to
              drive real business growth
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-3 rounded-full font-medium transition-colors ${activeTab === tab.id ? 'bg-yellow-400 text-gray-900' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
              {tab.label}
            </button>)}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-gray-100 rounded-3xl overflow-hidden p-8 lg:p-0">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <img src={Brenda} alt="Professional workspace" className="w-full h-full object-cover rounded-2xl lg:rounded-none" />
          </div>

          {/* Right - Space Options */}
          <div className="order-1 lg:order-2 lg:p-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              {spaces.map((space, index) => {
              const Icon = space.icon;
              return <div key={index} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {space.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {space.description}
                      </p>
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>;
}