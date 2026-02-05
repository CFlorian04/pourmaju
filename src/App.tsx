import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './components/home/Home';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home key="home" />;
      case 'stats': return <Stats key="stats" />;
      case 'photos': return <Photos key="photos" />;
      case 'quiz': return <Quiz key="quiz" />;
      case 'bucket': return <Bucket key="bucket" />;
      default: return <Home />;
    }
  };

  return (
    <div className="app-container">
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <nav className="bottom-nav">
        {/* Tes boutons ici */}
      </nav>
    </div>
  );
}

export default App;