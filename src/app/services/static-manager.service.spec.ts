import { TestBed } from '@angular/core/testing';

import { StaticManagerService } from './static-manager.service';

describe('StaticManagerService', () => {
	let service: StaticManagerService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(StaticManagerService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
