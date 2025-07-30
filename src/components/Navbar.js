import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || (path === '/board' && location.pathname === '/');
  };

  const navItems = [
    { path: '/board', label: 'Échiquier' },
    { path: '/training', label: 'Entraînement' },
    { path: '/settings', label: 'Paramètres' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-14">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200
                  ${isActive(item.path)
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                  }
                `}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 