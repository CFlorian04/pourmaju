import { useMemo } from 'react';
import { motion, type Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronDown } from '@fortawesome/free-solid-svg-icons';


// Interface pour typer nos cœurs
interface FloatingHeart {
  id: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
}

const Home = () => {
  // On génère les positions une seule fois au montage du composant
  // pour éviter que les cœurs sautent partout à chaque re-render.
  const hearts: FloatingHeart[] = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 90}%`,
      top: `${Math.random() * 90}%`,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5
    }));
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.section
      className="home-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background animé */}
      <div className="floating-elements">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="floating-heart"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: "easeInOut"
            }}
            style={{
              left: heart.left,
              top: heart.top,
              position: 'absolute' // Sécurité si le CSS n'est pas encore chargé
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} className="hero-content">
        <h1 className="main-title">
          Joyeuse Saint-Valentin, <br />
          <span className="name-highlight">Juliette</span> ❤️
        </h1>
      </motion.div>

      <motion.div variants={itemVariants} className="sub-content">
        <p>Un petit mois déjà, et pourtant tellement de souvenirs.</p>
        <p className="small-text">J'ai créé ce petit espace pour nous...</p>
      </motion.div>

      {/* On utilise itemVariants pour l'entrée, mais on peut surcharger l'animation infinie */}
      <motion.div
        variants={itemVariants}
        className="scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <p>Découvre notre histoire</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Home;