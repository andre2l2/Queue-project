export default class StrValidator {
	constructor() {}

	isEmpty(str: string): boolean {
		return str.length <= 0;
	}

	isValidEmail(email: string): boolean {
		return email.search(/@/g) > 0;
	}
}
