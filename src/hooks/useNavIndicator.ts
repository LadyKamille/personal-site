import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import type {
  IndicatorAnimation,
  IndicatorMetrics,
  SectionId,
} from '../app/types';

const NAV_INDICATOR_ANIMATION_DURATION_MS = 260;

const hiddenIndicatorMetrics: IndicatorMetrics = {
  left: 0,
  width: 0,
  opacity: 0,
};

function getElementMetrics(element: HTMLButtonElement): IndicatorMetrics {
  return {
    left: element.offsetLeft,
    width: element.offsetWidth,
    opacity: 1,
  };
}

export function buildIndicatorAnimation(
  previousMetrics: IndicatorMetrics,
  nextMetrics: IndicatorMetrics,
  currentKey: number,
): IndicatorAnimation | null {
  const hasMoved =
    previousMetrics.left !== nextMetrics.left ||
    previousMetrics.width !== nextMetrics.width;

  if (previousMetrics.opacity === 0 || !hasMoved) {
    return null;
  }

  const movingRight = nextMetrics.left > previousMetrics.left;
  const stretchLeft = movingRight ? previousMetrics.left : nextMetrics.left;
  const stretchRight = movingRight
    ? nextMetrics.left + nextMetrics.width
    : previousMetrics.left + previousMetrics.width;

  return {
    key: currentKey + 1,
    fromLeft: previousMetrics.left,
    fromWidth: previousMetrics.width,
    stretchLeft,
    stretchWidth: stretchRight - stretchLeft,
    toLeft: nextMetrics.left,
    toWidth: nextMetrics.width,
  };
}

export default function useNavIndicator(activeSection: SectionId) {
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorMetrics>(
    hiddenIndicatorMetrics,
  );
  const [indicatorAnimation, setIndicatorAnimation] =
    useState<IndicatorAnimation | null>(null);
  const buttonRefs = useRef<Record<SectionId, HTMLButtonElement | null>>({
    home: null,
    experience: null,
    toolbox: null,
  });
  const animationKeyRef = useRef(0);
  const indicatorTimeoutRef = useRef<number | null>(null);
  const indicatorMetricsRef = useRef<IndicatorMetrics>(hiddenIndicatorMetrics);

  const clearIndicatorTimeout = useCallback(() => {
    if (!indicatorTimeoutRef.current) {
      return;
    }

    window.clearTimeout(indicatorTimeoutRef.current);
    indicatorTimeoutRef.current = null;
  }, []);

  const updateIndicator = useCallback(
    (shouldAnimate = true) => {
      const activeButton = buttonRefs.current[activeSection];

      if (!activeButton) {
        return;
      }

      const nextMetrics = getElementMetrics(activeButton);
      const nextAnimation = shouldAnimate
        ? buildIndicatorAnimation(
            indicatorMetricsRef.current,
            nextMetrics,
            animationKeyRef.current,
          )
        : null;

      if (nextAnimation) {
        animationKeyRef.current = nextAnimation.key;
        clearIndicatorTimeout();
        setIndicatorAnimation(nextAnimation);
        indicatorTimeoutRef.current = window.setTimeout(() => {
          setIndicatorAnimation(null);
          indicatorTimeoutRef.current = null;
        }, NAV_INDICATOR_ANIMATION_DURATION_MS);
      }

      indicatorMetricsRef.current = nextMetrics;
      setIndicatorStyle(nextMetrics);
    },
    [activeSection, clearIndicatorTimeout],
  );

  const registerButton = useCallback(
    (sectionId: SectionId, element: HTMLButtonElement | null) => {
      buttonRefs.current[sectionId] = element;
    },
    [],
  );

  useLayoutEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      updateIndicator();
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [updateIndicator]);

  useEffect(() => {
    const handleResize = () => {
      updateIndicator(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateIndicator]);

  useEffect(() => {
    return () => {
      clearIndicatorTimeout();
    };
  }, [clearIndicatorTimeout]);

  return {
    indicatorStyle,
    indicatorAnimation,
    registerButton,
  };
}
