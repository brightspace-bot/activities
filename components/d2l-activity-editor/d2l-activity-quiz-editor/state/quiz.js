import { action, configure as configureMobx, decorate, observable } from 'mobx';
import { fetchEntity } from '../../state/fetch-entity.js';
import { QuizEntity } from 'siren-sdk/src/activities/quizzes/QuizEntity.js';

configureMobx({ enforceActions: 'observed' });

export class Quiz {
	constructor(href, token) {
		this.href = href;
		this.token = token;
		this._saving = null;
	}

	get dirty() {
		return !this._entity.equals(this._makeQuizData());
	}

	async fetch() {
		const sirenEntity = await fetchEntity(this.href, this.token);

		if (sirenEntity) {
			const entity = new QuizEntity(sirenEntity, this.token, {
				remove: () => { },
			});
			this.load(entity);
		}
		return this;
	}

	load(entity) {
		this._entity = entity;
		this.name = entity.name();
		this.canEditName = entity.canEditName();
		this.canEditHints = entity.canEditHints();
		this.hintsToolEnabled = entity.getHintsToolEnabled();
		this.password = entity.password();
		this.canEditPassword = entity.canEditPassword();
		this.canEditDisableRightClick = entity.canEditDisableRightClick();
		this.isDisableRightClickEnabled = entity.isDisableRightClickEnabled();
	}

	async save() {
		if (!this._entity) {
			return;
		}

		if (this._saving) {
			return this._saving;
		}

		this._saving = this._entity.save(this._makeQuizData());

		await this._saving;
		this._saving = null;

		await this.fetch();
	}

	setDisableRightClick(value) {
		this.isDisableRightClickEnabled = value;
	}

	setHintsToolEnabled(isHintsEnabled) {
		this.hintsToolEnabled = isHintsEnabled;
	}

	setName(value) {
		this.name = value;
	}

	setPassword(value) {
		this.password = value;
	}

	_makeQuizData() {
		/* NOTE: if you add fields here, please make sure you update the corresponding equals method in siren-sdk.
					 The cancel workflow is making use of that to detect changes.
		*/
		const data = {
			name: this.name,
			allowHints: this.hintsToolEnabled,
			password: this.password,
			disableRightClick: this.isDisableRightClickEnabled
		};

		return data;
	}
}

decorate(Quiz, {
	// props
	name: observable,
	canEditName: observable,
	canEditHints: observable,
	canEditDisableRightClick: observable,
	hintsToolEnabled: observable,
	password: observable,
	isDisableRightClickEnabled: observable,
	// actions
	load: action,
	setName: action,
	setHintsToolEnabled: action,
	setPassword: action,
	setDisableRightClick: action,
	save: action,
});
