import React, { useState } from 'react';
import ChessBoard from '../components/ChessBoard';
import MoveList from '../components/MoveList';
import VerticalToolbar from '../components/VerticalToolbar';

const Board = () => {
  const [pieces, setPieces] = useState({});
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [moves, setMoves] = useState([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(-1);
  const [boardRotated, setBoardRotated] = useState(false);

  const handleSquareClick = (file, rank, square) => {
    if (selectedSquare) {
      // Make a move
      const newMove = {
        from: selectedSquare,
        to: square,
        notation: `${selectedSquare}-${square}`,
        status: 'unknown'
      };
      
      const newMoves = [...moves, newMove];
      setMoves(newMoves);
      setCurrentMoveIndex(newMoves.length - 1);
      
      // Update pieces (simple move)
      const newPieces = { ...pieces };
      if (pieces[selectedSquare]) {
        newPieces[square] = pieces[selectedSquare];
        delete newPieces[selectedSquare];
      }
      setPieces(newPieces);
      
      setSelectedSquare(null);
    } else {
      // Select a square
      setSelectedSquare(square);
    }
  };

  const handleBack = () => {
    if (currentMoveIndex > 0) {
      setCurrentMoveIndex(currentMoveIndex - 1);
    }
  };

  const handleForward = () => {
    if (currentMoveIndex < moves.length - 1) {
      setCurrentMoveIndex(currentMoveIndex + 1);
    }
  };

  const handleReset = () => {
    setPieces({});
    setMoves([]);
    setCurrentMoveIndex(-1);
    setSelectedSquare(null);
  };

  const handleRotateBoard = () => {
    setBoardRotated(!boardRotated);
  };

  const handleSave = () => {
    if (moves.length > 0) {
      const updatedMoves = moves.map(move => ({
        ...move,
        status: 'saved'
      }));
      setMoves(updatedMoves);
    }
  };

  const handleDelete = () => {
    if (moves.length > 0) {
      const newMoves = moves.slice(0, -1);
      setMoves(newMoves);
      setCurrentMoveIndex(Math.max(-1, newMoves.length - 1));
    }
  };

  const handleMoveClick = (index) => {
    setCurrentMoveIndex(index);
  };

  const controls = [
    { icon: '←', label: 'Retour', onClick: handleBack, disabled: currentMoveIndex <= 0 },
    { icon: '→', label: 'Suivant', onClick: handleForward, disabled: currentMoveIndex >= moves.length - 1 },
    { icon: '⏪', label: 'Reset', onClick: handleReset },
    { icon: '⟳', label: 'Rotation', onClick: handleRotateBoard },
    { icon: '💾', label: 'Sauver', onClick: handleSave, disabled: moves.length === 0 },
    { icon: '🗑', label: 'Supprimer', onClick: handleDelete, disabled: moves.length === 0 }
  ];

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full h-full">
        {/* Left Column - Chessboard (85-90% of left area) */}
        <div className="w-3/5 flex items-center justify-center p-4">
          <div className={`transform transition-transform duration-300 ${boardRotated ? 'rotate-180' : ''}`}>
            <ChessBoard
              onSquareClick={handleSquareClick}
              pieces={pieces}
              selectedSquare={selectedSquare}
            />
          </div>
        </div>

        {/* Middle Column - Enhanced Control Strip */}
        <div className="flex flex-col items-center justify-center border-l border-gray-200 px-6 w-32">
          <VerticalToolbar controls={controls} />
        </div>

        {/* Right Column - Move List (unchanged) */}
        <div className="flex-1 border-l border-gray-200">
          <MoveList
            moves={moves}
            onMoveClick={handleMoveClick}
            currentMoveIndex={currentMoveIndex}
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col w-full h-full">
        {/* Board */}
        <div className="flex-1 flex items-center justify-center p-2 pt-8 pb-8">
          <div className={`transform transition-transform duration-300 ${boardRotated ? 'rotate-180' : ''}`}>
            <div className="w-full max-w-[95vw] mx-auto">
              <ChessBoard
                onSquareClick={handleSquareClick}
                pieces={pieces}
                selectedSquare={selectedSquare}
              />
            </div>
          </div>
        </div>

        {/* Enhanced Horizontal Toolbar */}
        <div className="border-t border-gray-200 bg-white p-4 pt-8 pb-8">
          <div className="grid grid-cols-3 gap-3">
            {controls.map((control, index) => (
              <button
                key={index}
                onClick={control.onClick}
                disabled={control.disabled}
                className={`
                  flex flex-col items-center justify-center space-y-1 py-3 px-2
                  border border-gray-300 rounded-lg transition-colors duration-200
                  ${control.disabled
                    ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
                    : 'text-gray-700 bg-white hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm'
                  }
                `}
                title={control.label}
              >
                <span className="text-lg">{control.icon}</span>
                <span className="text-xs font-medium">{control.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Move List */}
        <div className="flex-1 border-t border-gray-200">
          <MoveList
            moves={moves}
            onMoveClick={handleMoveClick}
            currentMoveIndex={currentMoveIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Board; 