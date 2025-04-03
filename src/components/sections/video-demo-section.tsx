"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

// Define video item type
interface VideoItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

// Define video categories type
interface VideoCategories {
  overview: VideoItem[];
  diversity: VideoItem[];
  control: VideoItem[];
  audio: VideoItem[];
  portrait: VideoItem[];
  [key: string]: VideoItem[]; // Index signature to allow string indexing
}

export function VideoDemoSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Video demonstration categories
  const videoCategories = [
    { id: "overview", name: "Overview" },
    { id: "diversity", name: "Diversity" },
    { id: "control", name: "Controllability" },
    { id: "audio", name: "Audio-Driven" },
    { id: "portrait", name: "Portrait Animation" }
  ];

  // Videos for each category
  const videos: VideoCategories = {
    overview: [
      {
        id: "overview-1",
        title: "DreamActor-M1 Method Overview",
        description: "Showcases the overall workflow and core technical components of DreamActor-M1",
        videoUrl: "https://dreamactor-m1.com/videos/method-overview.mp4",
        thumbnailUrl: "/video-thumbnails/method-overview.jpg"
      },
      {
        id: "overview-2",
        title: "Complete Demonstration",
        description: "DreamActor-M1 in various scenarios with comprehensive demonstration",
        videoUrl: "https://dreamactor-m1.com/videos/full-demo.mp4",
        thumbnailUrl: "/video-thumbnails/full-demo.jpg"
      }
    ],
    diversity: [
      {
        id: "diversity-1",
        title: "Diverse Character Styles",
        description: "Demonstrates DreamActor-M1's support for various character styles",
        videoUrl: "https://dreamactor-m1.com/videos/character-diversity.mp4",
        thumbnailUrl: "/video-thumbnails/character-diversity.jpg"
      },
      {
        id: "diversity-2",
        title: "Diverse Motion Styles",
        description: "Showcases the transfer and generation of different motion styles",
        videoUrl: "https://dreamactor-m1.com/videos/motion-diversity.mp4",
        thumbnailUrl: "/video-thumbnails/motion-diversity.jpg"
      }
    ],
    control: [
      {
        id: "control-1",
        title: "Facial Expression Control",
        description: "Fine-grained control of facial expressions while maintaining identity consistency",
        videoUrl: "https://dreamactor-m1.com/videos/facial-control.mp4",
        thumbnailUrl: "/video-thumbnails/facial-control.jpg"
      },
      {
        id: "control-2",
        title: "Head Pose Control",
        description: "Generating natural and smooth head movements with different head orientations",
        videoUrl: "https://dreamactor-m1.com/videos/head-pose-control.mp4",
        thumbnailUrl: "/video-thumbnails/head-pose.jpg"
      },
      {
        id: "control-3",
        title: "Shape-Aware Animation",
        description: "Adapting animations for different body types through bone length adjustment techniques",
        videoUrl: "https://dreamactor-m1.com/videos/shape-aware.mp4",
        thumbnailUrl: "/video-thumbnails/shape-aware.jpg"
      }
    ],
    audio: [
      {
        id: "audio-1",
        title: "Multilingual Lip Sync",
        description: "Audio-driven facial animation with precise lip synchronization in multiple languages",
        videoUrl: "https://dreamactor-m1.com/videos/multilingual-lipsync.mp4",
        thumbnailUrl: "/video-thumbnails/multilingual.jpg"
      },
      {
        id: "audio-2",
        title: "Emotional Speech Animation",
        description: "Generating corresponding facial expressions and body language based on speech emotion",
        videoUrl: "https://dreamactor-m1.com/videos/emotional-speech.mp4",
        thumbnailUrl: "/video-thumbnails/emotional-speech.jpg"
      }
    ],
    portrait: [
      {
        id: "portrait-1",
        title: "Fine Portrait Animation",
        description: "High-quality portrait animation with detailed expression transfer",
        videoUrl: "https://dreamactor-m1.com/videos/fine-portrait.mp4",
        thumbnailUrl: "/video-thumbnails/fine-portrait.jpg"
      },
      {
        id: "portrait-2",
        title: "Complex Expression Animation",
        description: "Precise capture and reproduction of complex emotional expressions and micro-expressions",
        videoUrl: "https://dreamactor-m1.com/videos/complex-expression.mp4",
        thumbnailUrl: "/video-thumbnails/complex-expression.jpg"
      }
    ]
  };

  // Create video card component
  const VideoCard = ({ video }: { video: VideoItem }) => (
    <Card className="overflow-hidden border-0 bg-gradient-to-br from-gray-900 to-gray-950 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-video w-full group">
          {/* Video thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/20 to-blue-600/20 z-0"></div>
          <div className="w-full h-full flex items-center justify-center bg-gray-900">
            <div className="text-center p-6 space-y-2">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">{video.title}</h3>
              <p className="text-sm text-gray-400">{video.description}</p>
            </div>
          </div>
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              className="bg-purple-600/90 hover:bg-purple-700 text-white"
              onClick={() => window.open(video.videoUrl, '_blank')}
            >
              Watch Video
            </Button>
          </div>
        </div>
        
        {/* Video information */}
        <div className="p-4">
          <h3 className="font-medium text-white text-lg">{video.title}</h3>
          <p className="text-sm text-gray-400 mt-1">{video.description}</p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="video-demos" className="relative py-24 bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            Video Demonstrations
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Explore the various features and applications of DreamActor-M1 through these demonstration videos
          </p>
        </motion.div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-8">
            {videoCategories.map(category => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Create content tabs for each category */}
          {videoCategories.map(category => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={fadeIn}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {videos[category.id].map(video => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
} 