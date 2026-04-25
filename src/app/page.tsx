import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 lg:p-24 bg-gradient-to-br from-gray-900 via-green-950 to-black text-center relative overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=2000&q=50')] opacity-10 bg-cover bg-center" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/90" />

      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-200">
          Berlin Snoww Budd
        </h1>
        
        <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl font-light">
          Your #1 automated Telegram delivery bot for <span className="text-white font-semibold">top-shelf buds</span>, <span className="text-white font-semibold">flakey premium</span>, and <span className="text-white font-semibold">smokey imports</span> in Berlin.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <span className="text-green-400">⚡</span>
            <span className="text-sm font-medium">Express Delivery</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <span className="text-green-400">🔒</span>
            <span className="text-sm font-medium">Discreet Packaging</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <span className="text-green-400">🌿</span>
            <span className="text-sm font-medium">Premium Quality</span>
          </div>
        </div>

        <Link 
          href="https://t.me/Berlin_weedyBot?start=website_promo"
          target="_blank"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-green-400 border border-transparent rounded-full hover:bg-green-300 hover:scale-105 shadow-[0_0_40px_rgba(74,222,128,0.4)]"
        >
          Open Telegram Bot
          <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </Link>
        
        <p className="mt-6 text-sm text-gray-400">
          Click to launch the bot. 100% secure & private.
        </p>

      </div>
      
      {/* Decorative Blur */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
    </main>
  );
}
