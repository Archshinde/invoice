import React, { useRef } from 'react';
import './App.css';
import ItemList from './components/itemList';
import ReactToPrint from 'react-to-print';
import numberToWords from 'number-to-words'; // Import the library
import companyLogo from './assets/company-logo.png';  // Import the logo
import signature from './assets/signature.png';  // Import the signature

const App = () => {
  const componentRef = useRef(null);
  const companyInfo = {
    name: "ARCHANA INTERNATIONAL GROCERY Pvt Ltd.",
    address: "Unit 803, Lodha Supremus, Saki Vihar Road",
    cityStatePincode: "Powai, Mumbai, Maharashtra, 4000072",
    panNo: "ABCFV3121K",
    gstNo: "24AAACZ7566M1ZP"
  };

  const items = [
    {
      Sr:1,
      description: 'Almond Hair Oil',
      unitPrice: 100,
      quantity: 2,
      discount: 10,
      netAmount: 180,
      taxType: 'CGST & SGST',
      taxRate: 18,
      taxAmount: 32.4,
      totalAmount: 212.4
    },
    {
      Sr:2,
      description: 'Colgate Toothpaste',
      unitPrice: 50,
      quantity: 1,
      discount: 0,
      netAmount: 50,
      taxType: 'CGST & SGST',
      taxRate: 18,
      taxAmount: 9,
      totalAmount: 59
    },
    {
      Sr:3,
      description: 'Lux Soap',
      unitPrice: 40,
      quantity: 1,
      discount: 10,
      netAmount: 36,
      taxType: 'CGST & SGST',
      taxRate: 18,
      taxAmount: 6.48,
      totalAmount: 42.48
    },
    {
      Sr:4,
      description: 'Loreal Shampoo',
      unitPrice: 300,
      quantity: 2,
      discount: 0,
      netAmount: 600,
      taxType: 'CGST & SGST',
      taxRate: 18,
      taxAmount: 108,
      totalAmount: 708,
    }
  ];

  const calculateTotalAmount = (items) => {
    return items.reduce((total, item) => total + item.totalAmount, 0);
  };


  const totalAmount = calculateTotalAmount(items);
  const totalAmountInWords = numberToWords.toWords(Math.round(totalAmount));

  return (
    <div className="App">
      <div className="invoice" ref={componentRef}>
        <div className="company-logo">
          <img src={companyLogo} alt="Company Logo" />
        </div>

        <div className="company-details">
          <h2>Company Details</h2>
          <p>Name: {companyInfo.name}</p>
          <p>Address: {companyInfo.address}</p>
          <p>{companyInfo.cityStatePincode}</p>
          <p>PAN No: {companyInfo.panNo}</p>
          <p>GST Registration No: {companyInfo.gstNo}</p>
        </div>

        <div className="invoice-details">
          <h2>Invoice Details</h2>
          <p>Place of Supply: Maharashtra</p>
          <p>Place of Delivery: Maharashtra</p>
          <p>Order No.: 223344</p>
          <p>Order Date: 2024-06-30</p>
          <p>Invoice No.: 709-0125432-6431567</p>
          <p>Invoice Date: 2024-06-30</p>
          <p>Reverse Charge: No</p>
        </div>

        <div className="billing-details">
          <h2>Billing Details</h2>
          <p>Dilip Bhatiya</p>
          <p>A2/108, Kirti Heights, Andheri W </p>
          <p>Andheri, Maharashtra, 400068</p>
          <p>State/UT Code: 27</p>
        </div>

        <div className="shipping-details">
          <h2>Shipping Details</h2>
          <p>Dilip Bhatiya</p>
          <p>A2/108, Kirti Heights, Andheri W </p>
          <p>Andheri, Maharashtra, 400068</p>
          <p>State/UT Code: 27</p>
        </div>


        <ItemList items={items} totalAmount={totalAmount} totalAmountInWords={totalAmountInWords} />
        

        <div className="signature">
          <img src={signature} alt="Signature" />
          <p>Authorised Signatory</p>
        </div>
      </div>
      <div className="center-button">
        <ReactToPrint
          trigger={() => <button>Generate PDF</button>}
          content={() => componentRef.current}
        />
      </div>
    </div>
  );
}

export default App;