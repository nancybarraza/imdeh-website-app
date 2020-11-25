import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CourseComponent } from './course.component';

describe('CourseComponent', () => {
	let component: CourseComponent;
	let fixture: ComponentFixture<CourseComponent>;

	const fakeActivatedRoute = ({
		snapshot: {
			data: {
				name: 'Master',
			},
		},
	} as unknown) as ActivatedRoute;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CourseComponent],
			imports: [RouterTestingModule],
			providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
