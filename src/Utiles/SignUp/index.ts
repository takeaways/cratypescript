import * as Toast from '../Toast';
export const checkUserId = (userId: string): boolean => {
	if (!userId.trim()) {
		Toast.Plain('아이디를 입력해 주세요.');
		return true;
	}
	if (userId.trim().length < 8 || userId.trim().length >= 24) {
		Toast.Plain('아이디를 8자 이상 24자 이하로 만들어 주세요.');
		return true;
	}
	return false;
};

export const checkNickname = (nickname: string): boolean => {
	if (!nickname.trim()) {
		Toast.Plain('닉네임 입력해 주세요.');
		return true;
	}
	if (nickname.trim().length <= 3 || nickname.trim().length >= 12) {
		Toast.Plain('닉네임을 3자 이상 12자 이하로 만들어 주세요.');
		return true;
	}
	return false;
};

export const checkPassword = (password: string): boolean => {
	if (!password.trim()) {
		Toast.Plain('비밀번호를 입력해 주세요.');
		return true;
	}
	const regExpPw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
	if (!password.match(regExpPw)) {
		Toast.Plain(
			'숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상으로 만들어 주세요.'
		);
		return true;
	}

	// 비밀번호 규칙 정규식
	// : 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력

	return false;
};

export const comparePassword = (
	password: string,
	checkPassword: string
): boolean => {
	if (!checkPassword.trim()) {
		Toast.Plain('비밀번호 확인 칸을 입력해 주세요.');
		return true;
	}
	if (password !== checkPassword) {
		Toast.Warn('비밀번호가 일치 하지 않습니다.');
		return true;
	}

	// 비밀번호 규칙 정규식
	// : 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력

	return false;
};
