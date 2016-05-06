import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TrackGridComponent, Categories } from '../tracks/grid.component';

@Component({
	template: `
		<div class="home-comp">
			<pfm-track-grid title="Hot" [max]="25" [category]="${Categories.Hot}"></pfm-track-grid>
		</div>
	`,
	directives: [NgFor, TrackGridComponent]
})
export class HomePage {}
