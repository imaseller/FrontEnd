import * as yup from 'yup';

export const schemaSignup = yup.object().shape({
  email: yup
    .string()
    .required('사용하실 이메일을 입력해주세요.')
    .email('이메일 형식에 맞지 않습니다.')
    .max(20, '이메일은 최대 20자리로 입력해주세요.')
    .matches(
      /^[a-zA-Z0-9@._-]+$/,
      '이메일은 영문자와 숫자만 사용할 수 있습니다.'
    ),
  pw: yup
    .string()
    .required('문자와 숫자를 조합하여 8~20자 사이로 입력해주세요.')
    .min(8, '비밀번호는 최소 8자리 이상 입력해주세요.')
    .max(20, '비밀번호는 최대 20자리로 입력해주세요.')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,20}$/,
      '영문과 숫자를 조합하여 8~20글자 사이로 입력해주세요.'
    ),
  checkPw: yup
    .string()
    .oneOf([yup.ref('pw'), null], '비밀번호가 일치하지 않습니다.')
    .required('입력하신 비밀번호를 한번 더 입력해주세요.')
    .max(20, '비밀번호는 최대 20자리로 입력해주세요.'),
  nickname: yup
    .string()
    .required('사용하실 닉네임을 입력해주세요.')
    .max(8, '닉네임은 최대 8자 이내로 입력해주세요.'),
  instar: yup
    .string()
    .required('인스타그램 아이디를 입력해주세요.')
    .max(20, '인스타그램 아이디는 최대 20자리로 입력해주세요.'),
  name: yup
    .string()
    .required('이름을 입력해주세요.')
    .max(5, '이름은 최대 5자 이내로 입력해주세요.'),
  phoneNumber: yup
    .string()
    .required('전화번호를 입력해주세요.')
    .matches(/^\d{3}-\d{4}-\d{4}$/, '전화번호 형식에 맞게 입력해주세요.')
    .min(12, '전화번호는 12자리로 입력해주세요.')
    .max(12, '전화번호는 12자리로 입력해주세요.'),
  melpickAddress: yup
    .string()
    .required('멜픽 주소를 입력해주세요.')
    .matches(
      /^[a-zA-Z0-9]{1,12}$/,
      '멜픽 주소는 영문과 숫자로 이루어진 12글자 이내로 입력해주세요.'
    ),
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .required('사용하실 이메일을 입력해주세요.')
    .email('이메일 형식에 맞지 않습니다.'),
  password: yup
    .string()
    .required('문자와 숫자를 조합하여 8~20자 사이로 입력해주세요.')
    .max(14, '비밀번호는 최대 14자리로 입력해주세요.')
    .matches(
      /^(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
      '영문과 숫자, 특수기호를 조합하여 8~14글자 사이로 입력해주세요.'
    ),
});

export const schemaFindPassword = yup.object().shape({
  email: yup
    .string()
    .required('이메일을 입력해주세요.')
    .email('유효한 이메일 주소를 입력해주세요.'),
  nickname: yup
    .string()
    .required('닉네임을 입력해주세요.')
    .matches(
      /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/,
      '닉네임은 2~16 글자 이하로 입력해주세요.'
    ),
});

export const schemaFindId = yup.object().shape({
  nickname: yup
    .string()
    .required('닉네임을 입력해주세요.')
    .matches(
      /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/,
      '닉네임은 2~16 글자 이하로 입력해주세요.'
    ),
  birthdate: yup.string().required('생년월일을 입력해주세요.'),
});
