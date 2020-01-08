import '../d2l-activity-visibility-editor.js';
import { css, html, LitElement } from 'lit-element/lit-element.js';
import { AssignmentEntity } from 'siren-sdk/src/activities/assignments/AssignmentEntity.js';
import { EntityMixinLit } from 'siren-sdk/src/mixin/entity-mixin-lit.js';
import { getLocalizeResources } from '../localization.js';
import { LocalizeMixin } from '@brightspace-ui/core/mixins/localize-mixin.js';
import { RtlMixin } from '@brightspace-ui/core/mixins/rtl-mixin.js';
import { SaveStatusMixin } from '../save-status-mixin.js';

class AssignmentEditorFooter extends SaveStatusMixin(EntityMixinLit(RtlMixin(LocalizeMixin(LitElement)))) {

	static get properties() {
		return {
			_activityUsageHref: { type: String }
		};
	}

	static get styles() {
		return css`
			:host {
				display: flex;
			}
			:host([hidden]) {
				display: none;
			}
			d2l-button {
				margin-right: 0.75rem;
			}
			:host([dir="rtl"]) d2l-button {
				margin-left: 0.75rem;
				margin-right: 0;
			}
			d2l-activity-visibility-editor {
				display: inline-block;
			}
			.d2l-activity-assignment-editor-footer-left {
				flex: 1;
			}
		`;
	}

	static async getLocalizeResources(langs) {
		return getLocalizeResources(langs, import.meta.url);
	}

	constructor() {
		super();
		this._setEntityType(AssignmentEntity);

		this._activityUsageHref = '';
	}

	set _entity(entity) {
		if (this._entityHasChanged(entity)) {
			this._onAssignmentChange(entity);
			super._entity = entity;
		}
	}

	_onAssignmentChange(assignment) {
		if (!assignment) {
			return;
		}

		this._activityUsageHref = assignment.activityUsageHref();
	}

	render() {
		return html`
			<div class="d2l-activity-assignment-editor-footer-left">
				<d2l-button primary>${this.localize('btnSave')}</d2l-button>
				<d2l-button>${this.localize('btnCancel')}</d2l-button>
				<d2l-activity-visibility-editor
					href="${this._activityUsageHref}"
					.token="${this.token}">
				</d2l-activity-visibility-editor>
			</div>
			<div class="d2l-activity-assignment-editor-footer-right">
				<slot name="save-status"></slot>
			</div>
		`;
	}
}
customElements.define('d2l-activity-assignment-editor-footer', AssignmentEditorFooter);
