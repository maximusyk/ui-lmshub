import { AppTheme } from '../data-access/theme';

export const DEFAULT_BASE_THEME: AppTheme = 'light' as const;

export const DEFAULT_SIDEBAR_COLLAPSED = false as const;

export enum TimeoutEnum {
  SECOND = 1000,
  MINUTE = 60_000, // == 60 * 1000
  HOUR = 3_600_000, // == 60 * 60 * 1000
  DAY = 86_400_000, // == 24 * 60 * 60 * 1000
  WEEK = 604_800_000, // == 7 * 24 * 60 * 60 * 1000
  MONTH = 2_592_000_000, // == 30 * 24 * 60 * 60 * 1000
}

export interface IDeleteResponse {
  id: string;
  statusCode: number;
  success: true;
}
