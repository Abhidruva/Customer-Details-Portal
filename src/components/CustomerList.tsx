
import React from 'react';
import { Customer } from '../models/Customer';
import CustomerCard from './CustomerCard';

interface Props {
  customers: Customer[];
  onSelectCustomer: (customer: Customer) => void;
  selectedCustomerId: number | null;
}

const CustomerList: React.FC<Props> = ({ customers, onSelectCustomer, selectedCustomerId }) => {
  return (
    <div className="customer-list">
      {customers.map(customer => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={customer.id === selectedCustomerId}
          onClick={() => onSelectCustomer(customer)}
        />
      ))}
    </div>
  );
};

export default CustomerList;
