import React, { useEffect, useState } from "react";
import {
  CContainer,
  CRow,
  CCol,
  CForm,
  CFormLabel,
  CFormControl,
  CFormCheck,
  CFormSelect,
  CButton,
  CAlert,
} from "@coreui/react";
import { useLocation } from "react-router-dom";
import { retrieveOneVoucher, updateVoucher } from "../actions/vouchers";
import { useDispatch, useSelector } from "react-redux";

const EditEVoucher = () => {
  const location = useLocation();
  
  const dispatch = useDispatch();
  const [voucher, setVoucher] = useSelector((state) => state.voucher);
  const [updated, setUpdated] = useState(false);
  
  useEffect(() => {
    dispatch(retrieveOneVoucher(location.state.voucherId));
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVoucher({ ...voucher, [name]: value });
    e.preventDefault();
  };
  
  const onUpdateVoucher = (e) => {
    e.preventDefault();
    dispatch(updateVoucher());
    setUpdated(true);
  }

  return (
    <CContainer>
      <h3 className="mt-4">Edit eVoucher</h3>
        {updated ? (
          <CAlert color="success">
            You updated successfully!{" "}
            <i className="cil-clear-all float-right"></i>
          </CAlert>
        ) : (
          ""
        )}
      <CForm onSubmit={onUpdateVoucher}>
        <CRow className="g-3 my-3">
          <CCol xs>
            <CFormLabel htmlFor="title">Title</CFormLabel>
            <CFormControl
              type="text"
              id="title"
              placeholder="eVoucher Title"
              name="title"
              value={voucher.title}
              onChange={handleInputChange}
              required
            />
          </CCol>
          <CCol xs>
            <CFormLabel htmlFor="expiry_date">Expiry Date</CFormLabel>
            <CFormControl
              type="date"
              id="expiry_date"
              name="expiry_date"
              placeholder=""
              value={voucher.expiry_date}
              onChange={handleInputChange}
              required
            />
          </CCol>
        </CRow>
        <CRow className="g-3 my-3">
          <CCol xs>
            <CFormLabel htmlFor="amount">Amount</CFormLabel>
            <CFormControl
              type="text"
              id="amount"
              name="amount"
              placeholder=""
              value={voucher.amount}
              onChange={handleInputChange}
              required
            />
          </CCol>
          <CCol xs>
            <CFormLabel htmlFor="qty">Qty</CFormLabel>
            <CFormControl
              type="number"
              id="qty"
              name="qty"
              min="0"
              value={voucher.qty}
              onChange={handleInputChange}
              required
            />
          </CCol>
        </CRow>
        <CRow className="g-3 my-3">
          <CCol>
            <CFormLabel htmlFor="description">Description</CFormLabel>
            <CFormControl
              component="textarea"
              id="description"
              rows="3"
              name="description"
              value={voucher.description}
              onChange={handleInputChange}
            />
          </CCol>
        </CRow>
        <CRow className="g-3 my-3">
          <CCol>
            <CFormLabel htmlFor="disc_pay_method">
              Select Discount Payment Method
            </CFormLabel>
            <CFormSelect
              aria-label="Choose One"
              name="disc_pay_method"
              value={voucher.disc_pay_method}
              onChange={handleInputChange}
              required
            >
              <option>Open this select menu</option>
              <option value="1">Visa</option>
              <option value="2">Mastercard</option>
              <option value="3">PayPal</option>
            </CFormSelect>
          </CCol>
          <CCol />
        </CRow>
        <CRow className="g-3 my-3">
          <CCol>
            <CFormLabel htmlFor="buy_type" className="w-100 mb-3">
              Choose Buy Type
            </CFormLabel>
            <CFormCheck
              inline
              type="radio"
              id="buytype1"
              label="Only Me Usage"
              name="buy_type"
              value={voucher.buy_type}
              onChange={() => {
                voucher.buy_type = 1;
              }}
            />
            <CFormCheck
              inline
              type="radio"
              id="buytype2"
              label="Gift to Others"
              name="buy_type"
              value={voucher.buy_type}
              onChange={() => {
                voucher.buy_type = 2;
              }}
            />
          </CCol>
        </CRow>
        <CRow className="g-3 my-3">
          <CCol xs>
            <CFormLabel htmlFor="max_buy_limit">Max Buy Limit</CFormLabel>
            <CFormControl
              type="number"
              id="max_buy_limit"
              name="max_buy_limit"
              min="0"
              value={voucher.max_buy_limit}
              onChange={handleInputChange}
            />
          </CCol>
          <CCol xs>
            <CFormLabel htmlFor="qty">Max Gift Limit</CFormLabel>
            <CFormControl
              type="number"
              id="max_gift_limit"
              name="max_gift_limit"
              min="0"
              value={voucher.max_gift_limit}
              onChange={handleInputChange}
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" className="text-center pb-4">
            <CButton color="primary" type="submit">
              Submit form
            </CButton>
          </CCol>
        </CRow>
      </CForm>
    </CContainer>
  );
};

export default EditEVoucher;
