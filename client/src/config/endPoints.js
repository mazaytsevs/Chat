const { REACT_APP_HOST: host } = process.env;

export const signUp = () => `${host}/auth/reg`;
export const signIn = () => `${host}/auth/login`;
export const signOut = () => `${host}/auth/logout`;
export const getUserSession = () => `${host}/auth/check`;

export const getAllUsers = () => `${host}/getUser/all`;
export const getUsersSettings = () => `${host}/getUser/all-for-settings`;

export const appointModerator = () => `${host}/settings/appoint-a-moderator`;
export const demoteModerator = () => `${host}/settings/demote`;
export const blockUser = () => `${host}/settings/block`;
export const unBlockUser = () => `${host}/settings/unblock`;
