import {
  CREATE_VOUCHER,
  RETRIEVE_VOUCHERS,
  RETRIEVE_ONE_VOUCHER,
  UPDATE_VOUCHER,
  DELETE_VOUCHER,
} from "../actions/types";

const initialState = [];

const voucherReducer = (vouchers = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_VOUCHER:
      return [...vouchers, payload];

    case RETRIEVE_VOUCHERS:
      return payload;

    case RETRIEVE_ONE_VOUCHER:
      return vouchers.map((voucher) => {
        if (voucher.id === payload.id) {
          return {
            ...voucher,
            ...payload
          };
        } else {
          return voucher;
        }
      });

    case UPDATE_VOUCHER:
      return vouchers.map((voucher) => {
        if (voucher.id === payload.id) {
          return {
            ...voucher,
            ...payload,
          };
        } else {
          return voucher;
        }
      });

    case DELETE_VOUCHER:
      return vouchers.filter(({ id }) => id !== payload.id);

    default:
      return vouchers;
  }
}

export default voucherReducer;
