import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppSettings, doLog } from './app-settings';

import * as _ from 'lodash';

const LOG_TAG = '[services/WebServices]';

/**
 * @class core.services.WebServices
 * List of API webservices to be consumed by the app
 * @uses angular.core.Injectable
 * @uses moment
 * @version 1.0.0
 */
@Injectable()
export class WebServices {
	private authToken: string;
	/**
	 * @method constructor
	 * @return {void}
	 */
	constructor(private _http: HttpClient, private _router: Router, private _settings: AppSettings) {}

	/**
	 * @method request
	 * Performs a request that will automatically add tokens and will try to validate its errors
	 * @param {object} params Options for request
	 * @param {string} params.api API to call
	 * @param {object} [params.headers={}] Extra Headers to use, besides authentication
	 * @param {sring} [params.method='GET'] HTTP Method
	 * @param {string} [params.responseType=''] Responsetype to send to Angular's HTTPClient
	 * @return {Promise}
	 */
	public request(params) {
		doLog && console.debug(`${LOG_TAG} - request`);
		const { api = '', body, headers = {}, method = 'GET', queryParams = {}, responseType = 'json' } = params;

		if (!api) {
			throw Error('missing api for request');
		}

		const url = this._settings.getApiCredentials().hostUrl + api;

		// _.extend(headers, this.createAuthHeader());
		return this._http
			.request(method, url, {
				body,
				headers,
				responseType,
				params: queryParams,
			})
			.toPromise()
			.catch((error) => {
				console.log(error);
			});
	}

	/**
	 * @method createAuthHeader
	 * @private
	 * Generates the authenticat header based on the current authToken
	 * @return {object} header for authorization
	 */
	private createAuthHeader() {
		const authToken = this.authToken;
		return {
			Authorization: `Bearer ${authToken}`,
		};
	}

	/**
	 * @method showLoader
	 * Display the `LoadingComponent` with a true `isBusy`
	 * @return {void}
	 */
	private showLoader(): void {
		doLog && console.log(LOG_TAG, ' - showLoader');
		// this._busyService.showLoading();
	}

	/**
	 * @method hideLoader
	 * Hide the `LoadingComponent` with a true `isBusy`
	 * @return {void}
	 */
	private hideLoader(): void {
		doLog && console.log(LOG_TAG, ' - hideLoader');
		// this._busyService.hideLoading();
	}

	/**
	 * @method errorMessageHandler
	 * Manages error messages from API request when fails prompting an error dialog.
	 * @return {void}
	 */
	private errorMessageHandler(_error) {
		doLog && console.error(_error.message, _error.stack);
		// this._errorService.validateResponseError(_error);
	}

	/**
	 * @method authenticate
	 * Authenticates against POST api/authenticate/
	 * @param {String} _username username param
	 * @param {String} _password password param
	 * @return {Promise}
	 */
	public authenticateApp() {
		this.showLoader();
		const authenticatePath = 'api/gateway/authenticate?include=rcmPermissions';
		const apiCredentials = this._settings.getApiCredentials();

		const headers = new HttpHeaders({
			Authorization: 'Basic ' + btoa(`${apiCredentials.apiKey}:`),
		});
		return this._http
			.post(apiCredentials.hostUrl + authenticatePath, {
				headers,
			})
			.toPromise();
	}
}
