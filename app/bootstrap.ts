import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './components/app';
import {TrackStore} from './stores/track';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	TrackStore
]);