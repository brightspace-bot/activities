import { css, html } from 'lit-element/lit-element.js';
import { ActivityEditorMixin } from '../mixins/d2l-activity-editor-mixin.js';
import { LocalizeActivityQuizEditorMixin } from './mixins/d2l-activity-quiz-lang-mixin';
import { MobxLitElement } from '@adobe/lit-mobx';
import { RtlMixin } from '@brightspace-ui/core/mixins/rtl-mixin.js';
import { shared as store } from './state/quiz-store';

class ActivityQuizDisableRightClickEditor
	extends ActivityEditorMixin(RtlMixin(LocalizeActivityQuizEditorMixin(MobxLitElement))) {

	static get styles() {

		return [
			css`
			:host {
				display: block;
			}

			:host([hidden]) {
				display: none;
			}

			d2l-input-checkbox {
				padding-right: 1rem;
			}

			:host([dir="rtl"]) d2l-input-checkbox {
				padding-left: 1rem;
				padding-right: 0;
			}
			`
		];
	}

	constructor() {
		super(store);
	}

	render() {
		const entity = store.get(this.href);
		if (!entity) {
			return html``;
		}

		return html`
			<d2l-input-checkbox-spacer
				class="d2l-body-small">
			</d2l-input-checkbox-spacer>

			<d2l-input-checkbox
				?checked="${entity.isDisableRightClickEnabled}"
				@change="${this._setDisableRightClick}"
				ariaLabel="${this.localize('disableRightClickDescription')}"
				?disabled="${!entity.canEditDisableRightClick}">
				${this.localize('disableRightClickDescription')}
			</d2l-input-checkbox>
		`;
	}

	_setDisableRightClick(event) {
		const entity = store.get(this.href);
		entity.setDisableRightClick(event.target.checked);
	}
}

customElements.define(
	'd2l-activity-quiz-disable-right-click-editor',
	ActivityQuizDisableRightClickEditor
);
