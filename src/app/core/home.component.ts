import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TrackGridComponent, Categories } from '../tracks/grid.component';

@Component({
	template: `
		<div class="home-comp">
			<pfm-track-grid title="Hot" [max]="25" [category]="${Categories.Hot}"></pfm-track-grid>
			<pfm-track-grid title="Latest" [max]="25" [category]="${Categories.Latest}"></pfm-track-grid>
		</div>
	`,
	styles: [`
		.home-comp {
			display: flex;
			flex-direction: row;
		}
		
		@media screen and (max-width: 480px) {
			.home-comp {
				flex-direction: column;
			}
		}
	`],
	directives: [NgFor, TrackGridComponent]
})
export class HomePage {}
