import { TestComponentBuilder, ComponentFixture, async, inject } from 'angular2/testing';
import { TrackCardComponent } from './card.component';
import { Track } from './track.model';
import { EXPECTED_TRACKS } from './track.spec';

describe('Track Card', () => {

	let [ track ] = EXPECTED_TRACKS;

	it('should render a track', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
		return tcb.createAsync(TrackCardComponent).then((fixture: ComponentFixture) => {
			const element = fixture.nativeElement as HTMLElement;
			const img = element.querySelector('.qa-cover') as HTMLImageElement;
			const title = element.querySelector('.qa-title') as HTMLSpanElement;
			const artist = element.querySelector('.qa-artist') as HTMLSpanElement;
			
			fixture.componentInstance.track = track;
			fixture.detectChanges();
			
			expect(img.src).toBe('/track/dbbc791c-7361-414a-8399-d89e548ed7e6/cover/small.png');
		});
	})) as () => void);

});
