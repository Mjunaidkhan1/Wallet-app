export function LoginAct({userName, userPhoneNumber}) {
  console.log(userName, userPhoneNumber, 'kkk');
  return {
    type: 'LOGIN_RED',
    payload: {userName, userPhoneNumber},
  };
}
