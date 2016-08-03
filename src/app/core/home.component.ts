import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { TrackGridComponent } from '../track/grid/grid.component';

@Component({
	template: require('./home.component.html'),
	styles: [require('./home.component.css')],
	directives: [NgFor, TrackGridComponent]
})
export class HomePage {}
