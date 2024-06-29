import React, { useState } from 'react';
import SellerDetails from './SellerDetails';
import BillingDetails from './BillingDetails';
import ShippingDetails from './ShippingDetails';
import InvoiceDetails from './invoiceDetails';
import ItemList from './itemList';
import companyLogo from '../assets/company-logo.png';
import signature from '../assets/signature.png';
import '../App.css';  
const Invoice = () => {
  const [sellerDetails] = useState({
    name: "Your Company Name",
    address: "Company Address",
    cityStatePincode: "City, State, Pincode",
    panNo: "Pan Number",
    gstNo: "GST Registration Number",
  });

  const [billingDetails] = useState({
    name: "Dilip Bhatiya",
    address: "A2/108, Kirti Heights, Andheri West",
    cityStatePincode: "Andheri, Maharashtra, 400068",
    stateCode: "27",
  });

  const [shippingDetails] = useState({
    name: "Dilip Bhatiya",
    address: "A2/108, Kirti Heights, Andheri West",
    cityStatePincode: "Andheri, Maharashtra, 400068",
    stateCode: "27",
  });

  const [invoiceDetails] = useState({
    placeOfSupply: "Maharashtra",
    placeOfDelivery: "Maharashtra",
    orderNo: "223344",
    orderDate: "2024-06-30",
    invoiceNo: "709012",
    invoiceDate: "2024-06-30",
    reverseCharge: "No",
  });

  const [items] = useState([
    { Sr:1, description: "Item 1", unitPrice: 100, quantity: 2, discount: 10, netAmount: 180, taxType: "CGST & SGST", taxRate: 18, taxAmount: 32.4, totalAmount: 212.4 },
    { Sr:2, description: "Item 2", unitPrice: 50, quantity: 1, discount: 0, netAmount: 50, taxType: "CGST & SGST", taxRate: 18, taxAmount: 9, totalAmount: 59 },
  ]);

  return (
    <div className="invoice">
      <SellerDetails details={sellerDetails} logo={companyLogo} signature={signature} />
      <InvoiceDetails details={invoiceDetails} />
      <BillingDetails details={billingDetails} />
      <ShippingDetails details={shippingDetails} />
      <ItemList items={items} />
    </div>
  );
};

export default Invoice;