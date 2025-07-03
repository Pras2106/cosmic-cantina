import React, { useState } from 'react';
import { Clock, Users, ChefHat, ArrowRight, Utensils, Star, Sparkles, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeJsRobot from '../components/Common/ThreeJsRobot';
import SpecialMenu from '../components/Common/SpecialMenu';

const Landing: React.FC = () => {
  const [isSpecialMenuOpen, setIsSpecialMenuOpen] = useState(false);
  const [droidClicks, setDroidClicks] = useState(0);
  const [showDroidHint, setShowDroidHint] = useState(true);

  const handleRobotClick = () => {
    setDroidClicks(prev => prev + 1);
    setShowDroidHint(false);
    
    if (droidClicks === 0) {
      alert('🤖 *Beep boop* Greetings, cosmic explorer! You\'ve discovered me! Click me 2 more times to unlock the secret Cosmic Cantina menu!');
    } else if (droidClicks === 1) {
      alert('🤖 *Excited droid chirping* Excellent! Your cosmic connection grows stronger! One more click to access the legendary recipes!');
    } else if (droidClicks === 2) {
      alert('🤖 *Triumphant beeping* ACCESS GRANTED! Welcome to the hidden Cosmic Cantina! These legendary recipes are from across the universe!');
      setIsSpecialMenuOpen(true);
    } else {
      setIsSpecialMenuOpen(true);
    }
  };

  return (
    <div className="min-h-screen cosmic-gradient relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-3 h-3 bg-cosmic-400 rounded-full animate-pulse cosmic-glow"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-cosmic-300 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Header */}
      <header className="glass-morphism border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 glass-morphism rounded-xl flex items-center justify-center cosmic-glow mr-4">
                <Utensils className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold cosmic-text tracking-wider">Cosmic Cantina</span>
                <div className="text-sm text-gray-400 font-medium">Premium Cosmic Cuisine</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full border border-white/20 mb-6 hover-lift">
              <Star className="w-4 h-4 text-cosmic-400" />
              <span className="text-cosmic-300 text-sm font-medium">Premium Cosmic Dining Experience</span>
              <Sparkles className="w-4 h-4 text-cosmic-400" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
            Skip the Queue,<br />
            <span className="cosmic-text">Order Ahead</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Experience the finest cuisine from across the cosmos. Pre-order your favorite meals 
            and skip the lunch rush. Pick up when ready, no waiting in line required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <div className="flex items-center space-x-2 text-cosmic-400 glass-card px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">Save Time</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center space-x-2 text-green-400 glass-card px-4 py-2 rounded-lg">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Premium Quality</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center space-x-2 text-yellow-400 glass-card px-4 py-2 rounded-lg">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Cosmic Flavors</span>
            </div>
          </div>
        </div>

        {/* Role Selection Cards */}
        <div className="responsive-grid max-w-5xl mx-auto mb-12 sm:mb-20">
          {/* Student Card */}
          <Link to="/auth/student" className="group">
            <div className="glass-card rounded-2xl p-6 sm:p-8 hover-lift transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cosmic-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 glass-morphism rounded-2xl mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300 cosmic-glow">
                  <Users className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Student Portal</h3>
                <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                  Browse premium cosmic menus, place orders, and track your food status. 
                  Perfect for busy students who want to save time and enjoy quality meals.
                </p>
                <div className="flex items-center text-cosmic-400 font-semibold group-hover:text-cosmic-300 transition-colors text-base sm:text-lg">
                  <Shield className="w-5 sm:w-6 h-5 sm:h-6 mr-3" />
                  <span>Enter Portal</span>
                  <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>

          {/* Staff Card */}
          <Link to="/auth/staff" className="group">
            <div className="glass-card rounded-2xl p-6 sm:p-8 hover-lift transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 glass-morphism rounded-2xl mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)' }}>
                  <ChefHat className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Cantina Staff</h3>
                <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                  Manage orders, update cosmic menus, and streamline your cantina operations. 
                  Reduce wait times and improve customer satisfaction across the universe.
                </p>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors text-base sm:text-lg">
                  <Shield className="w-5 sm:w-6 h-5 sm:h-6 mr-3" />
                  <span>Enter Portal</span>
                  <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Enhanced Features Section */}
        <div className="responsive-grid mb-12 sm:mb-16">
          <div className="text-center group">
            <div className="w-14 sm:w-16 h-14 sm:h-16 glass-morphism rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform float" style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)' }}>
              <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Time Efficiency</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">No more waiting in long queues during busy cosmic lunch hours. Order ahead and pick up instantly.</p>
          </div>
          <div className="text-center group">
            <div className="w-14 sm:w-16 h-14 sm:h-16 glass-morphism rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform cosmic-glow float" style={{ animationDelay: '0.5s' }}>
              <Utensils className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Premium Cuisine</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">Browse premium cosmic menus and place orders from your device. Quality food from across the universe.</p>
          </div>
          <div className="text-center group">
            <div className="w-14 sm:w-16 h-14 sm:h-16 glass-morphism rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform float" style={{ animationDelay: '1s', boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)' }}>
              <Star className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Real-time Updates</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">Get instant notifications when your cosmic feast is ready for pickup. Never miss your order.</p>
          </div>
        </div>

        {/* Enhanced Easter Egg Hint */}
        {showDroidHint && droidClicks === 0 && (
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 glass-morphism px-4 sm:px-6 py-3 rounded-full border border-white/20 hover-lift">
              <Sparkles className="w-4 h-4 text-cosmic-400 animate-pulse" />
              <p className="text-gray-400 text-sm">
                <span className="text-cosmic-400 font-medium">Psst...</span> A friendly cosmic droid is hiding somewhere on this page... 
                <span className="text-green-400 font-medium">May the cosmos guide you to find it!</span>
              </p>
              <Sparkles className="w-4 h-4 text-cosmic-400 animate-pulse" />
            </div>
          </div>
        )}

        {/* Progress indicator for droid discovery */}
        {droidClicks > 0 && droidClicks < 3 && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 glass-morphism px-4 sm:px-6 py-3 rounded-full border border-green-400/30">
              <Zap className="w-4 h-4 text-green-400" />
              <p className="text-gray-300 text-sm">
                <span className="text-green-400 font-medium">Cosmic Connection:</span> {droidClicks}/3 
                <span className="text-cosmic-400 ml-2">Keep clicking the droid!</span>
              </p>
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full ${i < droidClicks ? 'bg-green-400' : 'bg-gray-600'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Three.js Robot (Easter Egg) */}
      <ThreeJsRobot onRobotClick={handleRobotClick} />

      {/* Special Menu Modal */}
      <SpecialMenu 
        isOpen={isSpecialMenuOpen} 
        onClose={() => setIsSpecialMenuOpen(false)} 
      />
    </div>
  );
};

export default Landing;