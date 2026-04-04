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
  Scissors,
  ArrowLeft,
  Quote
} from 'lucide-react';

const handleImgError = (e) => {
  e.currentTarget.src = "https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&q=80&w=800";
  e.currentTarget.onerror = null;
};

// Business Details (Template)
const business = {
  name: "[Your Business Name]",
  location: "[Example City] & Surrounds",
  phone: "0400 000 000",
  email: "contact@example.com",
  services: [
    { title: "Garden Maintenance", icon: <Leaf className="w-6 h-6" />, desc: "Regular mowing, weeding, and pruning to keep your garden pristine." },
    { title: "Landscape Design", icon: <Scissors className="w-6 h-6" />, desc: "Complete backyard transformations and structural garden planning." },
    { title: "Irrigation Systems", icon: <Droplets className="w-6 h-6" />, desc: "Smart watering solutions to keep your lawn green year-round." }
  ]
};

// --- Shared Components ---

const Navbar = ({ scrolled, isMenuOpen, currentPage, navigate, toggleMenu }) => (
  <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen || currentPage !== 'home' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <button onClick={() => navigate('home')} className="flex items-center gap-2 outline-none">
        <div className="bg-green-600 p-2 rounded-lg">
          <Leaf className="text-white w-6 h-6" />
        </div>
        <span className={`text-xl font-bold tracking-tight ${(scrolled || isMenuOpen || currentPage !== 'home') ? 'text-slate-900' : 'text-white'}`}>
          {business.name}
        </span>
      </button>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        <button onClick={() => navigate('services')} className={`font-medium hover:text-green-600 transition ${(scrolled || isMenuOpen || currentPage !== 'home') ? 'text-slate-600' : 'text-white'}`}>Services</button>
        <button onClick={() => navigate('projects')} className={`font-medium hover:text-green-600 transition ${(scrolled || isMenuOpen || currentPage !== 'home') ? 'text-slate-600' : 'text-white'}`}>Projects</button>
        <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-green-700 transition shadow-lg flex items-center gap-2">
          <Phone size={18} /> Call Now
        </a>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden p-2" onClick={toggleMenu}>
        {isMenuOpen ? <X className="text-slate-900" /> : <Menu className={(scrolled || currentPage !== 'home') ? 'text-slate-900' : 'text-white'} />}
      </button>
    </div>

    {/* Mobile Menu Dropdown */}
    {isMenuOpen && (
      <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 px-4 py-6 flex flex-col gap-4 shadow-xl">
        <button onClick={() => navigate('services')} className="text-left text-lg font-semibold text-slate-600 hover:text-green-600">Services</button>
        <button onClick={() => navigate('projects')} className="text-left text-lg font-semibold text-slate-600 hover:text-green-600">Projects</button>
        <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="bg-green-600 text-white text-center py-4 rounded-xl font-bold">
          Call {business.phone}
        </a>
      </div>
    )}
  </nav>
);

const Footer = () => (
  <footer id="contact" className="py-20 bg-white scroll-mt-20 border-t border-slate-100">
    <div className="max-w-4xl mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Ready to fix your garden?</h2>
      <p className="text-slate-600 mb-8">Call or text for a free, no-obligation quote.</p>
      <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="text-4xl md:text-6xl font-black text-green-600 hover:text-green-700 transition">
        {business.phone}
      </a>
      <div className="mt-12 pt-12 border-t border-slate-100 text-slate-400 text-sm">
        © {new Date().getFullYear()} {business.name}. Built locally.
      </div>
    </div>
  </footer>
);

// --- Page Views ---

