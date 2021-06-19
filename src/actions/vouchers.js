import {
  CREATE_VOUCHER,
  RETRIEVE_VOUCHERS,
  UPDATE_VOUCHER,
  DELETE_VOUCHER,
} from "./types";

import VoucherDataService from "../services/voucherService";

export const createVoucher = (voucher) => async (dispatch) => {
  try {
    const res = await VoucherDataService.create(voucher);

    dispatch({
      type: CREATE_VOUCHER,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveVouchers = () => async (dispatch) => {
  try {
    const res = await VoucherDataService.getAll();

    dispatch({
      type: RETRIEVE_VOUCHERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateVoucher = (id, data) => async (dispatch) => {
  try {
    const res = await VoucherDataService.update(id, data);

    dispatch({
      type: UPDATE_VOUCHER,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteVoucher = (id) => async (dispatch) => {
  try {
    await VoucherDataService.remove(id);

    dispatch({
      type: DELETE_VOUCHER,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};