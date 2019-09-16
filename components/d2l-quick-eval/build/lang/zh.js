'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangZhImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.zh = {
			'activities': '活动',
			'activityName': '活动名称',
			'assignment': '作业',
			'caughtUp': '您已跟上进度！',
			'checkBackOften': '请稍后时常查看新的提交。',
			'clearSearch': '清除搜索',
			'close': '关闭',
			'completed': '已完成',
			'confirmation': '确认',
			'courseName': '课程',
			'discussion': '讨论',
			'displayName': '名字，姓氏',
			'due': '截止日期：{date}',
			'evaluate': '评估 {displayName}',
			'evaluateAll': '全部评估',
			'evaluated': '已评估',
			'failedToFilter': '无法应用筛选器。请在几分钟后重试。',
			'failedToLoadActivities': '无法加载活动。请在几分钟后重试。',
			'failedToLoadData': '无法加载提交。请在几分钟后重试。',
			'failedToLoadMore': '无法加载更多提交。请在几分钟后重试。',
			'failedToSearch': '无法应用筛选器。请在几分钟后重试。',
			'firstName': '名字',
			'lastName': '姓氏',
			'loadMore': '加载更多',
			'loading': '正在加载',
			'masterTeacher': '教师',
			'newAttempts': '新的尝试',
			'newAttemptsDetails': '{newNum, plural, =0 {{reAttemptNum, plural, =1 {1 reattempt} other {{reAttemptNum} reattempts}}} other {{reAttemptNum, plural, =0 {{newNum} new} =1{{newNum} new, 1 reattempt} other {{newNum} new, {reAttemptNum} reattempts}}}}',
			'newPostDetails': '{numInteractions, plural, =1 {1 thread or reply} other {{numInteractions} threads or replies}}',
			'newPosts': '新的发布',
			'newSubmissionDetails': '{newNum, plural, =0 {{resub, plural, =1 {1 resubmission} other {{resub} resubmissions}}} other {{resub, plural, =0 {{newNum} new} =1{{newNum} new, 1 resubmission} other {{newNum} new, {resub} resubmissions}}}}',
			'newSubmissions': '新的提交',
			'no': '否',
			'noCriteriaMatch': '没有与筛选条件匹配的提交。',
			'noCriteriaMatchActivities': '没有与您的条件匹配的活动。',
			'noResults': '此处没有结果。',
			'noSubmissions': '没有需要您注意的提交。',
			'publishAll': '全部发布',
			'publishAllConfirmDialogMessage': '{assigned} 个用户中的 {evaluated} 个用户将收到有关发布的反馈。是否继续？',
			'publishAllToastMessage': '{activityName} 评估已成功发布。',
			'publishAllToastMessageTruncated': '{truncatedActivityName}……评估已成功发布。',
			'published': '已发布',
			'quiz': '测验',
			'search': '搜索',
			'searchResultsMore': '{num}+ 搜索结果',
			'searchResultsMultiple': 'LOR 搜索结果',
			'searchResultsSingle': '个搜索结果',
			'sortBy': 'Sort by {columnName}',
			'submissionDate': '提交日期',
			'submissionList': '提交列表',
			'submissions': '提交',
			'tableTitle': '来自各个课程和工具的未评估学员提交的列表',
			'toggleIndicatorLabelActions': '在 {target} 上执行操作',
			'toggleIndicatorLabelInfo': 'View info on {target}',
			'tryAgain': '请重试',
			'viewBy': '查看方式：',
			'yes': '是'
		};
	}
};

export const LangZh = dedupingMixin(LangZhImpl);

