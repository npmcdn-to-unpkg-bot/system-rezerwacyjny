import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import 'rxjs/Rx';
import {Observable}     from 'rxjs/Observable';
import {UserData} from './userdata.ts';

@Injectable()
export class UserDataService {

	private _userUrl = 'http://kamil-komputer:8088/jee7/resources/user';

	constructor(private http: Http){}

	getUserData(){
		return this.http.get(this._userUrl);
	}
	
	signOut(){
		this.http.post(this._userUrl, null, null).subscribe(
			ok => window.location.href = "../login", 
			error => window.alert("Wystapil blad przy wylogowywaniu!"));
	}
}