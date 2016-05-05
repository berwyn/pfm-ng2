import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AppComponent } from './app';
import { TrackStore } from './tracks/track.store';

// TODO: Move providers onto component
bootstrap(AppComponent, [
	ROUTER_PROVIDERS
]);
