import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ProfileInterface } from "../../shared/types/profile.interface";
import { environment } from "../../../environments/environment";
import { GetUserProfileResponseInterface } from "../types/getUserProfileResponse.interface";

@Injectable()
export class UserProfileService {
    constructor(private http: HttpClient) {}

    getUserProfile(slug: string): Observable<ProfileInterface> {
        const url = `${environment.apiUrl}/profiles/${slug}`

        return this.http
        .get(url)
        .pipe(
            map((response: GetUserProfileResponseInterface) => response.profile)
        )
    }
}