const HomePage = ({ navigate }) => (
  <>
    {/* Hero Section */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img 
        src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=2000" 
        alt="Professional Landscaped Garden" 
        className="absolute inset-0 w-full h-full object-cover"
        onError={handleImgError}
      />

      <div className="relative z-20 text-center px-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6 border border-white/20">
          <MapPin size={16} className="text-green-400" />
          <span className="text-sm font-medium uppercase tracking-widest">{business.location}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Premium Landscaping for <span className="text-green-400">[City]</span> Homes.
        </h1>
        <p className="text-xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          From regular maintenance to complete garden redesigns. We bring professional expertise to your backyard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-2xl">
            Get a Free Quote <ArrowRight size={20} />
          </a>
          <button onClick={() => navigate('projects')} className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition flex items-center justify-center gap-2">
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
    <section id="services" className="py-24 max-w-7xl mx-auto px-4 scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Services</h2>
        <div className="h-1.5 w-24 bg-green-600 mx-auto rounded-full" />
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
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
      <div className="text-center">
        <button onClick={() => navigate('services')} className="text-green-600 font-bold hover:text-green-700 flex items-center gap-2 justify-center mx-auto transition-all hover:gap-3">
          View full service details <ArrowRight size={20} />
        </button>
      </div>
    </section>

    {/* Social Proof / Reviews */}
    <section id="projects" className="bg-slate-900 py-24 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
          <div>
            <div className="flex gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
            </div>
            <h2 className="text-4xl font-bold mb-6 italic">"The best landscaping service in the area. My garden has never looked better!"</h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center font-bold">JD</div>
              <div>
                <p className="font-bold">John Doe</p>
                <p className="text-slate-400 text-sm">[Example City] Resident</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=600" className="rounded-2xl h-48 w-full object-cover shadow-2xl" alt="Garden 1" onError={handleImgError} />
            <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600" className="rounded-2xl h-48 w-full object-cover mt-8 shadow-2xl" alt="Garden 2" onError={handleImgError} />
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/10">
          <button onClick={() => navigate('projects')} className="text-green-400 font-bold hover:text-green-300 flex items-center gap-2 justify-center mx-auto transition-all hover:gap-3">
            Explore our recent transformations <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  </>
);

const ServicesPage = ({ navigate }) => (
  <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-4">
      <button onClick={() => navigate('home')} className="flex items-center gap-2 text-green-600 font-bold mb-8 hover:gap-3 transition-all">
        <ArrowLeft size={20} /> Back to Home
      </button>
      <h1 className="text-4xl md:text-6xl font-black mb-6">Our Services</h1>
      <p className="text-xl text-slate-600 max-w-2xl mb-16">Tailored landscaping solutions designed to thrive in the specific climate and soil conditions of our local area.</p>
      
      <div className="grid gap-12">
        {[
          { 
            title: "Garden Maintenance", 
            icon: <Leaf className="w-10 h-10" />, 
            image: "https://images.unsplash.com/photo-1558905758-2da9c76a0d54?auto=format&fit=crop&q=80&w=800",
            items: ["Hedge Trimming", "Lawn Mowing & Edging", "Weed Control", "Pruning & Mulching"]
          },
          { 
            title: "Landscape Construction", 
            icon: <Scissors className="w-10 h-10" />, 
            image: "https://images.unsplash.com/photo-1590011831835-51d020d91240?auto=format&fit=crop&q=80&w=800",
            items: ["Retaining Walls", "Paving & Steppers", "Turf Installation", "Decking"]
          },
          { 
            title: "Irrigation & Lighting", 
            icon: <Droplets className="w-10 h-10" />, 
            image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=800",
            items: ["Smart Watering Systems", "Outdoor Accent Lighting", "Drip Irrigation", "Drainage Solutions"]
          }
        ].map((service, idx) => (
          <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img src={service.image} alt={service.title} className="h-full w-full object-cover" onError={handleImgError} />
            </div>
            <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
              <div className="text-green-600 mb-4">{service.icon}</div>
              <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
              <div className="grid grid-cols-2 gap-4">
                {service.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle className="text-green-500 w-5 h-5" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsPage = ({ navigate }) => (
  <div className="pt-32 pb-24 bg-slate-900 text-white min-h-screen">
    <div className="max-w-7xl mx-auto px-4">
      <button onClick={() => navigate('home')} className="flex items-center gap-2 text-green-400 font-bold mb-8 hover:gap-3 transition-all">
        <ArrowLeft size={20} /> Back to Home
      </button>
      <h1 className="text-4xl md:text-6xl font-black mb-16">Recent Transformations</h1>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        {[
          "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=2000"
        ].map((img, i) => (
          <div key={i} className="group relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
            <img src={img} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="Work" onError={handleImgError} />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="font-bold text-lg">Project Transformation #{i+1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Reviews Section */}
      <div className="border-t border-white/10 pt-24">
        <h2 className="text-3xl font-bold mb-12 text-center">What our clients say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: "Jane Doe", loc: "Example City", text: "The team redesigned our entire backyard. The attention to detail in the paving was incredible. Highly recommend for any homeowner." },
            { name: "John Smith", loc: "Example Suburb", text: "Reliable, clean, and professional. They keep our garden looking like a botanical park week in, week out." },
            { name: "Alice Johnson", loc: "Example Area", text: "We had a complex irrigation problem that three other companies couldn't fix. The team solved it in two hours." },
            { name: "Bob Wilson", loc: "Example City", text: "Best value for money. They aren't the cheapest, but you definitely get what you pay for. Exceptional quality." }
          ].map((r, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 relative">
              <Quote className="absolute top-6 right-8 text-green-500/20 w-12 h-12" />
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, star) => <Star key={star} fill="currentColor" size={16} />)}
              </div>
              <p className="text-lg text-slate-300 italic mb-6 leading-relaxed">"{r.text}"</p>
              <div className="font-bold">{r.name}</div>
              <div className="text-sm text-green-400 font-semibold">{r.loc} Resident</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0); // Reset scroll on page change
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      <Navbar 
        scrolled={scrolled} 
        isMenuOpen={isMenuOpen} 
        currentPage={currentPage} 
        navigate={navigate} 
        toggleMenu={toggleMenu} 
      />
      
      {currentPage === 'home' && <HomePage navigate={navigate} />}
      {currentPage === 'services' && <ServicesPage navigate={navigate} />}
      {currentPage === 'projects' && <ProjectsPage navigate={navigate} />}
      
      <Footer />
    </div>
  );
};

export default App;