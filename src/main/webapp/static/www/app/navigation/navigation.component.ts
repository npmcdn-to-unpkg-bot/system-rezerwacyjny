import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {UserDataComponent} from '../userdata/userdata.component.ts';


@Component({
	selector: 'navigation',
	templateUrl: './app/navigation/navigation.html',
	directives: [ROUTER_DIRECTIVES, UserDataComponent]
})
export class NavigationComponent {


}