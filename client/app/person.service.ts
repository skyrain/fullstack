import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Person } from './person';

// use enhanced Observable implementation toPromise method
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonService {
    //!!! need "http://" in front
    private personsUrl = 'http://192.168.1.105:8080';
    //send data needs header info
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });


    constructor(private http: Http) { }

    addPerson(person: Person): Observable<Person> {
        return this.http.post(`${this.personsUrl}/addPerson`, { person }, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPersons(): Observable<Person[]> {
        return this.http.get(`${this.personsUrl}/persons`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        /* 'data' comes from the server response json format*/
        return body.data || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
