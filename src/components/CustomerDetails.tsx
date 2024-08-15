// src/components/CustomerDetails.tsx
import React from 'react';
import { Customer } from '../models/Customer';
import PhotoGrid from './PhotoGrid';

interface Props {
  customer: Customer;
}

const CustomerDetails: React.FC<Props> = ({ customer }) => {
  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <PhotoGrid photos={customer.photos} />
    </div>
  );
};

export default CustomerDetails;
