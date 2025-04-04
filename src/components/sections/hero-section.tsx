"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

// Video Player component
const VideoPlayer = ({ src }: { src: string }) => (
  <video 
    className="w-full h-full object-cover rounded-xl"
    src={src}
    autoPlay
    loop
    muted
    playsInline
  />
);

export function HeroSection() {
  // 添加状态来控制粒子是否显示
  const [isClient, setIsClient] = useState(false);
  
  // 在客户端渲染后设置状态
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/30 to-black z-0">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
      
        {/* Animated particles - 只在客户端渲染 */}
        {isClient && Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              DreamActor-M1
            </span>
          </h1>
          
          <h2 className="text-xl md:text-3xl text-gray-300 mb-6">
            Holistic, Expressive and Robust Human Image Animation
            <br />
            <span className="text-blue-400">with Hybrid Guidance</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            A cutting-edge DiT-based human animation framework with hybrid guidance for 
            fine-grained holistic controllability, multi-scale adaptability, and 
            long-term temporal coherence.
          </p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/#method">
                Explore Method
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-white hover:bg-purple-600/20 bg-gray-900/50 backdrop-blur-sm"
              asChild
            >
              <Link href="https://arxiv.org/abs/2504.01724" target="_blank" rel="noopener noreferrer">
                Read Paper
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Floating Animation Example */}
        <motion.div
          className="mt-16 relative max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-purple-500/20">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-sm"></div>
            <div className="aspect-video w-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 flex items-center justify-center rounded-xl relative z-10">
              {/* Video player */}
              <VideoPlayer src="/static/2.mov" />
              
              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-center">
                <h3 className="text-2xl font-bold text-white mb-2">DreamActor-M1 Demo</h3>
                <p className="text-gray-300">Human Animation with Hybrid Guidance</p>
              </div>
            </div>
          </div>
          
          {/* Tech Specs Floating Tags */}
          <motion.div 
            className="absolute -top-4 -right-4 bg-blue-900/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-blue-400/30"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            DiT-based Framework
          </motion.div>
          
          <motion.div 
            className="absolute bottom-4 -left-4 bg-purple-900/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-purple-400/30"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            Hybrid Control Signals
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </motion.div>
    </section>
  );
} 