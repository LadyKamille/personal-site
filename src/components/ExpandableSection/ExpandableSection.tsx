import { useEffect, useRef, useState } from 'react';

interface ExpandableSectionProps {
  header: React.ReactNode;
  defaultExpanded?: boolean;
  autoExpandOnView?: boolean;
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

export default function ExpandableSection({
  header,
  className,
  defaultExpanded = false,
  autoExpandOnView = false,
  contentClassName,
  children,
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [hasAutoExpanded, setHasAutoExpanded] = useState(defaultExpanded);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoExpandOnView || hasAutoExpanded) {
      return;
    }

    const sectionElement = sectionRef.current;

    if (!sectionElement || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsExpanded(true);
        setHasAutoExpanded(true);
        observer.disconnect();
      },
      {
        threshold: 0.4,
        rootMargin: '0px 0px -12% 0px',
      },
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, [autoExpandOnView, hasAutoExpanded]);

  return (
    <div
      ref={sectionRef}
      className={`group ${className ?? ''} ${isExpanded ? 'is-open' : ''}`}
    >
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 text-left"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <div className="min-w-0 flex-1">{header}</div>

        <span
          className={`relative mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-rose-400/20 bg-rose-500/10 text-rose-300 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <span
            aria-hidden="true"
            className="absolute h-0.5 w-3 rounded-full bg-current transition-transform duration-200 ease-out"
          />
          <span
            aria-hidden="true"
            className={`absolute h-3 w-0.5 rounded-full bg-current transition-[transform,opacity] duration-200 ease-out ${
              isExpanded ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'
            }`}
          />
        </span>
      </button>

      <div
        className={`
          grid overflow-hidden text-sm leading-7 text-slate-300
          transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isExpanded ? 'opacity-100' : 'opacity-0'}
          ${contentClassName ?? ''}
          `}
        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
        aria-hidden={!isExpanded}
      >
        <div
          className={`min-h-0 overflow-hidden transition-[transform,opacity,padding] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isExpanded
              ? 'translate-y-0 pt-3 opacity-100'
              : '-translate-y-1 pt-0 opacity-0'
          }`}
        >
          <div className="space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
