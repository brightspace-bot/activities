import './d2l-activity-quiz-editor-detail.js';
import { ActivityEditorMixin } from '../mixins/d2l-activity-editor-mixin.js';
import { AsyncContainerMixin } from '@brightspace-ui/core/mixins/async-container/async-container-mixin.js';
import { html } from 'lit-element/lit-element.js';
import { MobxLitElement } from '@adobe/lit-mobx';
import { RtlMixin } from '@brightspace-ui/core/mixins/rtl-mixin.js';
class QuizEditor extends AsyncContainerMixin(RtlMixin(ActivityEditorMixin(MobxLitElement))) {

	static get properties() {
		return {
			/**
			* Set the WidthType on the template to constrain page width if necessary
			*/
			widthType: { type: String, attribute: 'width-type' },
			/**
			 * Is Creating New
			 */
			isNew: { type: Boolean },
		};
	}

	constructor() {
		super();
		this.type = 'quiz';
		this.telemetryId = 'quiz';
	}

	render() {
		return html`
			<d2l-activity-editor
				type="${this.type}"
				telemetryId="${this.telemetryId}"
				.href=${this.href}
				.token=${this.token}
				width-type="${this.widthType}"
				error-term=""
				?isnew="${this.isNew}">

				${this._editorTemplate}

			</d2l-activity-editor>
		`;
	}

	get _editorTemplate() {
		return html`
			<slot name="editor-nav" slot="header"></slot>
			<div slot="primary">
				<d2l-activity-quiz-editor-detail
					activity-usage-href=${this.href}
					.href="${this.href}"
					.token="${this.token}">
				</d2l-activity-quiz-editor-detail>
			</div>
			<div slot="secondary"></div>
		`;
	}
}
customElements.define('d2l-activity-quiz-editor', QuizEditor);
