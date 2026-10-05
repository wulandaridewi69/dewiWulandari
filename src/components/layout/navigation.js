'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';

/** True when `pathname` is the current route or a child of it. */
function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navigation({ items, avatar, alt }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  // Close the mobile panel whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // While the panel is open: lock scroll, close on Escape or outside click.
  useEffect(() => {
    if (!open) return undefined;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = 'hidden';

    function onKeyDown(event) {
      if (event.key !== 'Escape') return;
      setOpen(false);
      toggleRef.current?.focus();
    }

    function onPointerDown(event) {
      const target = event.target;
      if (panelRef.current?.contains(target) || toggleRef.current?.contains(target)) return;
      setOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);

    return () => {
      body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  return (
    <>
      <nav
        aria-label="Main"
        className="hidden items-center gap-1 md:flex"
      >
        {items.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                active ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900',
              )}
            >
              {item.label}
              {active ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3.5 -bottom-px h-px bg-neutral-900"
                />
              ) : null}
            </Link>
          );
        })}
      </nav>

      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="-mr-1 inline-flex size-9 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100 md:hidden"
      >
        <Icon name={open ? 'close' : 'menu'} size={18} />
      </button>

      {open ? (
        <div className="fixed inset-x-0 top-0 z-50 md:hidden">
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default bg-neutral-950/20 backdrop-blur-sm"
          />
          <div
            ref={panelRef}
            id="mobile-navigation"
            className="absolute inset-x-3 top-3 rounded-2xl bg-white p-2 shadow-2xl shadow-neutral-900/10 ring-1 ring-neutral-200"
          >
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-semibold tracking-tight text-neutral-900">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex size-8 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100"
              >
                <Icon name="close" size={16} />
              </button>
            </div>

            <ul className="mt-1 flex flex-col">
              {items.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium transition-colors',
                        active
                          ? 'bg-neutral-100 text-neutral-900'
                          : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900',
                      )}
                    >
                      {item.label}
                      {active ? <Icon name="check" size={16} /> : null}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {avatar ? (
              <div className="mt-2 flex items-center gap-3 border-t border-neutral-100 px-3 py-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={avatar}
                  alt={alt}
                  width={36}
                  height={36}
                  className="size-9 rounded-full object-cover ring-1 ring-neutral-200"
                />
                <span className="text-sm text-neutral-500">{alt}</span>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}