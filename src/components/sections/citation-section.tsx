"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function CitationSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const bibtexCitation = `@misc{luo2025dreamactorm1holisticexpressiverobust,
  title={DreamActor-M1: Holistic, Expressive and Robust Human Image Animation with Hybrid Guidance}, 
  author={Yuxuan Luo and Zhengkun Rong and Lizhen Wang and Longhao Zhang and Tianshu Hu and Yongming Zhu},
  year={2025},
  eprint={2504.01724},
  archivePrefix={arXiv},
  primaryClass={cs.CV},
  url={https://arxiv.org/abs/2504.01724}, 
}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(bibtexCitation);
      setIsDialogOpen(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section id="citation" className="relative py-24 bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            Paper &amp; Citation
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            DreamActor-M1: Holistic, Expressive and Robust Human Image Animation with Hybrid Guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Paper thumbnail */}
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
                <div className="text-center space-y-4 px-6">
                  <svg 
                    className="w-16 h-16 mx-auto text-purple-400" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <h3 className="text-xl font-bold text-white">DreamActor-M1 Paper</h3>
                  <p className="text-gray-300 text-sm">arXiv:2504.01724</p>
                  <div className="border-t border-purple-600/30 w-24 mx-auto pt-4">
                    <p className="text-xs text-gray-400">Published 2025</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  className="bg-purple-600/90 hover:bg-purple-600 text-white"
                  size="lg"
                  onClick={() => window.open('https://arxiv.org/abs/2504.01724', '_blank')}
                >
                  Read Paper
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Citation info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Paper Information
            </h3>
            
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-sm font-medium text-purple-400 mb-1">Authors</h4>
                <p className="text-gray-300">
                  Yuxuan Luo*, Zhengkun Rong*, Lizhen Wang*, Longhao Zhang*, Tianshu Hu*†, Yongming Zhu
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  *Equal Contribution †Corresponding Author
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-purple-400 mb-1">Affiliation</h4>
                <p className="text-gray-300">
                  Bytedance Intelligent Creation
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-purple-400 mb-1">arXiv</h4>
                <p className="text-gray-300">
                  <a 
                    href="https://arxiv.org/abs/2504.01724" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    arXiv:2504.01724 [cs.CV]
                  </a>
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-white mb-2">BibTeX Citation</h4>
              
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-6 pb-4">
                  <pre className="text-xs text-gray-400 overflow-x-auto whitespace-pre-wrap">
{`@misc{luo2025dreamactorm1holisticexpressiverobust,
  title={DreamActor-M1: Holistic, Expressive and Robust Human Image Animation with Hybrid Guidance}, 
  author={Yuxuan Luo and Zhengkun Rong and Lizhen Wang and Longhao Zhang and Tianshu Hu and Yongming Zhu},
  year={2025},
  eprint={2504.01724},
  archivePrefix={arXiv},
  primaryClass={cs.CV},
  url={https://arxiv.org/abs/2504.01724}, 
}`}
                  </pre>
                </CardContent>
              </Card>
              
              <div className="flex justify-end">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-400 hover:text-purple-300 hover:bg-purple-950/30"
                      onClick={copyToClipboard}
                    >
                      Copy Citation
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-gray-950 border-gray-800">
                    <DialogHeader>
                      <DialogTitle className="text-white">Citation Copied</DialogTitle>
                      <DialogDescription className="text-gray-400">
                        The BibTeX citation has been copied to your clipboard.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <div className="bg-blue-950/20 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-medium text-white mb-4">Ethics Statement</h3>
            <p className="text-gray-400 text-sm">
              The images and videos used in demos are sourced from public domains or generated by models, and are intended solely to showcase the capabilities of this research. Please contact us (hutianshu007@gmail.com) if there are any concerns, and we will delete it in time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 