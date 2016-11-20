import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Person } from './person';

// use enhanced Observable implementation toPromise method
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PersonService {
    private personsUrl = '192.168.1.105:8080';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    //restful call
    getPerson(): Promise<Person> {
        return this.http.get(`${this.personsUrl}/person`)
            .toPromise()
            .then(response => response.json().data as Person)
            .catch(this.handleError);
    }
}
