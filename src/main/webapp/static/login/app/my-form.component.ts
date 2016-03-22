import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {AuthData} from './auth-data.ts';
import {LoginService} from './login-service.ts';
import {HTTP_PROVIDERS}    from 'angular2/http';

@Component({
  selector: 'my-form',
  templateUrl: 'app/my-form.component.html',
  providers: [
	LoginService, HTTP_PROVIDERS]
})
export class MyFormComponent {  

	constructor(private loginService:LoginService){}

	authdata = new AuthData(" "," ");
	
	get diagnostic() { return JSON.stringify(this.authdata); }
	
	signIn(mleko : AuthData){
		console.log(mleko)
		let isLogged = 'false';
		this.loginService.signIn(mleko).subscribe(
			response => this.signedInAction(),
			error => this.notSignedInAction()
		);
	}

	signedInAction(){
		window.location.href = "../www";
	}

	notSignedInAction(){
		window.alert("Zle dane do logowania");
		this.authdata.login = '';
		this.authdata.password = '';
	}

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/