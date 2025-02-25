import { useState } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const handleBuyNow = () => {
    window.open('YOUR_GOOGLE_FORM_URL_HERE', '_blank');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-effect z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl font-bold gradient-text"
            >
              Drass Diaries
            </motion.h1>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 focus:outline-none hover:bg-white/5 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 lg:space-x-12 text-sm tracking-wide">
              <a href="#about" className="nav-link hover:text-accent transition-colors duration-300">ABOUT</a>
              <a href="#author" className="nav-link hover:text-accent transition-colors duration-300">AUTHOR</a>
              <a href="#journey" className="nav-link hover:text-accent transition-colors duration-300">JOURNEY</a>
              <a href="#pricing" className="nav-link hover:text-accent transition-colors duration-300">PRICING</a>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden mt-4"
              >
                <div className="flex flex-col space-y-4 py-4">
                  <a 
                    href="#about" 
                    className="nav-link hover:text-accent transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ABOUT
                  </a>
                  <a 
                    href="#author" 
                    className="nav-link hover:text-accent transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AUTHOR
                  </a>
                  <a 
                    href="#journey" 
                    className="nav-link hover:text-accent transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    JOURNEY
                  </a>
                  <a 
                    href="#pricing" 
                    className="nav-link hover:text-accent transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PRICING
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id= "about"className="pt-24 sm:pt-32 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-shadow">
                DRASS <span className="gradient-text">DIARIES</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-8 sm:mb-12 text-justify">
                Drass Diaries is a raw, evocative travel memoir that transports you to the heart of one of the coldest inhabited places on Earth. Blending breathtaking landscapes, shared laughter, and moments of deep introspection, this book captures the transformative power of adventure and the magic of manifestation. Follow a diverse group of explorers as they navigate frozen paths, embrace unexpected detours, and forge unbreakable bonds—all under the inspiring guidance of Raunaq Bhaiya. More than just a travelogue, 'Drass Diaries' invites you to experience the Himalayas, where dreams manifest into unforgettable journeys and every step echoes with the promise of possibility.
              </p>
              <motion.button 
                onClick={handleBuyNow}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <i className="bi bi-play-circle"></i> Watch Video Here
              </motion.button>
              
            </motion.div>
            
            <div className="w-full max-w-lg mx-auto">
              <motion.div 
                className="animate-float"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Slider {...sliderSettings}>
                  <div className="px-4">
                    <img src="/src/assets/1.png" alt="Book mockup 1" className="w-full rounded-2xl shadow-2xl" />
                  </div>
                  <div className="px-4">
                    <img src="src/assets/2.png" alt="Book mockup 2" className="w-full rounded-2xl shadow-2xl" />
                  </div>
                  <div className="px-4">
                    <img src="/src/assets/3.png" alt="Book mockup 3" className="w-full rounded-2xl shadow-2xl" />
                  </div>
                </Slider>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Author Section */}
      <section id="author" className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="/src/assets/IMG_9602.png" 
                alt="Author" 
                className="relative rounded-full w-64 h-64 sm:w-96 sm:h-96 object-cover mx-auto border-4 border-accent/30 glow"
              />
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-shadow">
    
                <span className="gradient-text">About Author</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-8 text-justify">
                Nirav is a B.Tech computer science student with a passion for travel and storytelling. He runs a YouTube channel where he shares travel vlogs and short films like INCIDENT and FAN OFF, capturing moments that inspire and connect.

His love for exploration is deeply rooted in family and cinematic influences. Inspired by his grandfather, Devji Dada—who dreamed of traversing India and authored “Bharat Bhraman” and by Bunny from Yeh Jawaani Hai Deewani, Nirav’s wanderlust has always been more than just a hobby.

A life-changing opportunity to journey with Raunaq Bhai to the remote, frigid landscapes of Drass solidified his calling. This book is a heartfelt chronicle of that unforgettable adventure, inviting readers to experience the beauty and challenges of travel through his eyes.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-4 rounded-xl"
                >
                  <p className="text-3xl sm:text-4xl font-bold gradient-text">2.8k+</p>
                  <p className="text-gray-400">YouTube Subscribers</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-4 rounded-xl"
                >
                  <p className="text-3xl sm:text-4xl font-bold gradient-text">1.1M+</p>
                  <p className="text-gray-400">YouTube Views</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-4 rounded-xl"
                >
                  <p className="text-3xl sm:text-4xl font-bold gradient-text">200+</p>
                  <p className="text-gray-400">Photographs</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Virtual Journey Section */}
      <section id="journey" className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-shadow">HOW I WROTE <span className="gradient-text">DRASS DIARIES</span></h2>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-accent/10 blur-3xl" />
            <iframe
              className="relative w-full h-[300px] sm:h-[600px] rounded-2xl shadow-2xl"
              src="https://www.youtube.com/embed/YoUgY3XrQnY"
              title="Virtual Journey"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-shadow">Choose Your Format</h2>
            <p className="text-lg sm:text-xl text-gray-400">Select the perfect way to experience this extraordinary journey.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="price-card glass-effect p-8 sm:p-12 rounded-2xl border border-white/10 card-hover"
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Physical Copy</h3>
              <p className="text-gray-400 mb-8">Experience the journey through traditional pages</p>
              <p className="text-4xl sm:text-5xl font-bold gradient-text mb-8">₹789</p>
              <ul className="text-gray-300 space-y-4 mb-8 sm:mb-12">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Premium quality print
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Exclusive photographs
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Hardcover edition
                </li>
              </ul>
              <motion.button 
                onClick={handleBuyNow}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent text-black py-3 sm:py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Physical Copy
              </motion.button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="price-card glass-effect p-8 sm:p-12 rounded-2xl border border-white/10 card-hover"
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">E-Book</h3>
              <p className="text-gray-400 mb-8">Digital adventure at your fingertips</p>
              <p className="text-4xl sm:text-5xl font-bold gradient-text mb-8">₹89</p>
              <ul className="text-gray-300 space-y-4 mb-8 sm:mb-12">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Instant delivery
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Interactive content
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Read anywhere
                </li>
              </ul>
              <motion.button 
                onClick={handleBuyNow}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent text-black py-3 sm:py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Digital Copy
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Buy Now Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleBuyNow}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-accent text-black px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-lg hover:bg-yellow-400 transition-colors z-50 flex items-center gap-2 buy-now-button"
      >
        <span>Buy Now</span>
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </motion.button>

      {/* Footer */}
      <footer className="py-6 sm:py-8 text-center text-gray-400 border-t border-white/10">
        <p className="text-sm">© {new Date().getFullYear()} Drass Diaries. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;