'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangSvImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.sv = {
			'activityName': 'Aktivitetsnamn',
			'caughtUp': 'You\'re all caught up!',
			'checkBackOften': 'Check back often for new submissions.',
			'clearSearch': 'Rensa sökning',
			'courseName': 'Kurs',
			'displayName': 'Förnamn, efternamn',
			'evaluate': 'Evaluate {displayName}',
			'failedToFilter': 'Unable to apply filter. Try again in a few minutes.',
			'failedToLoadData': 'Unable to load submissions. Try again in a few minutes.',
			'failedToLoadMore': 'Unable to load more submissions. Try again in a few minutes.',
			'failedToSearch' : 'Unable to apply search. Try again in a few minutes.',
			'firstName': 'First Name',
			'lastName': 'Last Name',
			'loadMore': 'Ladda mer',
			'loading': 'Laddar',
			'masterTeacher': 'Teacher',
			'noCriteriaMatch': 'There are no submissions that match your filter criteria.',
			'noResults': 'No results here.',
			'noSubmissions': 'There are no submissions that need your attention.',
			'search': 'Search',
			'searchResultsSingle': '1 Sökresultat',
			'searchResultsMultiple': '{num} Sökresultat',
			'sortBy': 'Sort by {columnName}',
			'submissionDate': 'Inlämningsdatum',
			'tableTitle': 'List of unevaluated Learner submissions from across courses and tools',
			'tryAgain': 'Try Again'
		};
	}
};

export const LangSv = dedupingMixin(LangSvImpl);
