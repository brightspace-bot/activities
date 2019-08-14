'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangDadkImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.dadk = {
			'activities': 'Aktiviteter',
			'activityName': 'Aktivitetsnavn',
			'assignment': 'Assignment',
			'caughtUp': 'Du er helt med!',
			'checkBackOften': 'Kom tilbage med jævne mellemrum for at se nye afleveringer.',
			'clearSearch': 'Ryd søgning',
			'close': 'Close',
			'completed': 'Completed',
			'confirmation': 'Confirmation',
			'courseName': 'Kursus',
			'discussion': 'Discussion',
			'displayName': 'Fornavn, Efternavn',
			'due': 'Due: {date}',
			'evaluate': 'Evaluer {displayName}',
			'evaluateAll': 'Evaluate All',
			'evaluated': 'Evaluated',
			'failedToFilter': 'Kunne ikke anvende filter. Prøv igen om et par minutter.',
			'failedToLoadData': 'Kunne ikke indlæse afleveringer. Prøv igen om et par minutter.',
			'failedToLoadMore': 'Kunne ikke indlæse flere afleveringer. Prøv igen om et par minutter.',
			'failedToSearch': 'Kunne ikke gennemføre søgning. Prøv igen om et par minutter.',
			'firstName': 'Fornavn',
			'lastName': 'Efternavn',
			'loadMore': 'Indlæs flere',
			'loading': 'Indlæser',
			'masterTeacher': 'Lærer',
			'no': 'No',
			'noCriteriaMatch': 'Der er ingen afleveringer, der matcher dine kriterier.',
			'noResults': 'Ingen resultater her.',
			'noSubmissions': 'Der er ingen afleveringer, der kræver din opmærksomhed.',
			'publishAll': 'Publish All',
			'publishAllConfirmDialogMessage': '{evaluated} out of {assigned} users will receive feedback on publishing. Do you want to continue?',
			'publishAllToastMessage': '{activityName} evaluations published successfully.',
			'publishAllToastMessageTruncated': '{truncatedActivityName}… evaluations published successfully.',
			'published': 'Published',
			'quiz': 'Quiz',
			'search': 'Søg',
			'searchResultsMore': '{num}+ søgeresultater',
			'searchResultsMultiple': '{num} søgeresultater',
			'searchResultsSingle': '1 søgeresultat',
			'sortBy': 'Sortér efter {columnName}',
			'submissionDate': 'Afleveringsdato',
			'submissionList': 'Submission List',
			'submissions': 'Afleveringer',
			'tableTitle': 'Liste over ikke-evaluerede elevafleveringer på tværs af kurser og værktøjer',
			'toggleIndicatorLabel': 'Perform Actions on {target}',
			'tryAgain': 'Prøv igen',
			'newSubmissions': 'New Submissions',
			'newSubmissionDetails': '{newNum} new, {resub} resubmissions',
			'newPosts': 'New Posts',
			'newPostDetails': '{numInteractions} threads or replies',
			'newAttempts': 'New Attempts',
			'newAttemptsDetails': '{newNum} new',
			'viewBy': 'Vis efter:',
			'yes': 'Yes'
		};
	}
};

export const LangDadk = dedupingMixin(LangDadkImpl);

