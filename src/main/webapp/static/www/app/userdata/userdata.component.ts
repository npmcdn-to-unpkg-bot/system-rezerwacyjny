import {Component} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {UserDataService} from './userdata.service.ts';
import {UserData} from './userdata.ts';

@Component({
	selector: 'userdata',
	templateUrl: './app/userdata/userdata.html',
	providers: [UserDataService, HTTP_PROVIDERS]
})
export class UserDataComponent {

	userData = new UserData("aaa","","");

	constructor(private userDataService: UserDataService) {
		console.log('sprawdzenie');
		userDataService.getUserData().map(res => <UserData>res.json()).subscribe(user => {
			this.userData = user;
		});
		// userDataService.getUserData().subscribe(user => this.userData = user.json().data);

		// this.userData = new UserData(user.name, user.surname, user.mail
		// console.log(this.userData);
	}

	signOut(){
		console.log("wylogowywuje");
		this.userDataService.signOut();
	}
	get getUserName() { return this.userData.name}
} 