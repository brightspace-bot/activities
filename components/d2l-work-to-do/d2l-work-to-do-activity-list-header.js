import '@brightspace-ui/core/components/colors/colors';
import '@brightspace-ui/core/components/status-indicator/status-indicator';

import { bodySmallStyles, heading2Styles, heading3Styles, heading4Styles } from '@brightspace-ui/core/components/typography/styles';
import { css, html, LitElement } from 'lit-element/lit-element';
import { Constants, Config } from './env';
import { classMap } from 'lit-html/directives/class-map.js';
import { LocalizeMixin } from '@brightspace-ui/core/mixins/localize-mixin';
import { formatDate } from '@brightspace-ui/intl/lib/dateTime.js';

/**
 * Provides Title and Count for associated activity usage list
 */
class ActivityListHeader extends LocalizeMixin(LitElement) {

	static get properties() {
		return {
			/** Total count for activity usage entities that match the subcategory header range. */
			count: { type: Number },
			/** Represents if component is to render fullscreen version */
			fullscreen: { type: Boolean },
			/** Represents if corresponding entities are overdue or upcoming */
			isOverdue: { type: Boolean, attribute: 'overdue' },
		};
	}

	static get styles() {
		return [
			bodySmallStyles,
			heading2Styles,
			heading3Styles,
			heading4Styles,
			css`
				:host {
					display: block;
				}
				:host([hidden]) {
					display: none;
				}
				.d2l-activity-list-header-container-widget {
					border-bottom: 1px solid var(--d2l-color-mica);
					display: flex;
					justify-content: space-between;
					margin-bottom: 1px;
					padding-bottom: 0.3rem;
				}
				.d2l-activity-list-header-fullscreen {
					display: flex;
					justify-content: space-between;
					padding-bottom: 0;
				}
				.d2l-activity-list-counter {
					background-color: var(--d2l-color-carnelian-minus-1);
					border: 1px solid var(--d2l-color-carnelian-minus-1);
					border-radius: 0.6rem;
					color: white;
					display: inline-block;
					height: fit-content;
					line-height: 1;
					padding: 0.1rem 0.25rem 0.1rem 0.25rem;
					vertical-align: middle;
				}
				.d2l-activity-list-counter-fullscreen {
					border-radius: 0.8rem;
					padding: 0.15rem 0.35rem 0.15rem 0.35rem;
				}
				.d2l-body-small,
				.d2l-heading-2,
				.d2l-heading-3,
				.d2l-heading-4 {
					margin: auto 0;
				}
			`
		];
	}

	static async getLocalizeResources(langs) {
		for await (const lang of langs) {
			let translations;
			switch (lang) {
				case 'en':
					translations = await import('./lang/en');
					break;
			}

			if (translations && translations.val) {
				return {
					language: lang,
					resources: translations.val
				};
			}
		}

		return null;
	}

	constructor() {
		super();
		this.count = 0;
		this.fullscreen = false;
		this.isOverdue = false;
	}

	render() {
		const containerClasses = { 'd2l-activity-list-header-container-widget': !this.fullscreen, 'd2l-activity-list-header-fullscreen': this.fullscreen };
		const messageClasses = { 'd2l-activity-list-header-content': true, 'd2l-heading-4': !this.fullscreen, 'd2l-heading-2': this.fullscreen };
		const counterClasses = { 'd2l-activity-list-counter': true, 'd2l-activity-list-counter-fullscreen': this.fullscreen, 'd2l-body-small': !this.fullscreen, 'd2l-heading-3': this.fullscreen };

		const messageTemplate = html`
			<div class=${classMap(messageClasses)}>
				${this._message}
			</div>`;

		const counterTemplate = html`
			<div class=${classMap(counterClasses)}>
				${this._counterString}
			</div>`;

		return html`
			<div class=${classMap(containerClasses)}>
				${messageTemplate}
				${counterTemplate}
			</div>
		`;
	}

	get _counterString() {
		return this.fullscreen
			? `${this.count}`
			: this.count > Constants.MaxActivityCount
				? `${Constants.MaxActivityCount}+`
				: `${this.count}`;
	}

	get _message() {
		if (this.isOverdue) {
			return this.localize('overdue');
		}
		if (this.fullscreen) {
			return this.localize('upcoming');
		}

		const now = new Date();
		const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (Config.UpcomingWeekLimit * 7), 23, 59, 59, 999);
		const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);

		const startDay = formatDate(startDate, { format: 'd' });
		const startMonth = formatDate(startDate, { format: 'MMMM' });
		const endDay = formatDate(endDate, { format: 'd' });
		const endMonth = formatDate(endDate, { format: 'MMMM' });

		return this.localize(
			'dateHeader',
			'startMonth', startMonth,
			'startDay', startDay,
			'endMonth', endMonth,
			'endDay', endDay
		);
	}
}
customElements.define('d2l-work-to-do-activity-list-header', ActivityListHeader);
