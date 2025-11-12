import React, { useState } from 'react';
import { Mail } from 'lucide-react';
export function Footer() {
  const [email, setEmail] = useState('');
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
  };
  const footerLinks = {
    prep: {
      title: 'Prep',
      links: ['Payment', 'Card', 'Pricing']
    },
    products: {
      title: 'Products',
      links: ['General', 'Business', 'Premium']
    },
    company: {
      title: 'Company',
      links: ['About', 'Careers', 'Press Kit']
    },
    developer: {
      title: 'Developer',
      links: ['API Documentation', 'Guide', 'Change Log']
    },
    community: {
      title: 'Community',
      links: ['Refer a Friend', 'Blog', 'Gift']
    },
    support: {
      title: 'Support',
      links: ['Help', 'FAQ', 'Contact']
    },
    legal: {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Services', 'Cookies']
    }
  };
  return <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Newsletter Info */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  Keep up with the latest
                </h3>
                <p className="text-gray-400 text-sm">
                  Join our newsletter to stay up-to date on features and
                  releases.
                </p>
              </div>
            </div>

            {/* Right - Subscribe Form */}
            <div>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <label className="block text-sm text-gray-400">
                  Stay up-to-date
                </label>
                <div className="flex gap-3">
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-500" />
                  <button type="submit" className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  By subscribing you agree to our{' '}
                  <a href="#" className="underline hover:text-white">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center text-xl">
                📄
              </div>
              <span className="text-xl font-bold">Workvip</span>
            </div>
            <p className="text-gray-400 text-sm">
              Make your coworking brand more efficient.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => <div key={key} className="col-span-1">
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, index) => <li key={index}>
                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2024 Workvip. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}