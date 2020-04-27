export interface LogInTypes {
	userId: string;
	userPw: string;
	onChangeId: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangePw: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
