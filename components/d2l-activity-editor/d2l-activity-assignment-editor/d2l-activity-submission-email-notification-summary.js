import { css, html } from 'lit-element/lit-element.js';
import { ActivityEditorMixin } from '../mixins/d2l-activity-editor-mixin.js';
import { LocalizeActivityAssignmentEditorMixin } from './mixins/d2l-activity-assignment-lang-mixin.js';
import { MobxLitElement } from '@adobe/lit-mobx';
import { RtlMixin } from '@brightspace-ui/core/mixins/rtl-mixin.js';
import { assignments as store } from './state/assignment-store.js';

class SubmissionEmailNotificationSummary extends ActivityEditorMixin(RtlMixin(LocalizeActivityAssignmentEditorMixin(MobxLitElement))) {

	static get styles() {
		return css`
			:host {
				display: block;
			}
			:host([hidden]) {
				display: none;
			}
		`;
	}

	constructor() {
		super(store);
	}

	render() {

		const assignment = store.get(this.href);
		if (assignment && assignment.notificationEmail) {
			return html`${this.localize('txtSubmissionEmailNotificationSummary')}`;
		}

		return html``;
	}
}

customElements.define(
	'd2l-activity-submission-email-notification-summary',
	SubmissionEmailNotificationSummary
);
