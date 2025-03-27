import { Injectable } from "@angular/core";

@Injectable()
export class PersistanceService {
    set(key: string, data: any): void {
        try{
            
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem(key, JSON.stringify(data));
            } else if (typeof sessionStorage !== 'undefined') {
                // Fallback to sessionStorage if localStorage is not supported
                sessionStorage.setItem(key, JSON.stringify(data));
            } else {
                // If neither localStorage nor sessionStorage is supported
                console.log('Web Storage is not supported in this environment.');
            }
        } catch (e) {
            console.error('Error saving to localStorage', e);
        }    
    }

    get(key: string): any {
        try {
            if (typeof localStorage !== 'undefined') {
                return JSON.parse(localStorage.getItem(key));
            } else if (typeof sessionStorage !== 'undefined') {
                // Fallback to sessionStorage if localStorage is not supported
                return JSON.parse(sessionStorage.getItem(key));
            } else {
                // If neither localStorage nor sessionStorage is supported
                console.log('Web Storage is not supported in this environment.');
                return null;
            }
        } catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
        }
    }
}