"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 240;

const currentFrame = (index: number) => 
  `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.041s.png`;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    let failedCount = 0;
    
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      const framePath = currentFrame(i);
      img.src = framePath;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount + failedCount === FRAME_COUNT) {
          // Draw the first frame once all are loaded (or failed)
          if (canvasRef.current) {
             const ctx = canvasRef.current.getContext("2d");
             if (ctx && loadedImages[0]) renderFrame(0, ctx, loadedImages);
          }
        }
      };
      
      img.onerror = () => {
        failedCount++;
        console.warn(`Failed to load frame: ${framePath}`);
        if (loadedCount + failedCount === FRAME_COUNT) {
          if (canvasRef.current) {
             const ctx = canvasRef.current.getContext("2d");
             if (ctx && loadedImages[0]) renderFrame(0, ctx, loadedImages);
          }
        }
      };
      
      loadedImages.push(img);
    }
    setImages(loadedImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderFrame = (index: number, ctx: CanvasRenderingContext2D, imgs = images) => {
    if (!imgs[index] || !canvasRef.current) return;
    const img = imgs[index];
    const canvas = canvasRef.current;
    
    // object-fit: cover logic for canvas
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img, 
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(latest * FRAME_COUNT))
    );
    
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) renderFrame(frameIndex, ctx);
    }
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const currentProgress = scrollYProgress.get();
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.floor(currentProgress * FRAME_COUNT))
        );
        if (images.length > 0) {
          const ctx = canvasRef.current.getContext("2d");
          if (ctx) renderFrame(frameIndex, ctx);
        }
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial sizing
    
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212] pt-16">
      <div className="sticky top-16 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="h-full w-full block" />
        <Overlay scrollProgress={scrollYProgress} />
      </div>
    </div>
  );
}
