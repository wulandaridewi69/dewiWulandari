import Image from 'next/image';
import { cn } from '@/lib/utils';
import { profile } from '@/data/profile';

/** Brand glyphs ship as monochrome white PNGs, so they sit on a dark chip. */
const assetByIcon = {
  github: '/assets/Github.png',
  linkedin: '/assets/Linkedin.png',
  instagram: '/assets/Instagram.png',
  facebook: '/assets/Facebook.png',
  x: '/assets/x.png',
  discord: '/assets/Discord.png',
};

export function SocialLinks({ className, size = 'md', showLabels = false }) {
  const chip = size === 'sm' ? 'size-8' : 'size-9';
  const glyph = size === 'sm' ? 14 : 16;

  return (
    <ul className={cn('flex flex-wrap items-center gap-2', className)}>
      {profile.socials.map((social) => {
        const asset = assetByIcon[social.icon];
        if (!asset) return null;

        return (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.name}
              title={`${social.name} — ${social.handle}`}
              className={cn(
                'group flex items-center gap-2 rounded-full bg-neutral-900 text-white transition-all duration-200 hover:bg-rose-600 focus-visible:bg-rose-600',
                chip,
                showLabels && 'w-auto px-3.5',
              )}
            >
              <Image
                src={asset}
                alt=""
                width={glyph}
                height={glyph}
                className={cn('shrink-0 transition-transform duration-200 group-hover:scale-110', showLabels && 'mr-2.5')}
              />
              {showLabels ? (
                <span className="text-[13px] font-medium whitespace-nowrap">{social.handle}</span>
              ) : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}