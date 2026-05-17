import { useEffect, useRef, useState } from 'react';
import { sectionOrder } from '../app/siteContent';
import type { PanelDirection, SectionId } from '../app/types';

const PANEL_EXIT_DURATION_MS = 280;

export function getPanelDirection(
  currentSection: SectionId,
  nextSection: SectionId,
): PanelDirection {
  return sectionOrder[nextSection] > sectionOrder[currentSection]
    ? 'forward'
    : 'backward';
}

export default function useSectionPanels(initialSection: SectionId = 'home') {
  const [activeSection, setActiveSection] = useState<SectionId>(initialSection);
  const [previousSection, setPreviousSection] = useState<SectionId | null>(
    null,
  );
  const [panelDirection, setPanelDirection] =
    useState<PanelDirection>('forward');
  const [exitDirection, setExitDirection] = useState<PanelDirection>('forward');
  const [panelAnimationKey, setPanelAnimationKey] = useState(0);
  const exitTimeoutRef = useRef<number | null>(null);

  const queueOutgoingPanelCleanup = () => {
    if (exitTimeoutRef.current) {
      window.clearTimeout(exitTimeoutRef.current);
    }

    exitTimeoutRef.current = window.setTimeout(() => {
      setPreviousSection(null);
      exitTimeoutRef.current = null;
    }, PANEL_EXIT_DURATION_MS);
  };

  const navigateToSection = (sectionId: SectionId) => {
    if (sectionId === activeSection) {
      return;
    }

    const nextDirection = getPanelDirection(activeSection, sectionId);
    const currentSection = activeSection;

    setPreviousSection(currentSection);
    setExitDirection(nextDirection);
    setPanelDirection(nextDirection);
    setActiveSection(sectionId);
    setPanelAnimationKey((current) => current + 1);
    queueOutgoingPanelCleanup();
  };

  useEffect(() => {
    return () => {
      if (exitTimeoutRef.current) {
        window.clearTimeout(exitTimeoutRef.current);
      }
    };
  }, []);

  return {
    activeSection,
    previousSection,
    panelDirection,
    exitDirection,
    panelAnimationKey,
    navigateToSection,
  };
}
