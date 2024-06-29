import React from 'react';

const InvoiceDetails = ({ invoice, order }) => (
  <div>
    <h2>Invoice Details</h2>
    <p>Invoice No: {invoice.no}</p>
    <p>Invoice Date: {invoice.date}</p>
    <h2>Order Details</h2>
    <p>Order No: {order.no}</p>
    <p>Order Date: {order.date}</p>
  </div>
);

export default InvoiceDetails;