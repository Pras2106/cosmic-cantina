import React, { useState, useEffect } from 'react';
import { X, Star, Zap, Crown, Sparkles, ChefHat, Utensils, Shield, Sword } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SpecialMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  rarity: 'legendary' | 'epic' | 'rare';
  power: string;
  origin: string;
}

interface SpecialMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SpecialMenu: React.FC<SpecialMenuProps> = ({ isOpen, onClose }) => {
  const [selectedItem, setSelectedItem] = useState<SpecialMenuItem | null>(null);

  const specialItems: SpecialMenuItem[] = [
    {
      id: 'cosmic-elixir',
      name: 'Cosmic Master\'s Clarity Elixir',
      description: 'A mystical blue beverage infused with rare cosmic crystals and nebula herbs. Enhances mental clarity and cosmic sensitivity. Served in a traditional cosmic chalice.',
      price: 299,
      image_url: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg',
      rarity: 'legendary',
      power: '+50 Focus, +30 Wisdom, +25 Cosmic Sensitivity',
      origin: 'Cosmic Temple, Andromeda'
    },
    {
      id: 'stellar-feast',
      name: 'Dark Matter Power Feast',
      description: 'An ancient cosmic delicacy prepared with stellar spices and rare meats from distant galaxies. Grants immense strength and determination to those who dare consume it.',
      price: 499,
      image_url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      rarity: 'legendary',
      power: '+100 Strength, +75 Dark Energy, +50 Intimidation',
      origin: 'Dark Matter Academy, Void Sector'
    },
    {
      id: 'quantum-crystal-cake',
      name: 'Quantum Crystal Celebration Cake',
      description: 'A shimmering dessert that sparkles with the power of quantum mechanics. Made with crystallized sugar from distant moons and infused with pure quantum essence.',
      price: 399,
      image_url: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
      rarity: 'epic',
      power: '+75 Quantum Sensitivity, +60 Joy, +40 Enlightenment',
      origin: 'Sacred Quantum City'
    },
    {
      id: 'explorer-ration',
      name: 'Space Explorer Victory Ration',
      description: 'A hearty, nutritious meal that sustained space explorers through their darkest hours. Boosts morale and endurance. Favored by freedom fighters across the universe.',
      price: 199,
      image_url: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg',
      rarity: 'rare',
      power: '+60 Endurance, +45 Morale, +35 Courage',
      origin: 'Explorer Base, Mars Colony'
    },
    {
      id: 'droid-oil-smoothie',
      name: 'Droid Maintenance Smoothie',
      description: 'A metallic-tasting smoothie that enhances technical abilities and logical thinking. Popular among mechanics and engineers. (Not actually made from droid oil, we promise!)',
      price: 149,
      image_url: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg',
      rarity: 'rare',
      power: '+45 Tech Skills, +35 Logic, +25 Problem Solving',
      origin: 'Droid Factory, Europa Station'
    },
    {
      id: 'cantina-special',
      name: 'Cosmic Cantina Mystery Special',
      description: 'The legendary drink that started countless adventures. A mysterious concoction with unknown effects, served only to the bravest souls. No questions asked.',
      price: 777,
      image_url: 'https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg',
      rarity: 'legendary',
      power: '??? Mystery Effect - Adventure Awaits ???',
      origin: 'Cosmic Cantina, Alpha Centauri'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-yellow-400 via-orange-500 to-red-500';
      case 'epic': return 'from-purple-400 via-pink-500 to-purple-600';
      case 'rare': return 'from-cosmic-400 via-cosmic-500 to-cosmic-600';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return <Crown className="w-5 h-5" />;
      case 'epic': return <Zap className="w-5 h-5" />;
      case 'rare': return <Star className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'border-yellow-400/50 shadow-yellow-400/25';
      case 'epic': return 'border-purple-400/50 shadow-purple-400/25';
      case 'rare': return 'border-cosmic-400/50 shadow-cosmic-400/25';
      default: return 'border-white/20';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Enhanced Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-7xl max-h-[95vh] overflow-y-auto glass-morphism-strong rounded-3xl p-8 custom-scrollbar"
          >
            {/* Enhanced Header */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 glass-morphism rounded-2xl flex items-center justify-center cosmic-glow">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold cosmic-text mb-2">
                    🤖 Secret Cosmic Menu
                  </h2>
                  <p className="text-gray-300 text-lg">
                    Exclusive legendary cuisine discovered by our astromech droid. These mythical foods grant special powers!
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-3 hover:bg-white/10 rounded-xl transition-colors glass-morphism"
              >
                <X className="w-7 h-7 text-gray-400" />
              </button>
            </div>

            {/* Special Items Grid */}
            <div className="responsive-grid mb-10">
              {specialItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", damping: 20 }}
                  className={`glass-card rounded-2xl overflow-hidden cursor-pointer hover-lift border-2 ${getRarityBorder(item.rarity)} shadow-lg`}
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Enhanced Image Section */}
                  <div className="relative">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-full h-56 object-cover"
                    />
                    
                    {/* Rarity Badge */}
                    <div className={`absolute top-3 right-3 bg-gradient-to-r ${getRarityColor(item.rarity)} px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg`}>
                      {getRarityIcon(item.rarity)}
                      <span className="text-sm font-bold text-white uppercase tracking-wide">{item.rarity}</span>
                    </div>
                    
                    {/* Price Badge */}
                    <div className="absolute bottom-3 left-3 glass-morphism px-3 py-2 rounded-lg border border-white/30">
                      <span className="text-yellow-400 font-bold text-lg">₹{item.price}</span>
                    </div>

                    {/* Origin Badge */}
                    <div className="absolute top-3 left-3 glass-morphism px-3 py-1 rounded-full border border-white/20">
                      <span className="text-cosmic-300 text-xs font-medium">{item.origin}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">{item.name}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">{item.description}</p>
                    
                    <div className="space-y-3">
                      <div className="text-sm text-cosmic-400 font-medium glass-morphism px-3 py-2 rounded-lg border border-white/20">
                        <Utensils className="w-4 h-4 inline mr-2" />
                        {item.power}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Sparkles className="w-4 h-4 text-yellow-400" />
                          <span className="text-xs text-yellow-400 font-medium">Cosmic Special</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          Click for details
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Fun Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center p-8 glass-morphism-strong rounded-2xl border border-white/20"
            >
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="text-3xl">🌟</span>
                <Sparkles className="w-6 h-6 text-cosmic-400" />
              </div>
              <h3 className="text-2xl font-bold cosmic-text mb-3">Easter Egg Unlocked!</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                <strong className="text-cosmic-400">Congratulations, cosmic explorer!</strong> You've discovered the secret droid menu featuring legendary cuisine from across the universe. 
                These mythical items don't actually exist in our cantina, but wouldn\'t it be amazing if they did? 
                The astromech droid will remember your discovery! 🤖✨
              </p>
              <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-400">
                <span>🚀 Adventure Unlocked</span>
                <span>•</span>
                <span>🎯 Secret Achievement</span>
                <span>•</span>
                <span>⭐ Cosmic Explorer</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Item Detail Modal */}
          <AnimatePresence>
            {selectedItem && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", damping: 25 }}
                className="absolute inset-4 bg-black/95 backdrop-blur-lg rounded-3xl p-8 flex items-center justify-center border border-white/20"
                onClick={() => setSelectedItem(null)}
              >
                <div className="max-w-lg w-full glass-morphism-strong rounded-2xl p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${getRarityColor(selectedItem.rarity)} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    {getRarityIcon(selectedItem.rarity)}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{selectedItem.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{selectedItem.description}</p>
                  
                  <div className="glass-morphism rounded-lg p-4 mb-4 border border-white/20">
                    <div className="text-cosmic-400 font-medium mb-2">
                      <Utensils className="w-4 h-4 inline mr-2" />
                      Powers Granted:
                    </div>
                    <div className="text-white">{selectedItem.power}</div>
                  </div>
                  
                  <div className="text-gray-400 text-sm mb-4">
                    <strong>Origin:</strong> {selectedItem.origin}
                  </div>
                  
                  <div className="text-3xl font-bold cosmic-text mb-6">₹{selectedItem.price}</div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert('🤖 *Beep boop* This is just a fun easter egg! These legendary items aren\'t real... or are they? Perhaps in a universe far, far away... May the cosmos be with your appetite! 🌌✨');
                    }}
                    className="ios-button px-8 py-3 rounded-xl text-white font-medium text-lg flex items-center justify-center space-x-2 mx-auto cosmic-glow"
                  >
                    <Shield className="w-5 h-5" />
                    <span>Order (Just Kidding!) 🤖</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpecialMenu;