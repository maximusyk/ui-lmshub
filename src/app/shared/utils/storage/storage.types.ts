import { AppTheme } from '@shared/data-access/theme';

type StorageObjectMap = {
  'App/accessToken': string;
  'App/theme': AppTheme;
};

export type StorageObjectType = 'App/accessToken' | 'App/theme';

export type StorageObjectData<T extends StorageObjectType> = {
  type: T;
  data: StorageObjectMap[T];
};
