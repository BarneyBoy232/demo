import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  CheckCircle, 
  Clock, 
  Star, 
  ArrowRight, 
  Menu, 
  X,
  Leaf,
  Droplets,
  Scissors
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Business Details (Easily swappable for new clients)
  const business = {
    name: "Green Horizon Landscaping",
    location: "Wahroonga & North Shore",
    phone: "0412 345 678",
    email: "contact@greenhorizon.com.au",
    services: [
      { title: "Garden Maintenance", icon: <Leaf className="w-6 h-6" />, desc: "Regular mowing, weeding, and pruning to keep your garden pristine." },
      { title: "Landscape Design", icon: <Scissors className="w-6 h-6" />, desc: "Complete backyard transformations and structural garden planning." },
      { title: "Irrigation Systems", icon: <Droplets className="w-6 h-6" />, desc: "Smart watering solutions to keep your lawn green year-round." }
    ]
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              {business.name}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className={`font-medium hover:text-green-600 transition ${scrolled ? 'text-slate-600' : 'text-white'}`}>Services</a>
            <a href="#projects" className={`font-medium hover:text-green-600 transition ${scrolled ? 'text-slate-600' : 'text-white'}`}>Projects</a>
            <a href={`tel:${business.phone}`} className="bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-green-700 transition shadow-lg flex items-center gap-2">
              <Phone size={18} /> Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Dark overlay to make text pop */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        {/* Main Hero Image */}
        <img 
          src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=2000" 
          alt="Professional Landscaped Garden" 
          className="absolute inset-0 w-full h-full object-cover scale-100"
        />

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6 border border-white/20">
            <MapPin size={16} className="text-green-400" />
            <span className="text-sm font-medium uppercase tracking-widest">{business.location}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Premium Landscaping for <span className="text-green-400">Wahroonga</span> Homes.
          </h1>
          <p className="text-xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            From regular maintenance to complete garden redesigns. We bring professional expertise to your backyard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-2xl">
              Get a Free Quote <ArrowRight size={20} />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition flex items-center justify-center gap-2">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-20 text-slate-400 font-bold uppercase tracking-widest text-sm">
          <div className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Fully Insured</div>
          <div className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Local Family Owned</div>
          <div className="flex items-center gap-2"><CheckCircle className="text-green-500" /> 10+ Years Exp.</div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Services</h2>
          <div className="h-1.5 w-24 bg-green-600 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {business.services.map((s, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="bg-green-50 text-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof / Reviews */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
              </div>
              <h2 className="text-4xl font-bold mb-6 italic">"The best landscaping service in the North Shore. My garden has never looked better!"</h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center font-bold">JD</div>
                <div>
                  <p className="font-bold">John Doe</p>
                  <p className="text-slate-400 text-sm">Wahroonga Resident</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=600" className="rounded-2xl h-48 w-full object-cover shadow-2xl" alt="Garden 1" />
              <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600" className="rounded-2xl h-48 w-full object-cover mt-8 shadow-2xl" alt="Garden 2" />
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer / Contact */}
      <footer className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to fix your garden?</h2>
          <p className="text-slate-600 mb-8">Call or text for a free, no-obligation quote.</p>
          <a href={`tel:${business.phone}`} className="text-4xl md:text-6xl font-black text-green-600 hover:text-green-700 transition">
            {business.phone}
          </a>
          <div className="mt-12 pt-12 border-t border-slate-100 text-slate-400 text-sm">
            © 2026 {business.name}. Built with speed in Wahroonga.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;