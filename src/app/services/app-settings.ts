declare var require: any;
import * as _ from 'lodash';
import { environment } from '../../environments/environment';
export const doLog = environment.doLog;

/**
 * @class AppSettings
 * Stores the Application Main Settings.
 * @version 1.0.0
 */
export class AppSettings {
	public environmentList = [
		{
			name: 'local',
			code: 'dev',
		},
		{
			name: 'production',
			code: 'prod',
		},
	];

	/**
	 * @property {Object} appCustomOptions stores all the app's custom options.
	 * @property {String} appCustomOptions.appName The application name to display on browser tab.
	 * @property {String} appCustomOptions.appTitle The application title to display.
	 * @property {String} appCustomOptions.subTitle The application subTitle to display.
	 * @property {String} appCustomOptions.version The application version.
	 * @property {String} appCustomOptions.termsPage The terms page path as static page.
	 * @property {String} appCustomOptions.templateName The template name to get the images across the application.
	 * @property {String} env get the environment name.
	 * @readonly
	 * This property is not `Typed` as can grow and we should create an interface to update.
	 */
	public readonly appCustomOptions = {
		version: require('../../../package.json').version,
		env: this.getEnvironment(),
	};

	// TODO: Add acc and prod keys to change based on environment.
	private apiCredentials = {
		DEV: {
			token: null,
			apiKey: null,
			captchaKey: '6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU',
			clientId: 'ATho_hxW_iQDulexHgI9u32_DoQAfg2gYRiQxJBqCe7eb14CiOMin5Z6XcX-UaLHUphEaUiUG_PnOd2B',
		},
		PROD: {
			token: null,
			apiKey: null,
			captchaKey: '6LdOJu8ZAAAAAGbjwL_97_lduwsHdeFe6GEAlwQp',
			clientId: '',
		},
	};

	private hostUrl = {
		DEV: 'http://localhost:3000/',
		PROD: 'https://imdeh-api.herokuapp.com/',
	};

	public getApiCredentials() {
		const env = this.getEnvironment();
		const credentials = _.filter(this.apiCredentials, (_credentials, _key) => {
			if (_key === env) {
				return _credentials;
			}
		});
		const hostUrl = _.filter(this.hostUrl, (_url, _key) => {
			if (_key === env) {
				return _url;
			}
		});
		return {
			captchaKey: credentials[0].captchaKey,
			hostUrl,
			apiKey: credentials[0].apiKey,
			clientId: credentials[0].clientId,
		};
	}

	/**
	 * @method getEnvironment
	 * @private
	 * Get the current environtment name
	 * @return {String}
	 */
	private getEnvironment() {
		return environment.name;
	}

	/**
	 * @method envName
	 * @public
	 * Gets environment name from environmentList
	 * @return {string}
	 */
	public getEnvironmentName() {
		const envName = this.appCustomOptions.env.toLowerCase();
		const result = _.find(this.environmentList, {
			code: envName,
		}) || { name: 'N/A' };

		return result.name;
	}

	public getCaptchaKey() {
		const credentials = this.getApiCredentials();
		const captchaKey = credentials.captchaKey;
		return captchaKey;
	}

	public getPaypalClientId() {
		const credentials = this.getApiCredentials();
		const clientId = credentials.clientId;
		return clientId;
	}
}
