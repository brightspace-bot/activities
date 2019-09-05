import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {QuickEvalLocalize} from '../QuickEvalLocalize.js';
import 'd2l-tooltip/d2l-tooltip.js';
import 'd2l-polymer-behaviors/d2l-id.js';

const activityTypeLocalizeNew = {
	assignment: 'newSubmissions',
	discussion: 'newPosts',
	quiz: 'newAttempts'
};

const activityTypeLocalizeDetail = {
	assignment: 'newSubmissionDetails',
	quiz: 'newAttemptsDetails'
};

class D2LQuickEvalActivityCardUnreadSubmissions extends QuickEvalLocalize(PolymerElement) {
	static get is() { return 'd2l-quick-eval-activity-card-unread-submissions'; }
	static get template() {
		return html`
			<style>
				.d2l-quick-eval-activity-card-submissions-container a {
					align-items: baseline;
					display: flex;
					justify-content: space-around;
					margin: 0.35rem 0;
					cursor: pointer;
					height: 100%;
				}
				.d2l-quick-eval-activity-card-submissions-number {
					font-size: 1.2rem;
					margin: 0 0.6rem;
				}
				.d2l-quick-eval-activity-card-submissions-subtitle {
					font-size: 0.6rem;
				}
				@media (min-width: 525px) {
					.d2l-quick-eval-activity-card-submissions-container a {
						align-items: center;
						flex-direction: column;
						justify-content: space-between;
						margin: 0;
					}
					.d2l-quick-eval-activity-card-submissions-number {
						font-size: 1.5rem;
						margin: 0;
					}
					.d2l-quick-eval-activity-card-submissions-subtitle {
						font-size: 0.7rem;
						line-height: 0.5rem;
					}
				}
				.d2l-quick-eval-activity-card-submissions-container a {
					text-decoration: none;
					outline: none;
					color: var(--d2l-color-ferrite);
				}
				.d2l-quick-eval-activity-card-submissions-container a:active,
				.d2l-quick-eval-activity-card-submissions-container a:focus,
				.d2l-quick-eval-activity-card-submissions-container a:hover {
					 text-decoration: underline;
					 color: var(--d2l-color-celestine);
				}
			</style>
			<div class="d2l-quick-eval-activity-card-submissions-container">
				<a href="[[href]]" id="[[_tooltipForId]]">
					<span class="d2l-quick-eval-activity-card-submissions-number">[[_getNewSubmissionsNumber(unread, resubmitted)]]</span>
					<span class="d2l-quick-eval-activity-card-submissions-subtitle">[[_getNewSubmissionsSubtitle(activityType)]]</span>
				</a>
			</div>
			<d2l-tooltip for="[[_tooltipForId]]" position="bottom">[[_getSubmissionTooltipText(unread, resubmitted, activityType)]]</d2l-tooltip>
		`;
	}
	static get properties() {
		return {
			unread: {
				type: Number,
				value: 0
			},
			resubmitted: {
				type: Number,
				value: 0
			},
			activityType: {
				type: String
			},
			href: {
				type: String
			},
			_tooltipForId: {
				type: String,
				computed: '_computeTooltipForId()'
			}
		};
	}

	_getNewSubmissionsNumber(unread, resubmitted) {
		return unread + resubmitted;
	}
	_getNewSubmissionsSubtitle(activityType) {
		return this.localize(activityTypeLocalizeNew[activityType]);
	}
	_computeTooltipForId() {
		return D2L.Id.getUniqueId();
	}

	_getSubmissionTooltipText(unread, resubmitted, activityType) {
		if (activityType === 'discussion') {
			return this.localize('newPostDetails', 'numInteractions', unread + resubmitted);
		}
		if (activityType === 'quiz') {
			return this.localize('newAttemptsDetails', 'newNum', unread, 'reAttemptNum', resubmitted);
		}
		return this.localize(activityTypeLocalizeDetail[activityType], 'newNum', unread, 'resub', resubmitted);
	}
}

window.customElements.define(D2LQuickEvalActivityCardUnreadSubmissions.is, D2LQuickEvalActivityCardUnreadSubmissions);
