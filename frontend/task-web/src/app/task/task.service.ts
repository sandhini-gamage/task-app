import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

    constructor(private _httpClient:HttpClient) { }
    baseURL : String = "/api/v1/tasks";

    fetchAllTasks() : Observable<Task[]> {
      return this._httpClient.get<Task[]>(`${this.baseURL}`);
    }

    createTask(data: Task){
      return this._httpClient.post<Task>(`${this.baseURL}`, data);
    }

    updateTask(data: Task){
      return this._httpClient.put<Task>(`${this.baseURL}/${data.id}`, data);
    }

    deleteTask(id: Number){
      return this._httpClient.delete<Task>(`${this.baseURL}/${id}`);
    }
}