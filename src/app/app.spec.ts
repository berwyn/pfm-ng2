import {
	it,
	inject,
	describe,
	beforeEachProviders,
	expect
} from '@angular/core/testing';
import { AppComponent } from './app';

describe('App', () => {

	beforeEachProviders(() => [
		AppComponent
	]);


	it('should be able to test', inject([AppComponent], (app: AppComponent) => {
		// TODO: Real test here
		expect(2).toBe(2);
	}));

});
