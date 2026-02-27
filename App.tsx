
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { ReferralForm } from './components/ReferralForm';
import { VideoModal } from './components/VideoModal';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  HeartHandshake,
  ChevronDown,
  Gift,
  Play,
  ExternalLink
} from 'lucide-react';

const App: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  // Using the specific YouTube ID requested
  const videoId = "D_HGUCMQ6mY";
  const portraitImage = "https://user.fm/files/v2-328d024e04918d226b8026c37861552f/headshot.jpg";
  const giftOptionsUrl = "https://portal.mypromooffice.com/presentations/500203356?accessCode=7daa06e640ce48d18c92d13ebaffdf91";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Enhance UX: Focus the first input if we are scrolling to the referral form
      if (id === 'refer') {
        setTimeout(() => {
          const firstInput = el.querySelector('input');
          if (firstInput) firstInput.focus({ preventScroll: true });
        }, 800);
      }
    }
  };

  const openGiftOptions = () => {
    window.open(giftOptionsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoId={videoId} 
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-50 -z-10" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-[#a81255] text-sm font-bold mb-8 animate-bounce">
                  <Sparkles className="w-4 h-4" />
                  <span>You Refer. You Get Rewarded.</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
                  A Simple Way to Get <span className="text-[#a81255]">Rewarded</span> for Referrals
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                  If we’ve worked together, you know I value relationships, trust, and doing things the right way. 
                  I want to properly thank the people who help make my business grow.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button onClick={() => scrollToSection('refer')} className="text-lg px-8 py-4 shadow-xl">
                    Enter your referral details
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Button>
                  <Button onClick={openGiftOptions} variant="secondary" className="text-lg px-8 py-4 shadow-xl border-2 border-[#a81255]">
                    See Referral Gift Options
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center gap-8">
                <div 
                  className="relative group cursor-pointer w-full max-w-sm" 
                  onClick={() => setIsVideoOpen(true)}
                >
                  <div className="absolute -inset-4 bg-gradient-to-tr from-pink-200 to-blue-100 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl bg-slate-100">
                    <img 
                      src={portraitImage} 
                      alt="Referral team member" 
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                        <Play className="w-6 h-6 text-[#a81255] fill-[#a81255] ml-1" />
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => setIsVideoOpen(true)}
                  variant="secondary" 
                  className="px-12 py-4 shadow-xl hover:shadow-2xl hover:bg-pink-50 border-2 border-pink-100 text-lg group"
                >
                  <Play className="w-5 h-5 mr-2 text-[#a81255] fill-[#a81255] group-hover:scale-110 transition-transform" />
                  Watch now
                </Button>
              </div>
            </div>

            <div className="mt-24 flex justify-center animate-pulse">
               <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-slate-600 flex flex-col items-center gap-2 transition-colors text-center">
                 <span className="text-xs font-bold uppercase tracking-widest">Learn More</span>
                 <ChevronDown className="w-6 h-6" />
               </button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section id="about" className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900">How It Works</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Many of my best customers come from referrals, and I want to properly thank the people who help make those connections.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 h-full">
                  <h3 className="text-2xl font-bold mb-4 text-[#a81255] flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" />
                    The Philosophy
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    No pressure. No awkward follow-ups. No fine print. 
                  </p>
                  <p className="font-semibold text-slate-800 leading-relaxed">
                    When you send me a legit referral — someone who occasionally orders promotional products — you earn a reward even if they don’t end up becoming a customer.
                  </p>
                  <p className="mt-6 text-slate-500 italic text-sm">
                    All I ask is that it’s a real connection and a real opportunity.
                  </p>
                </div>

                <div className="p-8 bg-[#a81255]/5 rounded-3xl border border-[#a81255]/10 h-full">
                  <h3 className="text-2xl font-bold mb-4 text-[#a81255] flex items-center gap-2">
                    <Gift className="w-6 h-6" />
                    The Reward
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    I offer a variety of tokens of appreciation for every qualified introduction.
                  </p>
                  <p className="font-semibold text-slate-800 leading-relaxed">
                    From gift cards and coffee to custom promotional gear, you can browse some of our current favorites here.
                  </p>
                  <div className="mt-8">
                    <Button variant="secondary" className="text-sm px-6 py-2 border-2 border-[#a81255] shadow-sm" onClick={openGiftOptions}>
                      See Referral Gift Options
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="pt-12">
                <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-3 justify-center text-slate-900">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                  What Counts as a Legit Referral?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    "Works at a company that orders promotional products or apparel",
                    "Is involved in marketing, events, HR, or purchasing",
                    "You genuinely believe could benefit from my services"
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="refer" className="py-24 bg-gray-50 relative scroll-mt-20">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4 text-slate-900">Refer a Contact</h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Fill out the details below and I'll take it from there. I'll reach out to you personally to coordinate your reward.
              </p>
            </div>
            <ReferralForm />
          </div>
        </section>

        {/* Why and Limits Section */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#a81255]/20 rounded-full blur-3xl" />
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
               <div>
                 <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                   <HeartHandshake className="w-8 h-8 text-[#a81255]" />
                   Why I’m Doing This
                 </h3>
                 <p className="text-slate-300 leading-relaxed mb-6">
                   Word-of-mouth has always been the backbone of my business. This program is simply my way of saying thank you for helping my business grow — whether it turns into an order now, later, or not at all.
                 </p>
               </div>
               <div className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                 <h3 className="text-2xl font-bold mb-4 text-[#a81255]">No Limits. Ever.</h3>
                 <p className="text-slate-300 leading-relaxed mb-4">
                   Refer one person or ten. Now or months from now.
                 </p>
                 <p className="text-xl font-bold text-white">
                   If it’s a legit referral, you get rewarded. Period.
                 </p>
               </div>
             </div>

             <div className="mt-20 pt-10 border-t border-white/10 flex flex-col items-center">
               <div className="text-center">
                 <p className="text-slate-400 mb-2">And as always — thanks for the trust.</p>
                 <p className="text-2xl font-serif italic text-white">— Wade</p>
               </div>
             </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <img 
            src="https://user.fm/files/v2-5797ca378bb8d9e1c737738fd796e029/New%20Logo.png" 
            alt="Logo" 
            className="h-[44px] opacity-60 grayscale hover:grayscale-0 transition-all cursor-pointer"
          />
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Wade's Referral Program. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" className="h-10 px-4 py-0 text-xs" onClick={() => scrollToSection('refer')}>
              Submit a Referral
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
