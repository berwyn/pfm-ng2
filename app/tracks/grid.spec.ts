import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import { TrackGridComponent as Component } from './grid.component';
import { Track } from './track.model';
import { EXPECTED_TRACKS } from './track.spec';

describe('Track Grid', () => {
	let [coverTrack, noCoverTrack] = EXPECTED_TRACKS;
	let component: Component;

	beforeEach(() => component = new Component());

	describe('artwork loading', () => {
		it('should select artwork urls that exist', () => {
			expect(component.loadCover(coverTrack)).toBe('/track/dbbc791c-7361-414a-8399-d89e548ed7e6/cover/small.png');
		});

		it('should provide default URLs', () => {
			expect(component.loadCover(noCoverTrack)).toBe('/images/logo-white.svg');
		});
	});

	it('should load tracks', () => {
		expect(true).toBe(true);
	});
});
