# Chess Training App

A minimalistic, gamified chess training application built with React and TailwindCSS. The app features a clean, modern design with three main pages: Board, Training, and Settings.

## Features

### 🎯 Board Page
- Interactive 8x8 chessboard with clickable squares
- Move history with status badges (Saved/Unknown/Pending)
- Control buttons: Back, Forward, Reset, Rotate Board, Save, Delete
- Responsive design that works perfectly on mobile

### 🏋️ Training Page
- Chessboard for training exercises
- Moves counter with progress bar
- Success/failure indicators
- Training tips and guidance

### ⚙️ Settings Page
- Training configuration sliders
- Theme selection (System/Light/Dark)
- Data management options
- Sync status and controls

## Tech Stack

- **React 18** - Modern React with functional components and hooks
- **TailwindCSS** - Utility-first CSS framework for styling
- **React Router** - Client-side routing
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ChessBoard.js      # Reusable chessboard component
│   ├── MoveList.js        # Move history display
│   └── Navbar.js          # Navigation component
├── pages/
│   ├── Board.js           # Main board page
│   ├── Training.js        # Training dashboard
│   └── Settings.js        # Settings and configuration
├── App.js                 # Main app component with routing
├── index.js              # App entry point
└── index.css             # Global styles and Tailwind imports
```

## Design Features

- **Minimalistic Design**: Clean, light interface with subtle shadows and rounded corners
- **Gamification Elements**: Status badges, progress indicators, and interactive feedback
- **Mobile Responsive**: Optimized for all screen sizes with touch-friendly controls
- **Accessibility**: Proper contrast ratios and keyboard navigation support

## Usage

### Board Page
1. Click on squares to select and move pieces
2. Use control buttons to navigate through move history
3. Save moves to track your progress
4. Rotate the board for different perspectives

### Training Page
1. Practice moves on the training board
2. Monitor your daily progress
3. View success/failure indicators
4. Follow training tips for improvement

### Settings Page
1. Adjust training parameters with sliders
2. Choose your preferred theme
3. Manage data and sync settings
4. Reset to defaults or erase all data

## Customization

The app is built with modular components that can be easily customized:

- **Colors**: Modify the Tailwind config in `tailwind.config.js`
- **Layout**: Adjust grid layouts and spacing in component files
- **Functionality**: Extend state management and add new features

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License. 