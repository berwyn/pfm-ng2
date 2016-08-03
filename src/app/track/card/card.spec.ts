import {
	async,
	beforeEach,
	beforeEachProviders,
	describe,
	it,
	inject,
} from '@angular/core/testing';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';

import { TrackCardComponent } from './card.component';
import { Track } from '../track.model';
import { EXPECTED_TRACKS } from '../track.spec';
import { parseURI } from '../../helpers/uri-helpers';

describe('Track Card', () => {

	const [track, noCover] = EXPECTED_TRACKS;
	let tcb: TestComponentBuilder;

	beforeEachProviders(() => [TestComponentBuilder, TrackCardComponent]);

	beforeEach(inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
		tcb = _tcb;
	}));

	describe('generating track URLs', () => {
		it('should parse track URLs', () => {
			tcb.createAsync(TrackCardComponent).then(fixture => {
				let card = fixture.componentInstance as TrackCardComponent;

				card.track = track;
				fixture.detectChanges();

				expect(card['loadArtwork']()).toBe('/track/dbbc791c-7361-414a-8399-d89e548ed7e6/cover/normal.png');
			});
		});

		it('should provide default URLs', () => {
			tcb.createAsync(TrackCardComponent).then(fixture => {
				let card = fixture.componentInstance as TrackCardComponent;

				card.track = noCover;
				fixture.detectChanges();

				expect(card['loadArtwork']()).toBe('/images/logo-white.svg');
			})
		});
	});

	it('should render a track', (done: any) => {
		tcb.createAsync(TrackCardComponent)
			.then((fixture: ComponentFixture<TrackCardComponent>) => {
				const card = fixture.componentInstance as TrackCardComponent;
				const element = fixture.nativeElement as HTMLElement;

				card.track = track;
				fixture.detectChanges();

				const img = element.querySelector('.qa-cover') as HTMLImageElement;
				const title = element.querySelector('.qa-title') as HTMLSpanElement;
				const artist = element.querySelector('.qa-artist') as HTMLSpanElement;

				let path = parseURI(img.src).path;

				expect(path).toEqual('/track/dbbc791c-7361-414a-8399-d89e548ed7e6/cover/normal.png');
				expect(title.innerText).toEqual('Test Track 1');
				expect(artist.innerText).toEqual('aa1cf592-03df-4575-acea-130ec076cb95');
				done();
			}).catch(e => done.fail(e));
	});

});
