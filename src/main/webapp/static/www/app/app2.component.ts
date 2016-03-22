import {Component} from 'angular2/core';
import {NavigationComponent} from './navigation/navigation.component.ts';
import {Page1Component} from './pages/page1.component.ts';
import {Page2Component} from './pages/page2.component.ts';
import {Page3Component} from './pages/page3.component.ts';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'my-app',
	templateUrl: './app/app2.html',
	directives: [NavigationComponent, Page1Component, ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/', name: 'Page1', component: Page1Component },
  	{ path: '/strona2', name: 'Page2', component: Page2Component },
	{ path: '/strona3', name: 'Page3', component: Page3Component }
])
export class AppComponent2 {

} 
	
	