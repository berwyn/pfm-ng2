import { Component, Input } from 'angular2/core';
import { NgIf } from 'angular2/common';

@Component({
	selector: 'pfm-card',
	directives: [NgIf],
	template: `
		<div class="card" [style.display]="inline ? 'inline-block' : 'block'" [style.width]="width" [style.height]="height">
			<div class="card-imgwrapper">
				<ng-content select="[image]"></ng-content>
				<span class="card-imgoverlay">
					<ng-content select="[overlay]"></ng-content>
				</span>
			</div>
			<div class="card-content">
				<h3 class="card-title material-title" *ngIf="title">
					{{ title }}
				</h3>
				<p class="card-text material-body1" *ngIf="hasContent">
					<ng-content select="[body]"></ng-content>
				</p>
				<span class="card-buttons" *ngIf="hasButtons">
					<!-- TODO: Add buttons -->
				</span>
			</div>
		</div>
	`,
	styles: [`
		.card {
			background-color: white;
			border-radius: 2px;
			margin: 8px;
			overflow: hidden;
			transition: box-shadow 150ms linear;
		}
		
		.card:hover { box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22) }
		
		.card-imgwrapper {
			background-color: #bdbdbd;
		}
		
		.card-content {
			padding: 8px;
		}
		
		.card-title {
			margin-top: 0;
			margin-bottom: 10px;
		}
		
		.card-title:only-child {
			margin-bottom: 0;
		}
		
		@media screen and (max-width: 900px) {
			.card { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24) }
		}
	`]
})
export class PfmCard {

	@Input() 
	title: string;
	@Input()
	inline: boolean = false;
	@Input()
	width: string;
	@Input()
	height: string;

	// TODO: Wire up as child content is added
	hasContent: boolean = false;
	hasButtons: boolean = false;
}