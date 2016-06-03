import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app';

if(process.env.ENV === 'production') {
	enableProdMode();
}

// TODO: Move providers onto component
bootstrap(AppComponent);
