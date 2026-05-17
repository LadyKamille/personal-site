import { describe, expect, it } from 'vitest';
import buildIndicatorInlineStyle from './buildIndicatorInlineStyle';

describe('buildIndicatorInlineStyle', () => {
  it('returns base width, transform, and opacity when no animation exists', () => {
    expect(
      buildIndicatorInlineStyle({ left: 24, width: 92, opacity: 1 }, null),
    ).toEqual({
      width: '92px',
      transform: 'translateX(24px)',
      opacity: 1,
    });
  });

  it('adds animation variables and chooses the odd-key animation name', () => {
    expect(
      buildIndicatorInlineStyle(
        { left: 60, width: 48, opacity: 1 },
        {
          key: 5,
          fromLeft: 12,
          fromWidth: 40,
          stretchLeft: 12,
          stretchWidth: 96,
          toLeft: 60,
          toWidth: 48,
        },
      ),
    ).toEqual({
      width: '48px',
      transform: 'translateX(60px)',
      opacity: 1,
      '--indicator-from-left': '12px',
      '--indicator-from-width': '40px',
      '--indicator-stretch-left': '12px',
      '--indicator-stretch-width': '96px',
      '--indicator-to-left': '60px',
      '--indicator-to-width': '48px',
      animationName: 'nav-indicator-stretch-b',
    });
  });

  it('chooses the even-key animation name when applicable', () => {
    expect(
      buildIndicatorInlineStyle(
        { left: 60, width: 48, opacity: 1 },
        {
          key: 4,
          fromLeft: 12,
          fromWidth: 40,
          stretchLeft: 12,
          stretchWidth: 96,
          toLeft: 60,
          toWidth: 48,
        },
      ).animationName,
    ).toBe('nav-indicator-stretch-a');
  });
});
