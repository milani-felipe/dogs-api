import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IDogPhoto, IDogSpecs } from "../../interfaces/dogs";
import { map, Observable } from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class DogsService {
    url = `https://api.thedogapi.com/v1`
    constructor(private http: HttpClient) { }

    getDogsList(page: number): Observable<IDogSpecs[]> {
        return this.http.get<IDogSpecs[]>(`${this.url}/breeds?limit=6&page=${page}`);
    }

    getBreedPhoto(id: number) {
        return this.http.get<IDogPhoto>(`${this.url}/images/search?breed_ids=${id}`).pipe(map((item: any) => item[0] ?? { url: '' }))
    }
}