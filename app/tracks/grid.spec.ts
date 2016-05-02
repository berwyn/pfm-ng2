import { TestComponentBuilder, ComponentFixture, async, inject } from 'angular2/testing';
import { TrackGridComponent } from './grid.component';
import { Track } from './track.model';
import { EXPECTED_TRACKS } from './track.spec';

describe('Track Grid', () => {

	let [ coverTrack, noCoverTrack ] = EXPECTED_TRACKS;

	describe('artwork loading', () => {

		it('should select artwork urls that exist', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			return tcb.createAsync(TrackGridComponent).then((fixture: ComponentFixture) => {
				const comp = fixture.componentInstance as TrackGridComponent;
				expect(comp.loadCover(coverTrack)).toBe('/track/dbbc791c-7361-414a-8399-d89e548ed7e6/cover/small.png');
			});
		}) as () => void);

		it('should provide default URLs', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
			return tcb.createAsync(TrackGridComponent).then((fixture: ComponentFixture) => {
				const comp = fixture.componentInstance as TrackGridComponent;
				expect(comp.loadCover(noCoverTrack)).toBe('/images/logo-white.svg');
			});
		}) as () => void);

	});

	it('should load tracks', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
		return tcb.createAsync(TrackGridComponent).then((fixture: ComponentFixture) => {
			const element = fixture.nativeElement as HTMLElement;
			// TODO: Test this
		});
	})) as () => void);

});
