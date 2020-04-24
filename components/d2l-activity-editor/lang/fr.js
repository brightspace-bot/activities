/* eslint quotes: 0 */

export default {
	"btnEditReleaseConditions": "Modifier les conditions de diffusion", // edit release conditions button
	"btnAddReleaseCondition": "Ajouter une condition de diffusion", // add release condition button
	"btnCreateNew": "Créer", // create new button
	"btnAddExisting": "Ajouter existant", // add existing button
	"btnRemoveCondition": "Supprimer la condition", // remove condition button
	"lblConditionsOperator": "Pour consulter cet article, les utilisateurs doivent respecter", // conditions operator label
	"txtNumReleaseConditions": "{count, plural, =1 {{count} Release Condition} other {{count} Release Conditions}}", // num release condition text
	"btnCancel": "Annuler", // cancel button
	"btnSave": "Enregistrer", // save and close button
	"dueDate": "Date d’échéance", // ARIA label for the due date field when creating/editing an activity
	"endDate": "Date de fin", // ARIA label for the end date field when creating/editing an activity
	"startDate": "Date de début", // ARIA label for the start date field when creating/editing an activity
	"dueTime": "Heure d’échéance", // ARIA label for the due time field when creating/editing an activity
	"endTime": "Heure de fin", // ARIA label for the end time field when creating/editing an activity
	"startTime": "Heure de début", // ARIA label for the start time field when creating/editing an activity
	"hidden": "Masqué", // Label displayed with the visibility switch when hidden
	"ariaHidden": "Masqué pour les élèves", // Aria Label for the visibility switch when hidden
	"noDueDate": "Aucune date d’échéance", // Placeholder text for due date field when no due date is set
	"noEndDate": "Pas de date de fin", // Placeholder text for due date field when no due date is set
	"noStartDate": "Pas de date de début", // Placeholder text for due date field when no due date is set
	"visible": "Visible", // Label displayed with the visibility switch when visible
	"ariaVisible": "Visible pour les étudiants", // Aria Label for the visibility switch when visible
	"txtAvailabilityStartAndEnd": "La disponibilité commence le {startDate} et se termine le {endDate}", // start/end text
	"txtAvailabilityStartOnly": "La disponibilité commence le {startDate}", // start only text
	"txtAvailabilityEndOnly": "La disponibilité se termine le {endDate}", // end only text
	"txtAvailabilityNeither": "Toujours disponible", // always available text
	"ungraded": "Non noté", // State of score field when there is no score and no grade item, when creating/editing an activity
	"inGrades": "Dans Notes", // State of the grades field when there is a score, and an associated grade item
	"notInGrades": "Pas dans Notes d’appréciation", // State of the grades field when there is a score, but no associated grade item
	"addToGrades": "Ajouter à Notes", // Menu item for adding grade association
	"removeFromGrades": "Retirer des Notes d’appréciation", // Menu item for removing grade association
	"setUngraded": "Réinitialisation au statut non noté", // Menu item for setting the activity to ungraded
	"scoreOutOf": "Note sur", // ARIA label for the score out of field, when creating/editing an activity
	"emptyScoreOutOfError": "Une valeur en points doit être précisée pour les activités dans l’outil Notes d’appréciation", // Error message to inform user that the score out of value is a required field when a grade item is associated
	"invalidScoreOutOfError": "La note sur doit être égale ou supérieure à 0,01 et égale ou inférieure à 9 999 999 999.", // Error message when an invalid score out of value is entered
	"loading": "Chargement…", // Message displayed while page is loading
	"ok": "Ok", // Text of dialog button to commit action
	"cancel": "Annuler", // Text of dialog button to cancel action
	"ariaToolbarShortcutInstructions": "Cliquez sur Alt + F10 pour afficher la barre d’outils et sur Échap pour la faire disparaître.", // Instructions for screenreader users on how to enter and exit the html editor toolbar
	"chooseFromGrades": "Faire un choix dans les Notes d\'appréciation", // Link text and dialog title for the edit grades dialog,
	"hdrRubrics": "Rubriques", //Header for the rubrics section
	"startBeforeEndDate": "La date du début doit être antérieure à la date de fin.",
	"dueBetweenStartEndDate": "La date d\'échéance doit être postérieure à la date du début et antérieure ou correspondre à la date de fin.",
	"dueAfterStartDate": "La date d\'échéance doit être postérieure à la date du début.",
	"dueBeforeEndDate": "La date d\'échéance doit être antérieure ou correspondre à la date de fin.",
	"createAndLinkToNewGradeItem": "Créer et lier un élément de note", //Radio button text
	"linkToExistingGradeItem": "Lien vers un élément de note existant", //Radio button text
	"points": "Points : {points}", // Text label for displaying points of a grade
	"noGradeItems": "No existing Grade Items exist to be linked", // Reason why existing grade items cannot be linked in the choose grades dialog
	"noGradeCreatePermission": "You do not have permission to create a new grade item" // Reason why a new grade items cannot be created in the choose grades dialog
};
