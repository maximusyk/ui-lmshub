import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { IDeleteResponse } from '@shared/types/general.types';
import { Observable } from 'rxjs';
import { IUserCreateUpdateRequest, IUserEntity } from '../state/users/users.models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersEndpoint = environment.apiUrl + '/users';

  constructor(private http: HttpClient) {}

  create(createData: IUserCreateUpdateRequest): Observable<IUserEntity> {
    return this.http.post<IUserEntity>(this.usersEndpoint, createData);
  }

  getCurrent(): Observable<IUserEntity> {
    return this.http.get<IUserEntity>(this.usersEndpoint + '/me');
  }

  getOne(id: string): Observable<IUserEntity> {
    return this.http.get<IUserEntity>(this.usersEndpoint + '/' + id);
  }

  getAll(): Observable<IUserEntity[]> {
    return this.http.get<IUserEntity[]>(this.usersEndpoint);
  }

  update(id: string, updateData: IUserCreateUpdateRequest): Observable<IUserEntity> {
    return this.http.patch<IUserEntity>(this.usersEndpoint + '/' + id, updateData);
  }

  delete(id: string): Observable<IDeleteResponse> {
    return this.http.delete<IDeleteResponse>(this.usersEndpoint + '/' + id);
  }
}
