import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import 'rxjs/Rx';
import {Observable}     from 'rxjs/Observable';
import {AuthData} from './auth-data.ts';

@Injectable()
export class LoginService{

	constructor(private http: Http){}
	tekst:string;
	private _urlUrl = 'http://kamil-komputer:8088/jee7/resources/gaba';
	
	signIn(authData : AuthData){
		// this.http.get(this._urlUrl).subscribe(
  //                      asd => console.log('mleko2|'+asd._body));
		console.log(authData);

		let body = JSON.stringify(authData);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		let isLogged = 'false';

		return this.http.post(this._urlUrl, body, options);
	}
	
  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}