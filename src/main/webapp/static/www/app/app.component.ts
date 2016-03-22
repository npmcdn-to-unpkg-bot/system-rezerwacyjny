import {Component} from 'angular2/core';
import {MyFormComponent} from './my-form.component.ts';


@Component({
  selector: 'my-app',
  template: '<my-form></my-form>',
  directives: [MyFormComponent]
})
export class AppComponent { 
	
	
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/