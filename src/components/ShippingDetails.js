import React from 'react';

const ShippingDetails = ({ shipping }) => (
  <div>
    <h2>Shipping Details</h2>
    <p>Dilip Bhatiya</p>
    <p>{shipping.address}</p>
    <p>{shipping.cityStatePincode}</p>
    <p>State/UT Code: {shipping.stateCode}</p>
  </div>
);

export default ShippingDetails;