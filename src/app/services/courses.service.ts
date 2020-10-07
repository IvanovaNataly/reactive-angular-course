import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Course} from '../model/course';
import {map, shareReplay} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export default class CoursesService {

  constructor( private httpClient: HttpClient ) {

  }

  loadAllCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>('/api/courses')
      .pipe(
        map(resp => resp['payload']),
        shareReplay()
      );
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    return this.httpClient.put(`/api/courses/${courseId}`, changes)
      .pipe(
        shareReplay()
      );
  }

}
