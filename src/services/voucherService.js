import http from "../http-common";

const getAll = () => {
  return http.get("/vouchers");
};

const get = (id) => {
  return http.get(`/vouchers/${id}`);
};

const create = (data) => {
  return http.post("/vouchers/create", data);
};

const update = (id, data) => {
  return http.put(`/vouchers/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/vouchers/${id}`);
};

const voucherService = {
  getAll,
  get,
  create,
  update,
  remove,
}

export default voucherService;
