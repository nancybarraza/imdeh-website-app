import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-request-modal',
	templateUrl: './request-modal.component.html',
	styleUrls: ['./request-modal.component.scss'],
})
export class RequestModalComponent implements OnInit {
	@Input('course') public course: string;
	constructor() {
		//
	}

	public ngOnInit(): void {}
}
