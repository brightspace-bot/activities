import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {QuickEvalLocalize} from './QuickEvalLocalize.js';
import {QuickEvalLogging} from './QuickEvalLogging.js';
import 'd2l-alert/d2l-alert.js';
import 'd2l-typography/d2l-typography-shared-styles.js';
import 'd2l-table/d2l-table.js';
import 'd2l-button/d2l-button.js';
import 'd2l-offscreen/d2l-offscreen.js';
import 'd2l-polymer-behaviors/d2l-dom-focus.js';
import 'd2l-link/d2l-link.js';
import 'd2l-users/components/d2l-profile-image.js';
import '../d2l-activity-name/d2l-activity-name.js';
import '../d2l-activity-evaluation-icon/d2l-activity-evaluation-icon-base.js';
import './d2l-quick-eval-no-submissions-image.js';
import './d2l-quick-eval-no-criteria-results-image.js';
import './d2l-quick-eval-skeleton.js';
import 'd2l-loading-spinner/d2l-loading-spinner.js';
import {StringEndsWith} from './compatability/ie11shims.js';

/**
 * @customElement
 * @polymer
 */

class D2LQuickEvalSubmissionsTable extends QuickEvalLogging(QuickEvalLocalize(PolymerElement)) {
	static get template() {
		const quickEvalSubmissionsTableTemplate = html`
			<style include="d2l-table-style">
				.d2l-quick-eval-table {
					--d2l-table-body-background-color: transparent;
					--d2l-table-light-header-background-color: transparent;
				}
				d2l-td {
					font-size: 0.7rem;
				}
				d2l-td.d2l-username-column {
					font-size: 0.8rem;
				}
				.d2l-user-badge-image {
					display: inline-block;
					padding-right: 0.6rem;
					vertical-align: middle;
				}
				:host(:dir(rtl)) .d2l-user-badge-image {
					padding-right: 0;
					padding-left: 0.6rem;
				}
				/* Needed for Edge */
				d2l-table-col-sort-button span {
					color: var(--d2l-color-ferrite);
				}
				d2l-quick-eval-skeleton {
					width: 100%;
				}
				d2l-alert {
					margin: auto;
					margin-top: 1rem;
				}
				.d2l-quick-eval-submissions-table-load-more-container {
					padding-top: 1rem;
					text-align: right;
					width: 100%;
				}
				:host(:dir(rtl)) .d2l-quick-eval-submissions-table-load-more-container {
					text-align: left;
				}
				.d2l-quick-eval-30-column {
					width: 30%;
				}
				.d2l-quick-eval-25-column {
					width: 25%;
				}
				.d2l-quick-eval-20-column {
					width: 20%;
				}
				.d2l-quick-eval-15-column {
					width: 15%;
				}
				.d2l-quick-eval-truncated-column {
					max-width: 10rem;
					white-space: nowrap;
				}
				d2l-activity-evaluation-icon-base {
					padding-left: 0.6rem;
				}
				d2l-loading-spinner {
					width: 100%;
				}
				:host(:dir(rtl)) d2l-activity-evaluation-icon-base {
					padding-left: 0;
					padding-right: 0.6rem;
				}
				d2l-activity-name {
					padding-right: 1.4rem;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				:host(:dir(rtl)) d2l-activity-name {
					padding-right: 0;
					padding-left: 1.4rem;
				}
				.d2l-course-name-column {
					overflow: hidden;
					text-overflow: ellipsis;
				}
				[hidden] {
					display: none;
				}
				.d2l-quick-eval-no-submissions,
				.d2l-quick-eval-no-criteria-results {
					text-align: center;
				}
				d2l-quick-eval-no-submissions-image {
					padding-top: 30px;
					padding-bottom: 30px;
					height: 35%;
					width: 35%;
				}
				d2l-quick-eval-no-criteria-results-image {
					padding-top: 30px;
					padding-bottom: 30px;
					height: 15%;
					width: 15%;
				}
				.d2l-quick-eval-no-submissions-heading,
				.d2l-quick-eval-no-criteria-results-heading {
					@apply --d2l-heading-2;
					margin: 0;
				}
				.d2l-body-standard {
					@apply --d2l-body-compact-text;
				}
			</style>
			<d2l-offscreen id="d2l-quick-eval-submissions-table-table-summary">[[localize('tableTitle')]]</d2l-offscreen>
			<d2l-table class="d2l-quick-eval-table" type="light" hidden$="[[_fullListLoading]]" aria-describedby$="d2l-quick-eval-submissions-table-table-summary" aria-colcount$="[[_headerColumns.length]]" aria-rowcount$="[[_data.length]]">
				<d2l-thead>
					<d2l-tr>
						<dom-repeat items="[[_headerColumns]]" as="headerColumn">
							<template>
								<template is="dom-if" if="[[_shouldDisplayColumn(headerColumn.key)]]">
									<d2l-th class$=[[_getWidthCssClass(headerColumn.key)]]>
										<dom-repeat items="[[headerColumn.headers]]" as="header">
											<template>
												<template is="dom-if" if="[[header.canSort]]">
													<d2l-table-col-sort-button
														nosort$="[[!header.sorted]]"
														desc$="[[header.desc]]"
														on-click="_dispatchSortRequestedEvent"
														id="[[header.key]]"
														title="[[_localizeSortText(header.key)]]"
														aria-label$="[[_localizeSortText(header.key)]]"
														aria-live="assertive"
													>
														<span aria-hidden="true">[[localize(header.key)]]</span>
													</d2l-table-col-sort-button>
													<template is="dom-if" if="[[header.suffix]]">
														<span>[[header.suffix]]&nbsp;</span>
													</template>
												</template>
												<template is="dom-if" if="[[!header.canSort]]">
													<span>[[localize(header.key)]]</span>
													<template is="dom-if" if="[[header.suffix]]">
														<span>[[header.suffix]]&nbsp;</span>
													</template>
												</template>
											</template>
										</dom-repeat>
									</d2l-th>
								</template>
							</template>
						</dom-repeat>
					</d2l-tr>
				</d2l-thead>
				<d2l-tbody>
					<dom-repeat items="[[_data]]" as="s">
						<template>
							<d2l-tr>
								<d2l-td class="d2l-username-column">
									<template is="dom-if" if="[[s.userHref]]">
										<d2l-profile-image
											class="d2l-user-badge-image"
											href="[[s.userHref]]"
											token="[[token]]"
											small=""
											aria-hidden="true">
										</d2l-profile-image>
									</template>
									<d2l-link
										title="[[_localizeEvaluationText(s, _headerColumns.0.meta.firstThenLast)]]"
										href="[[s.activityLink]]"
										aria-label$="[[_localizeEvaluationText(s, _headerColumns.0.meta.firstThenLast)]]"
									>[[_formatDisplayName(s, _headerColumns.0.meta.firstThenLast)]]</d2l-link>
									<d2l-activity-evaluation-icon-base draft$="[[s.isDraft]]"></d2l-activity-evaluation-icon-base>
								</d2l-td>
								<d2l-td class="d2l-quick-eval-truncated-column d2l-activity-name-column">
									<d2l-activity-name href="[[s.activityNameHref]]" token="[[token]]"></d2l-activity-name>
								</d2l-td>
								<d2l-td class="d2l-quick-eval-truncated-column d2l-course-name-column">
									<span>[[s.courseName]]</span>
								</d2l-td>
								<d2l-td>
									<span>[[_localizeDateTimeFormat(s.submissionDate)]]</span>
								</d2l-td>
								<template is="dom-if" if="[[_shouldDisplayColumn('masterTeacher')]]">
									<d2l-td>
										<span>[[s.masterTeacher]]</span>
									</d2l-td>
								</template>
							</d2l-tr>
						</template>
					</dom-repeat>
				</d2l-tbody>
			</d2l-table>
			<d2l-alert id="list-alert" type="critical" hidden$="[[_health.isHealthy]]">
				[[localize(_health.errorMessage)]]
			</d2l-alert>
			<d2l-offscreen role="alert" aria-live="aggressive" hidden$="[[!_loading]]">[[localize('loading')]]</d2l-offscreen>
			<d2l-quick-eval-skeleton hidden$="[[!_fullListLoading]]"></d2l-quick-eval-skeleton>
	     	<d2l-loading-spinner size="80" hidden$="[[!_isLoadingMore(_fullListLoading,_loading)]]"></d2l-loading-spinner>

			<template is="dom-if" if="[[_shouldShowLoadMore(_pageNextHref, _loading)]]">
				<div class="d2l-quick-eval-submissions-table-load-more-container">
					<d2l-button class="d2l-quick-eval-submissions-table-load-more" onclick="[[_dispatchLoadMore]]">[[localize('loadMore')]]</d2l-button>
				</div>
			</template>
			<template is="dom-if" if="[[_shouldShowNoSubmissions(_data.length, _loading, _health.isHealthy, filterApplied, searchApplied)]]">
				<div class="d2l-quick-eval-no-submissions">
					<d2l-quick-eval-no-submissions-image></d2l-quick-eval-no-submissions-image>
					<h2 class="d2l-quick-eval-no-submissions-heading">[[localize('caughtUp')]]</h2>
					<p class="d2l-body-standard">[[localize('noSubmissions')]]</p>
					<p class="d2l-body-standard">[[localize('checkBackOften')]]</p>
				</div>
			</template>
			<template is="dom-if" if="[[_shouldShowNoCriteriaResults(_data.length, _loading, _health.isHealthy, filterApplied, searchApplied)]]">
				<div class="d2l-quick-eval-no-criteria-results">
					<d2l-quick-eval-no-criteria-results-image></d2l-quick-eval-no-criteria-results-image>
					<h2 class="d2l-quick-eval-no-criteria-results-heading">[[localize('noResults')]]</h2>
					<p class="d2l-body-standard">[[localize('noCriteriaMatch')]]</p>
				</div>
			</template>
		`;

		quickEvalSubmissionsTableTemplate.setAttribute('strip-whitespace', 'strip-whitespace');
		return quickEvalSubmissionsTableTemplate;
	}
	static get is() { return 'd2l-quick-eval-submissions-table'; }
	static get properties() {
		return {
			masterTeacher: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},
			filterApplied: {
				type: Boolean,
				value: false
			},
			searchApplied: {
				type: Boolean,
				value: false
			},
			_headerColumns: {
				type: Array,
				value: []
			},
			_data: {
				type: Array,
				value: [ ]
			},
			_fullListLoading: {
				type: Boolean,
				value: true
			},
			_health: {
				type: Object,
				value: {
					isHealthy: true,
					errorMessage: ''
				}
			},
			_loading: {
				type: Boolean,
				value: true
			},
			_pageNextHref: {
				type: String,
				value: ''
			}
		};
	}
	static get observers() {
		return [
			'_handleNameSwap(_headerColumns.0.headers.*)'
		];
	}

	_isLoadingMore(fullListLoading, isLoading) {
		return !fullListLoading && isLoading;
	}

	_handleNameSwap(entry) {
		if (entry && StringEndsWith(entry.path, '1.sorted')) {
			const tmp = this._headerColumns[0].headers[0];
			this.set('_headerColumns.0.headers.0', this._headerColumns[0].headers[1]);
			this.set('_headerColumns.0.headers.1', tmp);
			this.set('_headerColumns.0.headers.0.suffix', ',');
			this.set('_headerColumns.0.headers.1.suffix', '');
			this.set('_headerColumns.0.meta.firstThenLast', this._headerColumns[0].headers[0].key === 'firstName');
		}
	}

	_shouldShowLoadMore(hasPageNextHref, isLoading) {
		return hasPageNextHref && !isLoading;
	}

	_shouldShowNoSubmissions(dataLength, isLoading, isHealthy, filterApplied, searchApplied) {
		return !dataLength && !isLoading && isHealthy && !(filterApplied || searchApplied);
	}

	_shouldShowNoCriteriaResults(dataLength, isLoading, isHealthy, filterApplied, searchApplied) {
		return !dataLength && !isLoading && isHealthy && (filterApplied || searchApplied);
	}

	_clearAlerts() {
		this.set('_health', { isHealthy: true, errorMessage: '' });
	}

	_handleLoadMoreFailure() {
		this.set('_health', { isHealthy: false, errorMessage: 'failedToLoadMore' });
	}

	_handleFullLoadFailure() {
		this.set('_health', { isHealthy: false, errorMessage: 'failedToLoadData' });
	}

	_localizeSortText(columnName) {
		const localizedColumnName = this.localize(columnName);
		return this.localize('sortBy', 'columnName', localizedColumnName);
	}

	_localizeEvaluationText(
		data,
		firstThenLast
	) {
		const formattedDisplayName = this._formatDisplayName(data, firstThenLast);
		return this.localize('evaluate', 'displayName', formattedDisplayName);
	}

	_formatDisplayName(
		data,
		firstThenLast
	) {
		const firstName = data.displayName.firstName;
		const lastName = data.displayName.lastName;
		const defaultDisplayName = data.displayName.defaultDisplayName;

		if (!lastName && !firstName) {
			return defaultDisplayName;
		}
		if (!lastName) {
			return firstName;
		}
		if (!firstName) {
			return lastName;
		}

		if (firstThenLast) {
			return firstName + ' ' + lastName;
		}

		return lastName + ', ' + firstName;
	}

	_localizeDateTimeFormat(localizedDate) {
		return this.formatDateTime(new Date(localizedDate));
	}

	_getWidthCssClass(columnKey) {
		if (this.masterTeacher) {
			switch (columnKey) {
				case 'displayName':
					return 'd2l-quick-eval-25-column';
				case 'activityName':
				case 'courseName':
				case 'masterTeacher':
					return 'd2l-quick-eval-20-column';
				case 'submissionDate':
					return 'd2l-quick-eval-15-column';
				default:
					throw new Error(`Invalid column key: ${columnKey}`);
			}
		} else {
			switch (columnKey) {
				case 'displayName':
					return 'd2l-quick-eval-30-column';
				case 'activityName':
				case 'courseName':
					return 'd2l-quick-eval-25-column';
				case 'submissionDate':
					return 'd2l-quick-eval-20-column';
				default:
					throw new Error(`Invalid column key: ${columnKey}`);
			}
		}
	}

	_shouldDisplayColumn(columnKey) {
		if (columnKey === 'masterTeacher') {
			return this.masterTeacher;
		}
		return true;
	}

	_dispatchSortRequestedEvent(evt) {
		const headerId = evt.currentTarget.id;

		this.dispatchEvent(
			new CustomEvent(
				'd2l-quick-eval-submissions-table-sort-requested',
				{
					detail: {
						headerId: headerId
					},
					composed: true,
					bubbles: true
				}
			)
		);
	}

	_dispatchLoadMore() {
		this.dispatchEvent(
			new CustomEvent(
				'd2l-quick-eval-submissions-table-load-more',
				{
					composed: true,
					bubbles: true
				}
			)
		);
	}
}

window.customElements.define(D2LQuickEvalSubmissionsTable.is, D2LQuickEvalSubmissionsTable);