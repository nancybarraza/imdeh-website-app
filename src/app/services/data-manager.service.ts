import * as _ from 'lodash';

import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { WebServices } from './webservices.service';

import { doLog } from './app-settings';

const LOG_TAG = '[core/services/data-manager.service]';

/**
 * @class Services.dataManager
 * Service for all the data shared between components and communicating back and forth with the backend
 */
@Injectable()
export class DataManagerService {
	constructor(private _webservices: WebServices) {
		//
	}

	public async sendEmail(_emailRequest: any) {
		const api = 'send-email';
		const body = _emailRequest;
		try {
			return this._webservices.request({
				api,
				method: 'POST',
				body,
			});
		} catch (error) {
			console.log(error);
		}
	}

	public async sendRegisterEmail(_emailRequest: any) {
		const api = 'send-register-email';
		const body = _emailRequest;
		
		try {
			return this._webservices.request({
				api,
				method: 'POST',
				body,
			});
		} catch (error) {
			console.log(error);
		}
	}
}
