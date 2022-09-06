import { IUserEntity } from '@auth/data-access/state/users/users.models';

export interface ICourseEntity {
  id: string;
  title: string;
  description: string;
  professorId: string;
  professor: IUserEntity;
  chapters: string[];
  // assignedGroups: Group[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface ICreateCourseRequest {
  title: string;
  description?: string;
  professorId?: string;
}

export interface IUpdateCourseRequest {
  title?: string;
  description?: string;
  professorId?: string;
}
