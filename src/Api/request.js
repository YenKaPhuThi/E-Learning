import axios from "axios";

export const request = ({ url, body, params, method }) => {
  const variables = {
    url,
    data: body,
    params,
    method,
  };

  return axios(variables);
};
