import { Component, Input } from 'angular2/core';

@Component({
	selector: 'pfm-card',
	template: `
		<div class="card">
			<div class="card-imgwrapper">
				<ng-content select="[image]"></ng-content>
				<span class="card-imgoverlay">
					<ng-content select="[overlay]"></ng-content>
				</span>
			</div>
			<div class="card-content">
				<h3 class="material-title">
					{{ title }}
				</h3>
				<p class="card-text material-body1">
					<ng-content select="[body]"></ng-content>
				</p>
				<span class="card-buttons">
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
		
		@media screen and (max-width: 900px) {
			.card { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24) }
		}
	`]
})
export class PfmCard {

	@Input() title: string;

}