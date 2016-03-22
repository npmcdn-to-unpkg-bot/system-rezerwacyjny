import {Component} from 'angular2/core';


@Component({
	selector: 'page1',
	templateUrl: './app/pages/page1.html'
})
export class Page1Component {

	klikniecie(){
		window.location.href = "../login";
	}

}