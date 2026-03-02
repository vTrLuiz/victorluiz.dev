"use client";

import { useEffect, useRef, useState } from "react";

interface LazyIframeProps {
  src: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

export function LazyIframe({ src, title, className, style }: LazyIframeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "100px", // Carrega antes de entrar na viewport
        threshold: 0.1,
      },
    );

    observer.observe(iframeRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={iframeRef} className="relative h-full w-full">
      {/* Skeleton loading */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-muted">
          <div className="flex h-full items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        </div>
      )}

      {/* Iframe carrega apenas quando está perto da viewport */}
      {isInView && (
        <iframe
          src={src}
          title={title}
          className={className}
          style={style}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
}
