const { REACT_APP_HOST: host } = process.env;

export const signUp = () => `${host}/auth/reg`;
export const signIn = () => `${host}/auth/login`;
export const signOut = () => `${host}/auth/logout`;
