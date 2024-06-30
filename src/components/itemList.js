import React from 'react';


const ItemList = ({ items, totalAmount, totalAmountInWords }) => {
  // Calculate the total tax amount
  const totalTaxAmount = items.reduce((sum, item) => sum + item.taxAmount, 0);

  return (
    <div className="item-list">
      <table>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Description</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Discount</th>
            <th>Net Amount</th>
            <th>Tax Type</th>
            <th>Tax Rate</th>
            <th>Tax Amount</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.description}</td>
              <td>{item.unitPrice.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>{item.discount.toFixed(2)}</td>
              <td>{item.netAmount.toFixed(2)}</td>
              <td>{item.taxType}</td>
              <td>{item.taxRate.toFixed(2)}%</td>
              <td>{item.taxAmount.toFixed(2)}</td>
              <td>{item.totalAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="8" className="total-label">Total:</td>
            <td className="total-tax-amount">{totalTaxAmount.toFixed(2)}</td>
            <td className="total-amount">{totalAmount.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan="10" className="total-words">Amount in Words: {totalAmountInWords.charAt(0).toUpperCase() + totalAmountInWords.slice(1)} Only</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ItemList;
