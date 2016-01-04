import { Component, Input } from 'angular2/core';

@Component({
	selector: 'pfm-card',
	template: `
		<div class="pfm-card">
			<div class="pfm-card-imgwrapper">
				<ng-content select="[image]"></ng-content>
				<span class="pfm-card-imgoverlay">
					<ng-content select="[overlay]"></ng-content>
				</span>
			</div>
			<div class="pfm-card-content">
				<h3 class="material-title">
					{{ title }}
				</h3>
				<p class="pfm-card-text material-body1">
					<ng-content select="[body]"></ng-content>
				</p>
				<span class="pfm-card-buttons">
					<!-- TODO: Add buttons -->
				</span>
			</div>
		</div>
	`
})
export class PfmCard {
	
	@Input() title: string;
	
}