'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

/** Deterministic gradient angle so a given title always gets the same colour. */
function gradientFor(seed) {
  const angles = [
    'from-neutral-800 to-neutral-950',
    'from-rose-600 to-neutral-950',
    'from-neutral-700 to-rose-900',
    'from-sky-700 to-neutral-950',
    'from-neutral-900 to-rose-800',
  ];
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) % angles.length;
  }
  return angles[hash];
}

function initialsFor(title = '') {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');
}

/**
 * Image with a graceful fallback.
 *
 * Renders a generated gradient + monogram when `src` is missing or fails to
 * load, so a bad asset path degrades instead of rendering a broken-image icon.
 */
export function SmartImage({
  src,
  alt,
  title = '',
  className,
  imageClassName,
  fill = true,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  fallbackClassName,
}) {
  const [failed, setFailed] = useState(false);
  const showFallback = !src || failed;

  if (showFallback) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-gradient-to-br',
          gradientFor(title || 'fallback'),
          className,
          fallbackClassName,
        )}
        role="img"
        aria-label={alt || title || 'Placeholder image'}
      >
        <span className="font-mono text-4xl font-medium tracking-tight text-white/25 select-none">
          {initialsFor(title)}
        </span>
      </div>
    );
  }

  if (!fill) {
    return (
      <Image
        src={src}
        alt={alt || title}
        width={800}
        height={600}
        onError={() => setFailed(true)}
        className={cn('object-cover', className, imageClassName)}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt || title}
      fill
      onError={() => setFailed(true)}
      className={cn('object-cover', imageClassName)}
      priority={priority}
      sizes={sizes}
    />
  );
}