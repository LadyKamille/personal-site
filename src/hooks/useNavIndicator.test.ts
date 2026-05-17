import { describe, expect, it } from 'vitest';
import type { IndicatorMetrics } from '../app/types';
import { buildIndicatorAnimation } from './useNavIndicator';

const previousMetrics: IndicatorMetrics = {
  left: 20,
  width: 80,
  opacity: 1,
};

describe('buildIndicatorAnimation', () => {
  it('returns null when the indicator is hidden or unchanged', () => {
    expect(
      buildIndicatorAnimation({ ...previousMetrics, opacity: 0 }, previousMetrics, 2),
    ).toBeNull();

    expect(buildIndicatorAnimation(previousMetrics, previousMetrics, 2)).toBeNull();
  });

  it('builds a right-moving stretch animation', () => {
    expect(
      buildIndicatorAnimation(previousMetrics, { left: 140, width: 60, opacity: 1 }, 3),
    ).toEqual({
      key: 4,
      fromLeft: 20,
      fromWidth: 80,
      stretchLeft: 20,
      stretchWidth: 180,
      toLeft: 140,
      toWidth: 60,
    });
  });

  it('builds a left-moving stretch animation', () => {
    expect(
      buildIndicatorAnimation(previousMetrics, { left: 5, width: 40, opacity: 1 }, 6),
    ).toEqual({
      key: 7,
      fromLeft: 20,
      fromWidth: 80,
      stretchLeft: 5,
      stretchWidth: 95,
      toLeft: 5,
      toWidth: 40,
    });
  });
});
