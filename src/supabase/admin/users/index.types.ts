export type updateUserPayload = {
  id: string;
  values: {
    email: string;
    phone: string;
  };
};

export type createUserPayload = {
  email: string;
  password: string;
  // phone: string;
};
