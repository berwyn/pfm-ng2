import { Component, Optional, Input } from 'angular2/core';
import { NgFor } from 'angular2/common';
import { Track } from '../models/track';

@Component({
    selector: 'pfm-track-grid',
    template: `
        <div class="pfm-track-grid">
            {{ tracks }}
            <div *ngFor="#track of tracks">
                <h1>{{ track.title }}</h1>
                <span>{{ track.stats.plays }} Plays</span>
            </div>
        </div>
    `,
    directives: [NgFor]
})
export class TrackGridComponent{
    
    @Input() tracks: Track[];
    
}