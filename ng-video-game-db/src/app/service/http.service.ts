import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { environment as env } from 'src/environment/environment';
import { Game, APIResponse } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getGameList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    });
  }
  getGameDetails(id: string): Observable<Game> {
    const gameInfoRequest = this.http.get(`${env.SECOND_URL}/games/${id}`);
    const gameTrailerRequest = this.http.get(
      `${env.SECOND_URL}/games/${id}/movies`
    );
    const gameScreenshotsRequest = this.http.get(
      `${env.SECOND_URL}/games/${id}/screenshots`
    );

    return forkJoin({
      gameInfoRequest,
      gameTrailerRequest,
      gameScreenshotsRequest,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenshotsRequest']?.result,
          trailers: resp['gameTrailerRequest']?.result,
        };
      })
    );
  }
}
