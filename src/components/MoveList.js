import React from 'react';

const MoveList = ({ moves = [], onMoveClick, currentMoveIndex = -1 }) => {
  const getStatusBadge = (status) => {
    const statusConfig = {
      saved: { color: 'border-green-300 text-green-600', text: 'Sauvé' },
      unknown: { color: 'border-gray-300 text-gray-500', text: 'Inconnu' },
      pending: { color: 'border-yellow-300 text-yellow-600', text: 'En attente' }
    };

    const config = statusConfig[status] || statusConfig.unknown;

    return (
      <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium border ${config.color}`}>
        {config.text}
      </span>
    );
  };

  if (moves.length === 0) {
    return (
      <div className="h-full flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-3">
            <span className="text-gray-400 text-lg">♟</span>
          </div>
          <p className="text-gray-400 text-sm">Aucun coup encore</p>
          <p className="text-gray-300 text-xs mt-1">Commencez à jouer pour voir vos coups</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-900">
            Coups
            <div className="w-8 h-0.5 bg-blue-500 mt-1"></div>
          </h3>
          <span className="text-xs text-gray-500">{moves.length} coups</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">Statut:</span>
          <span className="text-xs text-gray-700 font-medium">
            {moves.some(m => m.status === 'saved') ? 'Sauvé' : 'Inconnu'}
          </span>
        </div>
      </div>

      {/* Desktop: Vertical list */}
      <div className="hidden lg:block flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {moves.map((move, index) => (
            <button
              key={index}
              onClick={() => onMoveClick && onMoveClick(index)}
              className={`
                w-full flex items-center justify-between px-3 py-2 text-sm font-medium
                transition-colors duration-200 border rounded-md
                ${currentMoveIndex === index
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 font-mono">#{index + 1}</span>
                <span className="font-medium">{move.notation}</span>
              </div>
              {getStatusBadge(move.status)}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile: Horizontal scroll */}
      <div className="lg:hidden p-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {moves.map((move, index) => (
            <button
              key={index}
              onClick={() => onMoveClick && onMoveClick(index)}
              className={`
                flex-shrink-0 px-3 py-2 text-sm font-medium whitespace-nowrap
                transition-colors duration-200 border rounded-md
                ${currentMoveIndex === index
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-700'
                }
              `}
            >
              <div className="flex flex-col items-center space-y-1">
                <span className="text-xs text-gray-400 font-mono">#{index + 1}</span>
                <span className="font-medium">{move.notation}</span>
                {getStatusBadge(move.status)}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoveList; 