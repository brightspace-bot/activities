'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangEnImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.en = {
			'draftInfo': 'Evaluation saved as draft'
		};
	}
};

export const LangEn = dedupingMixin(LangEnImpl);
