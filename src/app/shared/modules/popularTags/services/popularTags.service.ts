import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { PopularTagType } from "../../../types/popularTag.type";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { GetPopularTagsReponseInterface } from "../types/GetPopularTagsReponse.interface";

@Injectable()
export class PopularTagsService {
    constructor(private http: HttpClient) {}

    getPopularTags(): Observable<PopularTagType[]> {
        const url = environment.apiUrl + '/tags';

        return this.http.get(url).pipe(map((response: GetPopularTagsReponseInterface) => {
            return response.tags;
        }));
    }
}