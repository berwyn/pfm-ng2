import { 
	async,
	beforeEach,
	beforeEachProviders,
	describe,
	it,
	inject,
} from '@angular/core/testing';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import { 
	Injectable,
	Injector,
	Provider,
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { TrackGridComponent as Component, Categories } from './grid.component';
import { Track } from './track.model';
import { TrackStore } from './track.store';
import { EXPECTED_TRACKS } from './track.spec';

@Injectable()
class MockTestStore extends TrackStore {

	getHot(): Observable<Track[]> {
		return Observable.create((observer: Observer<Track[]>) => {
			observer.next(EXPECTED_TRACKS);
			observer.complete();
		});
	}

}

describe('Track Grid', () => {

	let tcb: TestComponentBuilder;

	beforeEachProviders(() => [
		TestComponentBuilder,
		Component,
		new Provider(TrackStore, { useClass: MockTestStore }),
	]);

	beforeEach(inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
		tcb = _tcb;
	}));

	it('should load tracks', () => {
		tcb.createAsync(Component).then(fixture => {
			let grid = fixture.componentInstance as Component;
			let element = fixture.nativeElement as HTMLElement;

			grid.title = 'Hot';
			grid.category = Categories.Hot;
			grid.max = 10;
			fixture.detectChanges();

			let titleEl = element.querySelector('.qa-title');
			let listElements = element.querySelectorAll('.qa-item') as NodeListOf<HTMLLIElement>;

			expect(titleEl.textContent).toBe('Hot');
			expect(listElements.length).toBe(2);
		});
	});
});
