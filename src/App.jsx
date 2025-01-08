import { Helmet } from "react-helmet-async";
import { FaTelegram, FaDiscord, FaGithub } from 'react-icons/fa';
import { FaXTwitter, FaDollarSign, FaUsers, FaUserGroup, FaCoins } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import heroImage from './assets/musasi-rep-pic.png';
import logo from './assets/musasi-652-logo.png';

function LiveStat({ icon: Icon, label, value, prefix = "" }) {
  return (
    <div className="bg-game-accent/50 p-6 rounded-lg backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="text-game-primary text-2xl" />
        <h4 className="font-pixel text-sm">{label}</h4>
      </div>
      <p className="font-game text-3xl text-game-primary">
        {prefix}{value}
      </p>
    </div>
  );
}

function App() {
  const [totalPlayers, setTotalPlayers] = useState(15420);
  const [onlinePlayers] = useState(1337);
  const [tokenPrice] = useState(0.0042);
  const [holders] = useState(2891);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalPlayers(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePlayClick = () => {
    window.location.href = 'https://play.musasi.com';
  };

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
        <title>Musasi - Epic Web3 Gaming</title>
      </Helmet>

      <div className="min-h-screen bg-game-secondary">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Musasi Logo" className="w-12 h-12" />
              <h1 className="font-pixel text-2xl text-game-primary glow">MUSASI</h1>
            </div>
            <nav className="hidden md:flex gap-6 font-game text-xl">
              <a href="#whitepaper" className="hover:text-game-primary transition-colors">Whitepaper</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <motion.h2 
                className="font-pixel text-4xl md:text-6xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Enter the World of
                <span className="text-game-primary block mt-2 glow">MUSASI</span>
              </motion.h2>
              <p className="font-game text-xl mb-8">
                Embark on an epic web3 gaming adventure where strategy meets blockchain technology.
              </p>
              <div className="flex justify-center md:justify-start">
                <motion.button
                  onClick={handlePlayClick}
                  className="bg-game-primary text-white font-pixel px-8 py-4 rounded-lg text-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  PLAY NOW
                </motion.button>
              </div>
            </div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src={heroImage} alt="Musasi Game" className="rounded-lg shadow-2xl" />
            </motion.div>
          </div>

          {/* Live Stats Section */}
          <div className="mt-20">
            <h3 className="font-pixel text-2xl text-center mb-8">Live Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <LiveStat 
                icon={FaUsers} 
                label="Total Players" 
                value={totalPlayers.toLocaleString()} 
              />
              <LiveStat 
                icon={FaUserGroup} 
                label="Online Players" 
                value={onlinePlayers.toLocaleString()} 
              />
              <LiveStat 
                icon={FaCoins} 
                label="$MUSASI Price" 
                value={tokenPrice.toFixed(4)} 
                prefix="$" 
              />
              <LiveStat 
                icon={FaUsers} 
                label="$MUSASI Holders" 
                value={holders.toLocaleString()} 
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-game-accent/80 backdrop-blur-md mt-20 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center md:text-left">
                <img src={logo} alt="Musasi Logo" className="w-12 h-12 mx-auto md:mx-0 mb-4" />
                <p className="font-pixel text-sm text-gray-300 max-w-xs mx-auto md:mx-0">
                  Join the revolution of web3 gaming with Musasi. Experience the future of gaming today.
                </p>
              </div>

              <div className="text-center md:text-right">
                <h3 className="font-game text-xl mb-4">Join Our Community</h3>
                <div className="flex gap-6 justify-center md:justify-end">
                  <a href="https://x.com/musasi" target="_blank" rel="noopener noreferrer" 
                    className="text-2xl hover:text-game-primary transition-colors">
                    <FaXTwitter />
                  </a>
                  <a href="https://t.me/musasi" target="_blank" rel="noopener noreferrer"
                    className="text-2xl hover:text-game-primary transition-colors">
                    <FaTelegram />
                  </a>
                  <a href="https://discord.gg/musasi" target="_blank" rel="noopener noreferrer"
                    className="text-2xl hover:text-game-primary transition-colors">
                    <FaDiscord />
                  </a>
                  <a href="https://github.com/musasi" target="_blank" rel="noopener noreferrer"
                    className="text-2xl hover:text-game-primary transition-colors">
                    <FaGithub />
                  </a>
                  <a href="https://dexscreener.com/musasi" target="_blank" rel="noopener noreferrer"
                    className="text-2xl hover:text-game-primary transition-colors">
                    <FaDollarSign />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12 pt-8 border-t border-gray-700">
              <p className="font-pixel text-sm text-gray-400">
                © 2024 Musasi. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;