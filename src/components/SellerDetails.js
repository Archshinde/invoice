import React from 'react';

const SellerDetails = ({ seller }) => (
  <div>
    <h2>Seller Details</h2>
    <p>{seller.name}</p>
    <p>{seller.address}</p>
    <p>{seller.cityStatePincode}</p>
    <p>PAN: {12345676}</p>
    <p>GST: {seller.gst}</p>
  </div>
);

export default SellerDetails;