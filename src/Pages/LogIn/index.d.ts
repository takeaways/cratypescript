export interface LogInTypes {
	userId: string;
	userPw: string;
	onChangeId: (e: InputEvent) => void;
	onChangePw: (e: InputEvent) => void;
	onSubmit: (e: FormEvent) => void;
}
