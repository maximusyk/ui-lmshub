import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourseEntity, ICreateCourseRequest } from '@courses/data-access/state/courses.models';
import { environment } from '@env/environment';
import { IDeleteResponse } from '@shared/types/general.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private coursesEndpoint = environment.apiUrl + '/courses';

  constructor(private http: HttpClient) {}

  create(createData: ICreateCourseRequest): Observable<ICourseEntity> {
    return this.http.post<ICourseEntity>(this.coursesEndpoint, createData);
  }

  getOne(id: string): Observable<ICourseEntity> {
    return this.http.get<ICourseEntity>(this.coursesEndpoint + '/' + id);
  }

  getAll(): Observable<ICourseEntity[]> {
    return this.http.get<ICourseEntity[]>(this.coursesEndpoint);
  }

  update(id: string, updateData: ICreateCourseRequest): Observable<ICourseEntity> {
    return this.http.patch<ICourseEntity>(this.coursesEndpoint + '/' + id, updateData);
  }

  delete(id: string): Observable<IDeleteResponse> {
    return this.http.delete<IDeleteResponse>(this.coursesEndpoint + '/' + id);
  }
}
