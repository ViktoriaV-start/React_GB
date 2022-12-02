export const TOGGLE_PROFILE = 'PROFILE::TOGGLE_PROFILE';
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const CHANGE_EMAIL = 'PROFILE::CHANGE_EMAIL';

export const toggleProfile = () => ({
    type: TOGGLE_PROFILE,
});

export const changeName = (name) => ({
  type: CHANGE_NAME,
  name,
});

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  email,
});
