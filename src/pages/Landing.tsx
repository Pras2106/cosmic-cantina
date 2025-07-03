import React, { useState, useEffect } from 'react';
import { Clock, Users, ChefHat, ArrowRight, Utensils, Star, Sparkles, Zap, Shield, Rocket, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen vibrant-gradient relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#8b5cf6' : '#22c55e',
              borderRadius: '50%',
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0.6,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
        
        {/* Parallax Background Layers */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
            transition: 'background 0.3s ease',
          }}
        />
      </div>

      {/* Header */}
      <header className="glass-morphism border-b border-indigo-500/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center group">
              <div className="w-12 h-12 glass-morphism rounded-xl flex items-center justify-center vibrant-glow mr-4 group-hover:scale-110 transition-transform duration-300">
                <Utensils className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold vibrant-text tracking-wider">Cosmic Cantina</span>
                <div className="text-sm text-gray-400 font-medium">Premium Digital Dining</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-indigo-400">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">Global Cuisine</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Rocket className="w-4 h-4" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 glass-morphism px-6 py-3 rounded-full border border-indigo-500/30 mb-8 hover-lift vibrant-glow">
              <Star className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-300 text-sm font-medium">Next-Generation Food Ordering</span>
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
            Skip the Queue,<br />
            <span className="vibrant-text">Order Smart</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Experience premium cuisine with cutting-edge technology. Pre-order your favorite meals 
            and skip the lunch rush with our intelligent ordering system.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-xl hover-lift">
              <Clock className="w-6 h-6 text-indigo-400" />
              <span className="text-sm font-medium text-white">Instant Ordering</span>
            </div>
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-xl hover-lift">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-sm font-medium text-white">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-xl hover-lift">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="text-sm font-medium text-white">Smart Technology</span>
            </div>
          </div>
        </div>

        {/* Role Selection Cards */}
        <div className="responsive-grid max-w-6xl mx-auto mb-16">
          {/* Student Card */}
          <Link to="/auth/student" className="group block">
            <div className="glass-card rounded-2xl p-8 hover-lift transition-all duration-500 relative overflow-hidden interactive-card gradient-border">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 glass-morphism rounded-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 vibrant-glow">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">Student Portal</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Browse premium menus, place orders instantly, and track your food status in real-time. 
                  Perfect for busy students who value quality and efficiency.
                </p>
                <div className="flex items-center text-indigo-400 font-semibold group-hover:text-indigo-300 transition-colors text-lg">
                  <Shield className="w-6 h-6 mr-3" />
                  <span>Enter Portal</span>
                  <ArrowRight className="w-6 h-6 ml-3 transform group-hover:translate-x-3 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>

          {/* Staff Card */}
          <Link to="/auth/staff" className="group block">
            <div className="glass-card rounded-2xl p-8 hover-lift transition-all duration-500 relative overflow-hidden interactive-card gradient-border">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 glass-morphism rounded-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 yellow-glow">
                  <ChefHat className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">Staff Portal</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Manage orders efficiently, update menus dynamically, and streamline operations. 
                  Advanced tools for modern food service management.
                </p>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors text-lg">
                  <Shield className="w-6 h-6 mr-3" />
                  <span>Enter Portal</span>
                  <ArrowRight className="w-6 h-6 ml-3 transform group-hover:translate-x-3 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Enhanced Features Section */}
        <div className="responsive-grid mb-16">
          {[
            {
              icon: Clock,
              title: "Time Efficiency",
              description: "Advanced ordering system eliminates waiting times during peak hours.",
              color: "green",
              delay: "0s"
            },
            {
              icon: Utensils,
              title: "Premium Cuisine",
              description: "Curated selection of high-quality dishes from expert chefs.",
              color: "indigo",
              delay: "0.2s"
            },
            {
              icon: Star,
              title: "Smart Notifications",
              description: "Real-time updates and intelligent order tracking system.",
              color: "yellow",
              delay: "0.4s"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center group" style={{ animationDelay: feature.delay }}>
              <div className={`w-16 h-16 glass-morphism rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 floating-element ${feature.color}-glow`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-indigo-300 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 glass-morphism px-8 py-4 rounded-2xl border border-indigo-500/30 hover-lift vibrant-glow">
            <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
            <p className="text-gray-300 text-lg">
              <span className="text-indigo-400 font-medium">Ready to experience the future?</span> 
              <span className="text-green-400 font-medium ml-2">Choose your portal above!</span>
            </p>
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;