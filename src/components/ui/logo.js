import Image from 'next/image';
import { cn } from '@/lib/utils';
import { profile } from '@/data/profile';

export function LogoMark({ size = 32, className }) {
  return (
    <span
      style={{ width: size, height: size }}
      className={cn(
        'flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-900',
        className,
      )}
    >
      <Image
        src={profile.logo}
        alt=""
        width={size}
        height={size}
        className="scale-115 object-contain"
        style={{ width: size * 0.62, height: size * 0.62 }}
      />
    </span>
  );
}