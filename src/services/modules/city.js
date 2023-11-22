import Request from "../request";

export const getCityAll = () => {
  return Request.get({
    url:'/city/all'
  });
};
