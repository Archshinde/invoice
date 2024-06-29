import React from 'react';

const ItemList = ({ items, totalAmount, totalAmountInWords }) => {
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
              <td>{item.unitPrice}</td>
              <td>{item.quantity}</td>
              <td>{item.discount}</td>
              <td>{item.netAmount}</td>
              <td>{item.taxType}</td>
              <td>{item.taxRate}</td>
              <td>{item.taxAmount}</td>
              <td>{item.totalAmount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="9" className="total-label">Total:</td>
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