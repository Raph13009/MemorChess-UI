import React, { useState } from 'react';

const Settings = () => {
  const [successDateFactor, setSuccessDateFactor] = useState(1.5);
  const [delayBeforeNextMove, setDelayBeforeNextMove] = useState(2000);
  const [theme, setTheme] = useState('system');
  const [syncStatus, setSyncStatus] = useState(false);
  const [lastLocalUpdate, setLastLocalUpdate] = useState('2024-01-15 14:30:22');
  const [lastRemoteUpdate, setLastRemoteUpdate] = useState('2024-01-15 12:15:45');

  const handleResetToDefault = () => {
    setSuccessDateFactor(1.5);
    setDelayBeforeNextMove(2000);
    setTheme('system');
  };

  const handleEraseAllData = () => {
    if (window.confirm('Êtes-vous sûr de vouloir effacer toutes les données ? Cette action ne peut pas être annulée.')) {
      // Reset all state
      setSuccessDateFactor(1.5);
      setDelayBeforeNextMove(2000);
      setTheme('system');
      setSyncStatus(false);
      setLastLocalUpdate('Jamais');
      setLastRemoteUpdate('Jamais');
    }
  };

  const handleUploadLocal = () => {
    setSyncStatus(true);
    setLastRemoteUpdate(new Date().toLocaleString());
  };

  const handleDownloadRemote = () => {
    setSyncStatus(true);
    setLastLocalUpdate(new Date().toLocaleString());
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-2xl font-light text-gray-900 mb-2">
          Paramètres
          <div className="w-12 h-0.5 bg-blue-500 mt-2"></div>
        </h1>
        <p className="text-gray-500 text-sm">Configurez vos préférences d'entraînement</p>
      </div>

      <div className="space-y-12">
        {/* Training Settings */}
        <div className="space-y-8">
          <h2 className="text-lg font-medium text-gray-900">Paramètres d'Entraînement</h2>
          
          {/* Success Date Factor Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-700">
                Facteur de Date de Réussite
              </label>
              <span className="text-sm text-gray-900 font-medium">
                {successDateFactor}
              </span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={successDateFactor}
              onChange={(e) => setSuccessDateFactor(parseFloat(e.target.value))}
              className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>0.5</span>
              <span>1.5</span>
              <span>3.0</span>
            </div>
          </div>

          {/* Delay Before Next Move Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-700">
                Délai Avant le Prochain Coup
              </label>
              <span className="text-sm text-gray-900 font-medium">
                {delayBeforeNextMove}ms
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="5000"
              step="100"
              value={delayBeforeNextMove}
              onChange={(e) => setDelayBeforeNextMove(parseInt(e.target.value))}
              className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>500ms</span>
              <span>2000ms</span>
              <span>5000ms</span>
            </div>
          </div>
        </div>

        {/* Theme */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Thème</h3>
          <div className="flex space-x-6">
            {['system', 'light', 'dark'].map((themeOption) => (
              <button
                key={themeOption}
                onClick={() => setTheme(themeOption)}
                className={`
                  text-sm font-medium transition-colors duration-200
                  ${theme === themeOption
                    ? 'text-blue-600 border-b-2 border-blue-500 pb-1'
                    : 'text-gray-500 hover:text-gray-700'
                  }
                `}
              >
                {themeOption === 'system' ? 'Système' : themeOption === 'light' ? 'Clair' : 'Sombre'}
              </button>
            ))}
          </div>
        </div>

        {/* Data Management */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Gestion des Données</h3>
          <div className="flex space-x-4">
            <button
              onClick={handleResetToDefault}
              className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
            >
              Remettre par Défaut
            </button>
            <button
              onClick={handleEraseAllData}
              className="px-4 py-2 text-sm font-medium text-red-600 border border-red-300 rounded-md hover:bg-red-50 transition-colors duration-200"
            >
              Effacer Toutes les Données
            </button>
          </div>
        </div>

        {/* Sync Status */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">Statut de Synchronisation</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Dernière mise à jour locale</span>
              <span className="text-gray-900">{lastLocalUpdate}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Dernière mise à jour distante</span>
              <span className="text-gray-900">{lastRemoteUpdate}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <div className={`w-2 h-2 rounded-full ${syncStatus ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={syncStatus ? 'text-green-600' : 'text-red-600'}>
                {syncStatus ? 'Bases de données synchronisées' : 'Bases de données NON synchronisées'}
              </span>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleUploadLocal}
              className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
            >
              Télécharger Local → Distant
            </button>
            <button
              onClick={handleDownloadRemote}
              className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
            >
              Télécharger Distant → Local
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 