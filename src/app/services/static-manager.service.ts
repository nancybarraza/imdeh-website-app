import { Injectable } from '@angular/core';

import { COACHES_LIST, COURSES_LIST } from '@static/index';

import * as _ from 'lodash';

@Injectable({
	providedIn: 'root',
})
export class StaticManagerService {
	/**
	 * @method getAllData
	 * Retrieves all the static data in order to be able to
	 * generate the static information in the front-end temmplates.
	 * @return {Promise}
	 */
	public getAllData() {
		return new Promise<any>((resolve, reject) => {
			resolve({
				coachesList: COACHES_LIST,
				coursesList: COURSES_LIST,
			});
			reject({
				error: 500,
				message: 'Internal server error',
			});
		});
	}
	/**
	 * @method getAllCoaches
	 * Retrieves all the coaches data in order to be able to
	 * generate the static information in the front-end temmplates.
	 * @return {Promise}
	 */
	public getAllCoaches() {
		return new Promise<any>((resolve, reject) => {
			resolve(COACHES_LIST);
			reject({
				error: 500,
				message: 'Internal server error',
			});
		});
	}

	/**
	 * @method getAllCourses
	 * Retrieves all the courses data in order to be able to
	 * generate the static information in the front-end temmplates.
	 * @return {Promise}
	 */
	public getAllCourses() {
		return new Promise<any>((resolve, reject) => {
			resolve(COURSES_LIST);
			reject({
				error: 500,
				message: 'Internal server error',
			});
		});
	}

	public getCoachByPath(path: string) {
		return new Promise<any>((resolve, reject) => {
			const coachFound = _.find(COACHES_LIST, (coach) => {
				return coach.path === path;
			});
			if (!coachFound) {
				return reject({
					error: 404,
					message: 'Coach not found',
				});
			}
			resolve(coachFound);
		});
	}

	public getCoursebyPath(path: string) {
		return new Promise<any>((resolve, reject) => {
			const courseFound = _.find(COURSES_LIST, (course) => {
				return course.path === path;
			});
			if (!courseFound) {
				return reject({
					error: 404,
					message: 'Coach not found',
				});
			}
			resolve(courseFound);
		});
	}
}
