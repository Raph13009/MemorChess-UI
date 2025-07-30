import React from 'react';

const VerticalToolbar = ({ controls }) => {
  return (
    <div className="flex flex-col space-y-4">
      {controls.map((control, index) => (
        <div key={index} className="flex flex-col items-center space-y-1">
          <button
            onClick={control.onClick}
            disabled={control.disabled}
            className={`
              flex items-center justify-center w-14 h-14
              border border-gray-300 rounded-lg transition-colors duration-200
              ${control.disabled
                ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
                : 'text-gray-700 bg-white hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm'
              }
            `}
            title={control.label}
          >
            <span className="text-xl">{control.icon}</span>
          </button>
          <span className="text-xs text-gray-500 font-medium">{control.label}</span>
        </div>
      ))}
    </div>
  );
};

export default VerticalToolbar; 