export const ERROR_MESSAGE = {
    VALIDATION: {
      EMAIL: "정확한 이메일 양식을 입력해 주세요.",
      NAME: "정확한 한글 이름을 입력해 주세요.",
      PASSWORD: "영문, 숫자, 특수문자 포함하여 8자에서 20자 이내로 입력해 주세요.",
      PASSWORD_CAPSLOCK: "CapsLock이 켜져 있습니다.",
      CONFIRM_PASSWORD: "비밀번호를 확인해 주세요.",
      PHONE_NUMBER: "정확한 전화번호를 입력해 주세요. ex) 010-1234-5678",
      REQUIRED: "필수 정보입니다.",
      URL: "http(s)를 포함한 정확한 URL을 입력해 주세요.",
      BIRTHDAY: "유효하지 않은 날짜입니다. 정확한 날짜를 입력해 주세요.",
    },
    API: {
      JOIN_FAILURE: "회원가입에 실패했습니다. 잠시 후 다시 시도해 주세요.",
      LOGIN_FAILURE: "아이디(E-mail) 또는 비밀번호를 확인해 주세요.",
      EDIT_FAILURE: "변경에 실패했습니다. 잠시 후 다시 시도해 주세요.",
      TOKEN_EXPIRED: "로그인 정보가 만료되었습니다. 다시 로그인해 주세요.",
      FETCHING_USER_INFO: "내 정보를 불러오는데 불러올 수 없습니다.",
      NOT_AUTHENTICATED: "이메일 인증을 완료해 주세요.",
      ALREADY_EXIST_EMAIL: "이미 가입된 이메일입니다.",
      INVALID_AUTHENTICATION_CODE: "인증 코드가 일치하지 않습니다.",
      SUBMIT_ASSIGNMENT: "과제를 제출할 수 없습니다.",
      SUBMIT_APPLICATION: "입력된 정보가 올바르지 않습니다. 다시 확인해 주세요.",
      FIND_PASSWORD: "입력된 정보가 올바르지 않습니다. 다시 확인해 주세요.",
      EDIT_PASSWORD: "입력된 정보가 올바르지 않습니다. 다시 확인해 주세요.",
    },
    ACCESS: {
      REQUIRED_LOGIN: "로그인이 필요합니다.",
    },
    HOOKS: {
      CAANOT_FIND_SERVICE_CONTEXT : 'ServiceContext가 존재하지 않습니다.',
      CANNOT_FIND_FORM_CONTEXT: "FormContext가 존재하지 않습니다.",
      CANNOT_FIND_TOKEN_CONTEXT: "TokenContext가 존재하지 않습니다",
      CANNOT_FIND_MODAL_CONTEXT: "ModalContext가 존재하지 않습니다",
    },
  } as const;
  
  export const SUCCESS_MESSAGE = {
    API: {
    },
  } as const;

 
  