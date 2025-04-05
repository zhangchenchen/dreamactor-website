"use client"

import { useEffect, useState } from 'react';

export default function AdBanner() {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Set initial value
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full my-4 flex justify-center">
            <div className="ad-container max-w-full overflow-hidden">
                <iframe
                    src="/adsterra.html"
                    width={isMobile ? "320px" : "728px"}
                    height={isMobile ? "100px" : "90px"}
                    scrolling="no"
                    frameBorder="0"
                    style={{
                        border: "none",
                        overflow: "hidden",
                        maxWidth: "100%"
                    }}
                    title="Advertisement"
                />
            </div>
        </div>
    );
} 