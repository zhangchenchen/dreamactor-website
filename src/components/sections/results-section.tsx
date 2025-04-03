"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

export function ResultsSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const categories = [
    { id: "diversity", name: "Diversity" },
    { id: "controllability", name: "Controllability" },
    { id: "comparison", name: "Comparison" },
    { id: "pose", name: "Pose Transfer" },
    { id: "portrait", name: "Portrait Animation" }
  ];

  // Placeholder component for missing images
  const ImagePlaceholder = ({ title, category }: { title: string, category: string }) => (
    <div className="aspect-video w-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 flex items-center justify-center rounded-xl">
      <div className="text-center px-4">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{category}</p>
      </div>
    </div>
  );

  return (
    <section id="results" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_80%)]"></div>
      
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
            Results &amp; Capabilities
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            DreamActor-M1 delivers expressive results for portraits, upper-body, and full-body generation with robust long-term consistency.
          </p>
        </motion.div>

        <Tabs defaultValue="diversity" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            {categories.map(category => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Diversity */}
          <TabsContent value="diversity" className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Character and Motion Style Diversity
              </h3>
              <p className="text-gray-400 mb-8">
                Our method is robust to various character and motion styles.
              </p>
              
              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3, 4].map((index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2 h-full">
                        <Card className="border-0 overflow-hidden shadow-xl h-full bg-transparent">
                          <CardContent className="p-0 relative aspect-video overflow-hidden rounded-xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/20 to-blue-600/20"></div>
                            <ImagePlaceholder 
                              title={`Style Example ${index}`} 
                              category="Character & Motion"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                              <h4 className="font-medium text-white">Style Example {index}</h4>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-black/50 text-white border-purple-600" />
                <CarouselNext className="bg-black/50 text-white border-purple-600" />
              </Carousel>
            </motion.div>
          </TabsContent>
          
          {/* Controllability */}
          <TabsContent value="controllability" className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Precise Controllability
              </h3>
              <p className="text-gray-400 mb-8">
                Our method supports transferring specific motion aspects, such as facial expressions and head movements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Card className="border-0 overflow-hidden shadow-xl bg-transparent">
                    <CardContent className="p-0 relative aspect-video overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/20 to-blue-600/20"></div>
                      <ImagePlaceholder 
                        title="Facial Expression Control" 
                        category="Fine-grained Control"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h4 className="font-medium text-white">Facial Expression Control</h4>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <p className="text-gray-400 text-sm">
                    Fine-grained control over facial expressions while maintaining identity
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Card className="border-0 overflow-hidden shadow-xl bg-transparent">
                    <CardContent className="p-0 relative aspect-video overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/20 to-blue-600/20"></div>
                      <ImagePlaceholder 
                        title="Head Pose Direction" 
                        category="Pose Control"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h4 className="font-medium text-white">Head Pose Direction</h4>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <p className="text-gray-400 text-sm">
                    Support for different head pose directions with natural movements
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Card className="border-0 overflow-hidden shadow-xl bg-blue-950/10 rounded-xl p-6">
                  <h4 className="font-medium text-blue-400 mb-4">Audio-Driven Animation</h4>
                  <p className="text-gray-400 mb-4">
                    Our method extends to audio-driven facial animation, delivering lip-sync results in multiple languages.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="border-0 bg-blue-900/20 overflow-hidden">
                      <CardContent className="p-4 flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                        </div>
                        <div>
                          <h5 className="text-white text-sm">Multi-language Support</h5>
                          <p className="text-xs text-gray-400">English, Chinese, and more</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-0 bg-blue-900/20 overflow-hidden">
                      <CardContent className="p-4 flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                        </div>
                        <div>
                          <h5 className="text-white text-sm">Precise Lip Sync</h5>
                          <p className="text-xs text-gray-400">Natural mouth movements</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Card>
              </div>
            </motion.div>
          </TabsContent>
          
          {/* Comparison to SOTA */}
          <TabsContent value="comparison" className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Comparing to SOTA Methods
              </h3>
              <p className="text-gray-400 mb-8">
                Our method generates results with fine-grained motions, identity preservation, temporal consistency and high fidelity.
              </p>
              
              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-medium text-purple-400">Fine-grained Motions</h4>
                    <p className="text-sm text-gray-400">
                      Precise control of subtle facial expressions and detailed body movements
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-blue-400">Identity Preservation</h4>
                    <p className="text-sm text-gray-400">
                      Maintains accurate identity features throughout the animation
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-green-400">Temporal Consistency</h4>
                    <p className="text-sm text-gray-400">
                      Smooth transitions and coherent motion across frames
                    </p>
                  </div>
                </div>
              </div>
              
              <Card className="border-0 overflow-hidden shadow-xl bg-transparent">
                <CardContent className="p-0 relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/20 to-blue-600/20"></div>
                  <div className="aspect-video w-full">
                    <ImagePlaceholder 
                      title="SOTA Comparison" 
                      category="DreamActor-M1 vs State-of-the-art Methods"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          
          {/* Pose Transfer */}
          <TabsContent value="pose" className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Pose Transfer
              </h3>
              <p className="text-gray-400 mb-8">
                Our method enables seamless pose transfer between different subjects.
              </p>
              
              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3].map((index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2 h-full">
                        <Card className="border-0 overflow-hidden shadow-xl h-full bg-transparent">
                          <CardContent className="p-0 relative aspect-video overflow-hidden rounded-xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/20 to-blue-600/20"></div>
                            <ImagePlaceholder 
                              title={`Pose Transfer ${index}`} 
                              category="Subject Transformation"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-black/50 text-white border-purple-600" />
                <CarouselNext className="bg-black/50 text-white border-purple-600" />
              </Carousel>
            </motion.div>
          </TabsContent>
          
          {/* Portrait Animation */}
          <TabsContent value="portrait" className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Portrait Animation
              </h3>
              <p className="text-gray-400 mb-8">
                Our method excels at portrait animation with realistic expressions and movements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 overflow-hidden shadow-xl bg-transparent">
                  <CardContent className="p-0 relative aspect-video overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/20 to-blue-600/20"></div>
                    <ImagePlaceholder 
                      title="Portrait Animation 1" 
                      category="Facial Expressions"
                    />
                  </CardContent>
                </Card>
                
                <Card className="border-0 overflow-hidden shadow-xl bg-transparent">
                  <CardContent className="p-0 relative aspect-video overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/20 to-blue-600/20"></div>
                    <ImagePlaceholder 
                      title="Portrait Animation 2" 
                      category="Head Movement"
                    />
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <Separator className="mb-12 bg-blue-900/30" />
          
          <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Experience the Future of Human Animation
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            DreamActor-M1 outperforms state-of-the-art works, delivering expressive results for portraits, upper-body, and full-body generation.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 