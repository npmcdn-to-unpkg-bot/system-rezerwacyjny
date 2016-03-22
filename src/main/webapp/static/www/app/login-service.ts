import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class LoginService{

	constructor(private http: Http){}
	tekst:string;
	private _urlUrl = 'http://127.0.0.1:55369/rest/resources/test';
	
	signIn(){
		console.log('mleko1');
		// this.http.get(this._urlUrl).subscribe(
  //                      asd => console.log('mleko2|'+asd._body));
		;
	}
	
  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}