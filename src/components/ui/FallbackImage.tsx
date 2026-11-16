"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type FallbackImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
  placeholder?: ReactNode;
};

export default function FallbackImage({
  src,
  alt,
  className,
  width,
  height,
  loading,
  placeholder = null,
}: FallbackImageProps) {
  const [missing, setMissing] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth === 0) {
      setMissing(true);
    }
  }, []);

  if (missing) return <>{placeholder}</>;

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={className}
      onError={() => setMissing(true)}
    />
  );
}
