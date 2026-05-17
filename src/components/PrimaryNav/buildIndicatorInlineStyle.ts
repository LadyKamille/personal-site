import type { CSSProperties } from 'react';
import type { IndicatorAnimation, IndicatorMetrics } from '../../app/types';

export default function buildIndicatorInlineStyle(
  indicatorStyle: IndicatorMetrics,
  indicatorAnimation: IndicatorAnimation | null,
): CSSProperties & Record<`--${string}`, string> {
  const inlineStyle: CSSProperties & Record<`--${string}`, string> = {
    width: `${indicatorStyle.width}px`,
    transform: `translateX(${indicatorStyle.left}px)`,
    opacity: indicatorStyle.opacity,
  };

  if (!indicatorAnimation) {
    return inlineStyle;
  }

  inlineStyle['--indicator-from-left'] = `${indicatorAnimation.fromLeft}px`;
  inlineStyle['--indicator-from-width'] = `${indicatorAnimation.fromWidth}px`;
  inlineStyle['--indicator-stretch-left'] =
    `${indicatorAnimation.stretchLeft}px`;
  inlineStyle['--indicator-stretch-width'] =
    `${indicatorAnimation.stretchWidth}px`;
  inlineStyle['--indicator-to-left'] = `${indicatorAnimation.toLeft}px`;
  inlineStyle['--indicator-to-width'] = `${indicatorAnimation.toWidth}px`;
  inlineStyle.animationName =
    indicatorAnimation.key % 2 === 0
      ? 'nav-indicator-stretch-a'
      : 'nav-indicator-stretch-b';

  return inlineStyle;
}
