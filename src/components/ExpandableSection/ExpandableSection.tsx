import { useRef, useState } from 'react';

interface ExpandableSectionProps {
  title: string;
  defaultExpanded?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function ExpandableSection({
  title,
  className,
  defaultExpanded = false,
  children,
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const contentDivRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`group ${className ?? ''} ${isExpanded ? 'is-open' : ''}`}>
      <button
        className="text-lg font-semibold flex items-center gap-2"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        {title}
        <span className="transition-transform duration-300 group-[.is-open]:rotate-45">
          +
        </span>
      </button>

      <div
        ref={contentDivRef}
        className={`
          transition-[max-height] duration-300 ease-in-out
          space-y-4
          overflow-hidden
          h-full
          `}
        style={
          isExpanded
            ? { maxHeight: contentDivRef.current?.scrollHeight }
            : { maxHeight: 0 }
        }
        aria-hidden={!isExpanded}
      >
        {children}
      </div>
    </div>
  );
}
