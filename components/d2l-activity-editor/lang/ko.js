/* eslint quotes: 0 */

export default {
	"editor.btnEditReleaseConditions": "릴리스 조건 편집", // edit release conditions button
	"editor.btnAddReleaseCondition": "릴리스 조건 추가", // add release condition button
	"editor.btnCreateNew": "새로 만들기", // create new button
	"editor.btnAddExisting": "기존 항목 추가", // add existing button
	"editor.btnRemoveCondition": "조건 제거", // remove condition button
	"editor.lblConditionsOperator": "이 항목을 보려면 사용자가 다음을 충족해야 합니다.", // conditions operator label
	"editor.txtNumReleaseConditions": "{count, plural, =1 {{count}개 릴리스 조건} other {{count}개 릴리스 조건}}", // num release condition text
	"editor.txtNumSpecialAccess": "{userCount, plural, =1 {1 user with special access} other {{userCount} users with special access}}", // num users with special access text
	"editor.btnCancel": "취소", // cancel button
	"editor.btnSave": "저장 및 닫기", // save and close button
	"editor.btnSaveMobile": "저장", // save and close button for mobile devices
	"editor.dueDate": "기한", // ARIA label for the due date field when creating/editing an activity
	"editor.endDate": "종료일", // ARIA label for the end date field when creating/editing an activity
	"editor.startDate": "시작일", // ARIA label for the start date field when creating/editing an activity
	"editor.dueTime": "기한 시간", // ARIA label for the due time field when creating/editing an activity
	"editor.endTime": "종료 시각", // ARIA label for the end time field when creating/editing an activity
	"editor.startTime": "시작 시각", // ARIA label for the start time field when creating/editing an activity
	"editor.hidden": "숨김", // Label displayed with the visibility switch when hidden
	"editor.noDueDate": "기한 없음", // Placeholder text for due date field when no due date is set
	"editor.noEndDate": "종료일 없음", // Placeholder text for due date field when no due date is set
	"editor.noStartDate": "시작일 없음", // Placeholder text for due date field when no due date is set
	"editor.visible": "표시", // Label displayed with the visibility switch when visible
	"editor.txtAvailabilityStartAndEnd": "사용 가능 날짜는 {startDate}에 시작되고 {endDate}에 종료됩니다.", // start/end text
	"editor.txtAvailabilityStartOnly": "사용 가능 날짜 시작일 {startDate}", // start only text
	"editor.txtAvailabilityEndOnly": "사용 가능 날짜 종료일 {endDate}", // end only text
	"editor.txtAvailabilityNeither": "항상 사용 가능", // always available text
	"editor.ungraded": "평점 미산정", // State of score field when there is no score and no grade item, when creating/editing an activity
	"editor.inGrades": "평점 내", // State of the grades field when there is a score, and an associated grade item
	"editor.notInGrades": "평점에 없음", // State of the grades field when there is a score, but no associated grade item
	"editor.addToGrades": "평점에 추가", // Menu item for adding grade association
	"editor.addAGrade": "평점 추가", //ARIA label to add a grade to the activity
	"editor.removeFromGrades": "평점에서 삭제됩니다.", // Menu item for removing grade association
	"editor.setUngraded": "평점 없음으로 재설정", // Menu item for setting the activity to ungraded
	"editor.scoreOutOf": "기준 만점 점수", // ARIA label for the score out of field, when creating/editing an activity
	"editor.emptyScoreOutOfError": "평점 내 활동에 대한 포인트 값을 지정해야 합니다.", // Error message to inform user that the score out of value is a required field when a grade item is associated
	"editor.invalidScoreOutOfError": "기준 만점 점수는 0.01 이상 9,999,999,999 이하여야 합니다.", // Error message when an invalid score out of value is entered
	"editor.loading": "로드 중...", // Message displayed while page is loading
	"editor.ok": "확인", // Text of dialog button to commit action
	"editor.cancel": "취소", // Text of dialog button to cancel action
	"editor.ariaToolbarShortcutInstructions": "도구 모음을 불러오려면 ALT-F10을 누르고, 도구 모음을 끝내려면 도구 모음 내에서 ESC를 누르십시오.", // Instructions for screenreader users on how to enter and exit the html editor toolbar
	"editor.chooseFromGrades": "평점 중에서 선택하십시오.", // Link text and dialog title for the edit grades dialog,
	"editor.hdrRubrics": "루브릭", //Header for the rubrics section
	"editor.startBeforeEndDate": "시작일은 종료일 이전이어야 합니다.",
	"editor.dueBetweenStartEndDate": "기한은 시작 날짜 이후여야 하며 종료 날짜 이전이거나 종료일과 같아야 합니다.",
	"editor.dueAfterStartDate": "기한은 시작일 이후여야 합니다.",
	"editor.dueBeforeEndDate": "기한은 종료일 이전이거나 종료일과 같아야 합니다.",
	"editor.createAndLinkToNewGradeItem": "새 평점 항목을 생성하고 연결합니다.", //Radio button text
	"editor.linkToExistingGradeItem": "기존 평점 항목에 연결합니다.", //Radio button text
	"editor.points": "점수: {points}", // Text label for displaying points of a grade
	"editor.noGradeItems": "기존 평점 항목이 없습니다.", // Reason why existing grade items cannot be linked in the choose grades dialog
	"editor.noGradeCreatePermission": "새 평점 항목을 생성할 권한이 없습니다.", // Reason why a new grade items cannot be created in the choose grades dialog
	"editor.competencies": "학습 목표", //Text label for the competencies tool integration
	"editor.manageCompetencies": "학습 목표 관리", //Button text to launch competencies tool dialog
	"editor.competenciesCount": "{count, plural, =0 {학습 목표 없음} =1 {1개 첨부됨} other {{count}개 첨부됨}}", //Label for number of associated competencies
	"editor.competenciesCountSummary": "{count, plural, =0 {학습 목표 없음} =1 {1개 학습 목표} other {{count}개 학습 목표}}",
	"editor.unevaluatedCompetencies": "{count, plural, =1 {1개 평가 누락} other {{count}개 평가 누락}}", //Label for number of unevalated associated competencies
	"editor.btnClose": "닫기", //Label for Close button
	"editor.btnCloseDialog": "이 대화 상자 닫기", // close dialog button
	"editor.btnManageSpecialAccess": "Manage Special Access", // manage special access button
	"editor.specialAccessRestrictedText": "Only users with special access can see this folder", // restricted special access description
	"editor.specialAccessNotRestrictedText": "Users can submit outside normal availability dates", // not restricted special access description
	"editor.specialAccessCount": "{count, plural, =0 {No users} =1 {1 user} other {{count} users}} with special access", // Label for number of special access users
	"editor.specialAccessDialogTitle": "Manage Special Access", // Dialog title
	"editor.specialAccessHidden": "Hidden by special access", // Warning label that the activity is restricted but is being hidden from all users by special access rules

	"rubrics.btnAddRubric": "루브릭 추가", //text for add rubric button
	"rubrics.btnCreateNew": "새로 만들기", //Text for create new dropdown
	"rubrics.btnAddExisting": "기존 항목 추가", //Text for Add Existing dropdown
	"rubrics.hdrRubrics": "루브릭", //Header for the rubrics section
	"rubrics.btnAttachRubric": "루브릭 부착", //Button for the attach new rubric overlay
	"rubrics.btnCancel": "취소", //Button for canceling out of the attach new rubric overlay
	"rubrics.txtAddExisting": "기존 항목 추가", //Title for the attach rubrics dialog,
	"rubrics.txtNoRubricAdded": "추가된 루브릭 없음", // rubric summary for no rubrics
	"rubrics.txtRubricsAdded": "{count, plural, =1 {루브릭 1개 추가} other {{count}개 루브릭 추가}}", // count of asoociated rubrics
	"rubrics.txtDeleteRubric": "루브릭 삭제", // Text for deleting rubric icon
	"rubrics.btnClose": "닫기", // X button for exiting the create new rubric overlay
	"rubrics.txtRubricAdded": "Rubric added", // Text for notifying screenreader rubric was added
	"rubrics.txtRubricRemoved": "Rubric removed", // Text for notifying screenreader rubric was removed
	"rubrics.defaultScoringRubric": "Default Scoring Rubric", // Sub heading for the default scoring rubric select dropdown
	"rubrics.noDefaultScoringRubricSelected": "No default selected", // option in default scoring rubric when no default scoring rubric selected

	"grades.points": "점수: {points}", // Text label for displaying points of a grade
	"grades.weight": "가중치: {weight}", // Text label for displaying weight of a grade
	"grades.gradeItem": "평점 항목", //ARIA label for grade-item picker when linking an activity to an existing grade item
	"grades.newGradeItemCategory": "평점 범주", // Label for selecting a category dropdown
	"grades.noGradeItemCategory": "범주 없음", // Category dropdown text for not selecting a category

	"attachments.addGoogleDriveLink": "Google Drive에서 첨부", // Tooltip for a button that adds a link to a Google Drive file
	"attachments.addFile": "파일 업로드", // Tooltip for a button that opens a file upload dialog
	"attachments.addLink": "웹 링크 첨부", // Tooltip for a button that adds a link to a URL
	"attachments.addOneDriveLink": "OneDrive에서 첨부", // Tooltip for a button that adds a link to a OneDrive file
	"attachments.addQuicklink": "기존 활동에 대한 링크 첨부", // Tooltip for a button that adds a link to an existing activity
	"attachments.back": "뒤로", // Text for a back button
	"attachments.closeDialog": "대화 상자 닫기", // ARIA text for button to close dialog
	"attachments.recordAudio": "오디오 녹음", // Text for a button that opens a dialog to record audio
	"attachments.recordVideo": "동영상 녹화", // Text for a button that opens a dialog to record video
	"attachments.save": "저장", // Text for a save button,
	"attachments.attach": "첨부", // Text for Attach button to open attachment row
	"attachments.addGoogleDriveLinkMenu": "Google Drive", // Attach menu item text
	"attachments.addFileMenu": "파일 업로드", // Attach menu item text
	"attachments.addLinkMenu": "웹 링크", // Attach menu item text
	"attachments.addOneDriveLinkMenu": "OneDrive", // Attach menu item text
	"attachments.addQuicklinkMenu": "기존 활동" // Attach menu item text
};
