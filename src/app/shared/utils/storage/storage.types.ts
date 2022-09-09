import { AppTheme } from '@shared/data-access/theme';

type StorageObjectMap = {
  'App/accessToken': string;
  'App/theme': AppTheme;
  'App/sidebarCollapsed': boolean;
};

export type StorageObjectType = 'App/accessToken' | 'App/theme' | 'App/sidebarCollapsed';

export type StorageObjectData<T extends StorageObjectType> = {
  type: T;
  data: StorageObjectMap[T];
};
