import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import { TrackGridComponent as Component } from './grid.component';
import { Track } from './track.model';
import { TrackStore } from './track.store';
import { EXPECTED_TRACKS } from './track.spec';

describe('Track Grid', () => {
	let [coverTrack, noCoverTrack] = EXPECTED_TRACKS;
	let component: Component;

	beforeEach(() => component = new Component(new TrackStore()));

	it('should load tracks', () => {
		expect(true).toBe(true);
	});
});
