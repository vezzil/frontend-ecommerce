import type { Payload } from 'recharts/types/component/DefaultTooltipContent';

export type ThemeName = 'light' | 'dark';

export interface ChartConfig {
  [key: string]: {
    label?: string | React.ReactNode;
    icon?: any; // Component type
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<ThemeName, string> }
  );
}

export interface ChartContextProps {
  config: ChartConfig;
  chartId: string;
}

export interface ChartProps {
  id?: string;
  class?: string;
  config: ChartConfig;
}

export interface ChartTooltipProps {
  active?: boolean;
  payload?: Payload<string | number | (string | number)[], string | number>[];
  label?: string | number;
  className?: string;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: 'line' | 'dot' | 'dashed';
  nameKey?: string;
  labelKey?: string;
  valueKey?: string;
  formatter?: (value: any, name: string, item: any) => [string, string];
  labelFormatter?: (label: any) => string;
}

export interface ChartLegendProps {
  payload?: Array<{
    value: string;
    type?: string;
    id: string;
    color?: string;
  }>;
  verticalAlign?: 'top' | 'middle' | 'bottom';
  align?: 'left' | 'center' | 'right';
  layout?: 'horizontal' | 'vertical';
  className?: string;
  hideIcon?: boolean;
  onToggle?: (key: string) => void;
  activeKeys?: string[];
}

export interface ChartStyleProps {
  id: string;
  config: ChartConfig;
}
