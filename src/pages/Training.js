import React, { useState } from 'react';

const Training = () => {
  const [movesRemaining] = useState(15);
  const [trainingSuccess] = useState(null); // null, true, false

  const getStatusIndicator = () => {
    if (trainingSuccess === null) {
      return (
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <span className="text-gray-500 text-sm">Inactif</span>
        </div>
      );
    }
    
    if (trainingSuccess) {
      return (
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-green-600 text-sm">Actif</span>
        </div>
      );
    }
    
    return (
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <span className="text-red-600 text-sm">Échec</span>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-2xl font-light text-gray-900 mb-2">
          Tableau de Bord d'Entraînement
          <div className="w-12 h-0.5 bg-blue-500 mt-2"></div>
        </h1>
        <p className="text-gray-500 text-sm">Suivez votre progression d'entraînement aux échecs</p>
      </div>

      <div className="space-y-12">
        {/* Moves Remaining */}
        <div className="space-y-4">
          <div className="flex items-baseline space-x-2">
            <span className="text-4xl font-light text-gray-900">{movesRemaining}</span>
            <span className="text-gray-500 text-sm">coups restants aujourd'hui</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-blue-500 h-1 rounded-full transition-all duration-500"
              style={{ width: `${((15 - movesRemaining) / 15) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Training Status */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Statut d'Entraînement</h3>
          {getStatusIndicator()}
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Statistiques Rapides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Cette semaine</span>
                <span className="text-gray-900 font-medium">47 coups</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Taux de réussite</span>
                <span className="text-gray-900 font-medium">78%</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Série actuelle</span>
                <span className="text-gray-900 font-medium">5 jours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Meilleure série</span>
                <span className="text-gray-900 font-medium">12 jours</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Training; 