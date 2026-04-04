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

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'services', 'projects'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const business = {
    name: "Green Horizon Landscaping",
    location: "Wahroonga & North Shore",
    phone: "0412 345 678",
    email: "contact@greenhorizon.com.au"
  };

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

  // --- Shared Components ---

  const Navbar = () => (
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

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => navigate('services')} className={`font-medium hover:text-green-600 transition ${(scrolled || isMenuOpen || currentPage !== 'home') ? 'text-slate-600' : 'text-white'}`}>Services</button>
          <button onClick={() => navigate('projects')} className={`font-medium hover:text-green-600 transition ${(scrolled || isMenuOpen || currentPage !== 'home') ? 'text-slate-600' : 'text-white'}`}>Projects</button>
          <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-green-700 transition shadow-lg flex items-center gap-2">
            <Phone size={18} /> Call Now
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="text-slate-900" /> : <Menu className={(scrolled || currentPage !== 'home') ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 px-4 py-6 flex flex-col gap-4 shadow-xl">
          <button onClick={() => navigate('services')} className="text-left text-lg font-semibold text-slate-600">Services</button>
          <button onClick={() => navigate('projects')} className="text-left text-lg font-semibold text-slate-600">Projects</button>
          <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="bg-green-600 text-white text-center py-4 rounded-xl font-bold">
            Call {business.phone}
          </a>
        </div>
      )}
    </nav>
  );

  const Footer = () => (
    <footer className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Ready to transform your garden?</h2>
        <p className="text-slate-600 mb-8">Serving Wahroonga and the North Shore for over a decade.</p>
        <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="text-4xl md:text-6xl font-black text-green-600 hover:text-green-700 transition">
          {business.phone}
        </a>
        <div className="mt-12 flex justify-center gap-6 text-sm font-semibold text-slate-400">
          <button onClick={() => navigate('home')}>Home</button>
          <button onClick={() => navigate('services')}>Services</button>
          <button onClick={() => navigate('projects')}>Projects</button>
        </div>
        <div className="mt-8 text-slate-400 text-xs uppercase tracking-widest">
          © 2026 {business.name}.
        </div>
      </div>
    </footer>
  );

  // --- Page Views ---

  const HomePage = () => (
    <>
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=2000" 
          alt="Garden" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6 border border-white/20">
            <MapPin size={16} className="text-green-400" />
            <span className="text-sm font-medium uppercase tracking-widest">{business.location}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Premium Landscaping for <span className="text-green-400">Wahroonga</span> Homes.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('services')} className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-2xl">
              Our Services <ArrowRight size={20} />
            </button>
            <button onClick={() => navigate('projects')} className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition">
              View Recent Projects
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16">Why North Shore families choose us</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-green-600">
              <Star fill="currentColor" />
            </div>
            <h3 className="text-xl font-bold">5-Star Local Reputation</h3>
            <p className="text-slate-600">Trusted by hundreds of homeowners across Wahroonga and Turramurra.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-green-600">
              <CheckCircle />
            </div>
            <h3 className="text-xl font-bold">Fully Insured & Licensed</h3>
            <p className="text-slate-600">Peace of mind with comprehensive coverage for every project size.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-green-600">
              <Clock />
            </div>
            <h3 className="text-xl font-bold">Reliable Scheduling</h3>
            <p className="text-slate-600">We turn up when we say we will. No excuses, just results.</p>
          </div>
        </div>
      </section>
    </>
  );

  const ServicesPage = () => (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <button onClick={() => navigate('home')} className="flex items-center gap-2 text-green-600 font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> Back to Home
        </button>
        <h1 className="text-4xl md:text-6xl font-black mb-6">Our Services</h1>
        <p className="text-xl text-slate-600 max-w-2xl mb-16">Tailored landscaping solutions designed to thrive in the specific climate and soil conditions of Sydney's North Shore.</p>
        
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
                <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
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

  const ProjectsPage = () => (
    <div className="pt-32 pb-24 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <button onClick={() => navigate('home')} className="flex items-center gap-2 text-green-400 font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> Back to Home
        </button>
        <h1 className="text-4xl md:text-6xl font-black mb-16">Recent Transformations</h1>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {[
            "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1584473457406-623048ff437e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1533467686143-bb9f993f416a?auto=format&fit=crop&q=80&w=800"
          ].map((img, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
              <img src={img} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="Work" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="font-bold text-lg">Wahroonga Transformation #{i+1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Reviews Section */}
        <div className="border-t border-white/10 pt-24">
          <h2 className="text-3xl font-bold mb-12 text-center">What our North Shore clients say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Sarah Jenkins", loc: "Wahroonga", text: "The team redesigned our entire backyard. The attention to detail in the paving was incredible. Highly recommend for any North Shore homeowner." },
              { name: "David Thompson", loc: "Turramurra", text: "Reliable, clean, and professional. They keep our garden looking like a botanical park week in, week out." },
              { name: "Michelle Wu", loc: "Pymble", text: "We had a complex irrigation problem that three other companies couldn't fix. Green Horizon solved it in two hours." },
              { name: "Peter Richards", loc: "St Ives", text: "Best value for money. They aren't the cheapest, but you definitely get what you pay for. Exceptional quality." }
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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'projects' && <ProjectsPage />}
      
      <Footer />
    </div>
  );
};

export default App;