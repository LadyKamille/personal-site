import { describe, expect, it } from 'vitest';
import { getPanelDirection } from './useSectionPanels';

describe('getPanelDirection', () => {
  it('returns forward when moving to a later section', () => {
    expect(getPanelDirection('home', 'experience')).toBe('forward');
    expect(getPanelDirection('experience', 'toolbox')).toBe('forward');
  });

  it('returns backward when moving to an earlier section', () => {
    expect(getPanelDirection('toolbox', 'experience')).toBe('backward');
    expect(getPanelDirection('toolbox', 'home')).toBe('backward');
  });
});
