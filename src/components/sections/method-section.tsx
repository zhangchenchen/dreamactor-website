"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export function MethodSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="method" className="relative py-24 bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(69,39,160,0.12),transparent_70%)]"></div>
      
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
            Method Overview
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            DreamActor-M1 is a DiT-based human animation framework with hybrid guidance that enables fine-grained control over facial expressions and body movements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Architecture Diagram */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-purple-500/20">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-sm"></div>
              <div className="aspect-video w-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 flex items-center justify-center rounded-xl relative z-10">
                {/* Fallback content if image is not available */}
                <div className="text-center p-6 space-y-8">
                  <h3 className="text-xl font-bold text-white">DreamActor-M1 Architecture</h3>
                  
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div className="bg-purple-900/30 p-3 rounded-md border border-purple-500/20">
                      <div className="font-semibold text-purple-300 mb-1">Pose Encoder</div>
                      <div className="text-gray-400">Extracts body skeletons & head spheres</div>
                    </div>
                    
                    <div className="bg-blue-900/30 p-3 rounded-md border border-blue-500/20">
                      <div className="font-semibold text-blue-300 mb-1">DiT Blocks</div>
                      <div className="text-gray-400">Diffusion transformer processing</div>
                    </div>
                    
                    <div className="bg-green-900/30 p-3 rounded-md border border-green-500/20">
                      <div className="font-semibold text-green-300 mb-1">Face Motion</div>
                      <div className="text-gray-400">Implicit facial representations</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                  </div>
                  
                  <div className="bg-indigo-900/30 p-3 rounded-md border border-indigo-500/20 max-w-xs mx-auto">
                    <div className="font-semibold text-indigo-300 mb-1">3D VAE</div>
                    <div className="text-gray-400">Video latent encoding/decoding</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Highlight points */}
            <motion.div 
              className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-purple-500"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full bg-blue-500"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Explanation Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeIn}
          >
            <Tabs defaultValue="training" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="training">Training Stage</TabsTrigger>
                <TabsTrigger value="features">Key Features</TabsTrigger>
              </TabsList>
              
              <TabsContent value="training" className="space-y-4">
                <Card className="bg-blue-950/20 border-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-blue-400">Training Process</CardTitle>
                    <CardDescription className="text-gray-400">
                      The end-to-end training framework of DreamActor-M1
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-300 space-y-4">
                    <p>
                      During the training stage, we first extract body skeletons and head spheres from driving frames and then encode them to the pose latent using the pose encoder.
                    </p>
                    <p>
                      The resultant pose latent is combined with the noised video latent along the channel dimension. The video latent is obtained by encoding a clip from the input full video using 3D VAE.
                    </p>
                    <p>
                      Facial expression is additionally encoded by the face motion encoder, to generate implicit facial representations. These are integrated via cross-attention within each DiT block.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="features" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-purple-950/20 border-purple-500/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-purple-400">Motion Guidance</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-300 text-sm">
                      Hybrid control signals that integrate implicit facial representations, 3D head spheres, and 3D body skeletons
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-purple-950/20 border-purple-500/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-purple-400">Scale Adaptation</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-300 text-sm">
                      Progressive training strategy using data with varying resolutions and scales
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-purple-950/20 border-purple-500/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-purple-400">Appearance Guidance</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-300 text-sm">
                      Integration of motion patterns with complementary visual references
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-purple-950/20 border-purple-500/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-purple-400">Temporal Coherence</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-300 text-sm">
                      Ensures long-term consistency for unseen regions during complex movements
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            
            <Separator className="my-8 bg-gray-800" />
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 mb-2">
                  3D
                </div>
                <p className="text-gray-400 text-sm">
                  Head Sphere Control
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
                  DiT
                </div>
                <p className="text-gray-400 text-sm">
                  Diffusion Transformer
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 mb-2">
                  3D
                </div>
                <p className="text-gray-400 text-sm">
                  Body Skeleton Control
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 