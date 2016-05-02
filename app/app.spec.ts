import { inject, TestComponentBuilder } from 'angular2/testing';
import { AppComponent } from './app';

describe('App', () => {

	it('should be able to test', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
		return tcb.createAsync(AppComponent).then(componentFixture => {
			componentFixture.detectChanges();
			expect(true).toBe(true);
		});
	}) as (done: DoneFn) => void);

});
