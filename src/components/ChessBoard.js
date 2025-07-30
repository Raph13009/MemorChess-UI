import React from 'react';

const ChessBoard = ({ 
  onSquareClick, 
  pieces = {}, 
  selectedSquare = null,
  className = "" 
}) => {
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  const isLightSquare = (file, rank) => {
    const fileIndex = files.indexOf(file);
    const rankIndex = ranks.indexOf(rank);
    return (fileIndex + rankIndex) % 2 === 0;
  };

  const getSquareColor = (file, rank) => {
    const isLight = isLightSquare(file, rank);
    return isLight ? 'bg-chess-light' : 'bg-chess-dark';
  };

  const isSelected = (file, rank) => {
    return selectedSquare === `${file}${rank}`;
  };

  return (
    <div className={`inline-block ${className}`}>
      <div className="grid grid-cols-8 border border-gray-300 overflow-hidden lg:w-[600px] lg:h-[600px] w-[400px] h-[400px]">
        {ranks.map((rank) =>
          files.map((file) => {
            const square = `${file}${rank}`;
            const piece = pieces[square];
            const isLight = isLightSquare(file, rank);
            
            return (
              <div
                key={square}
                className={`
                  aspect-square
                  ${getSquareColor(file, rank)}
                  ${isSelected(file, rank) ? 'ring-1 ring-blue-500' : ''}
                  flex items-center justify-center
                  cursor-pointer
                  transition-colors duration-200
                  hover:bg-opacity-80
                  ${isLight ? 'text-chess-dark' : 'text-chess-light'}
                `}
                style={{ minWidth: '40px', minHeight: '40px' }}
                onClick={() => onSquareClick && onSquareClick(file, rank, square)}
              >
                {piece && (
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-medium">
                    {piece}
                  </span>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ChessBoard; 