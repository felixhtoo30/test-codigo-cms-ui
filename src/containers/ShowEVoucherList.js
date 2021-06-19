import React, { useEffect } from "react";
import {
  CContainer,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CButton,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { retrieveVouchers, deleteVoucher } from "../actions/vouchers";

const ShowEVoucherList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const vouchers = useSelector((state) => state.vouchers);
  
  useEffect(() => {
    dispatch(retrieveVouchers());
  }, [dispatch]);

  const onEditVoucher = (id) => {
    history.push("/evoucher/edit", {voucherId: id});
  };

  const onDeleteVoucher = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteVoucher(id));
    } else {
    }
  };

  return (
    <CContainer>
      <h3 className="mt-4">eVoucher List</h3>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Title</CTableHeaderCell>
            <CTableHeaderCell scope="col">Description</CTableHeaderCell>
            <CTableHeaderCell scope="col">Expiry Date</CTableHeaderCell>
            <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
            <CTableHeaderCell scope="col">QTY</CTableHeaderCell>
            <CTableHeaderCell scope="col">Max Buy Limit</CTableHeaderCell>
            <CTableHeaderCell scope="col"></CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {vouchers.map((voucher, index) => (
            <CTableRow key={voucher.id}>
              <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
              <CTableDataCell>{voucher.title}</CTableDataCell>
              <CTableDataCell>{voucher.description}</CTableDataCell>
              <CTableDataCell>{voucher.expiry_date}</CTableDataCell>
              <CTableDataCell>{voucher.amount}</CTableDataCell>
              <CTableDataCell>{voucher.qty}</CTableDataCell>
              <CTableDataCell>{voucher.max_buy_limit}</CTableDataCell>
              <CTableDataCell>
                <CButton
                  color="primary"
                  variant="outline"
                  className="m-1"
                  onClick={() => onEditVoucher(voucher.id)}
                >
                  <i className="cil-pencil"></i>
                </CButton>
                <CButton
                  color="danger"
                  variant="outline"
                  className="m-1"
                  onClick={() => onDeleteVoucher(voucher.id)}
                >
                  <i className="cil-trash"></i>
                </CButton>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </CContainer>
  );
};

export default ShowEVoucherList;
