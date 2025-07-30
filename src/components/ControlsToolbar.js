import React from 'react';

const ControlsToolbar = ({ controls }) => {
  return (
    <div className="flex items-center justify-center px-4 py-3">
      <div className="flex items-center space-x-2">
        {controls.map((control, index) => (
          <button
            key={index}
            onClick={control.onClick}
            disabled={control.disabled}
            className={`
              flex items-center space-x-1 px-3 py-2 text-sm font-medium
              border border-gray-300 rounded-md transition-colors duration-200
              ${control.disabled
                ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
                : 'text-gray-700 bg-white hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400'
              }
            `}
            title={control.label}
          >
            <span className="text-base">{control.icon}</span>
            <span className="hidden sm:inline">{control.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ControlsToolbar; 