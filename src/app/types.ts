export type SectionId = 'home' | 'experience' | 'toolbox';

export type PanelDirection = 'forward' | 'backward';

export interface ResourceLink {
  href: string;
  text: string;
  icon: string;
}

export interface SectionDefinition {
  id: SectionId;
  label: string;
}

export interface IndicatorMetrics {
  left: number;
  width: number;
  opacity: number;
}

export interface IndicatorAnimation {
  key: number;
  fromLeft: number;
  fromWidth: number;
  stretchLeft: number;
  stretchWidth: number;
  toLeft: number;
  toWidth: number;
}
