export interface IUserEntity {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone?: string;
  password: string;
  roleId: string;
  role: IRoleEntity;
  groupId?: string;
  // group?: IGroup;
  isRegisteredByGoogle: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface IRoleEntity {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserFullName {
  firstName: string;
  lastName: string;
}

export interface IUserCreateUpdateRequest {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone?: string;
  password: string;
  roleId: string;
  groupId?: string;
}
