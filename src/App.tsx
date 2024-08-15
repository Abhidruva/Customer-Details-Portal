// // src/App.tsx
// import React, { useState } from 'react';
// import CustomerList from './components/CustomerList';
// import CustomerDetails from './components/CustomerDetails';
// import { Customer } from './models/Customer';

// const App: React.FC = () => {
//   const [customers, setCustomers] = useState<Customer[]>([]);
//   const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

//   const handleSelectCustomer = (customer: Customer) => {
//     setSelectedCustomer(customer);
//   };

//   return (
//     <div className="app">
//       <CustomerList
//         customers={customers}
//         onSelectCustomer={handleSelectCustomer}
//         selectedCustomerId={selectedCustomer?.id || null}
//       />
//       {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
//     </div>
//   );
// };

// export default App;

// src/App.tsx
import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { Customer } from './models/Customer';

const sampleCustomers: Customer[] = [
  {
    id: 1,
    name: 'Abhishek Druva',
    title: 'Software Engineer',
    address: '123 Main St, Bangalore, India',
    photos: Array(9).fill('https://via.placeholder.com/150') // Placeholder images
  },
  {
    id: 2,
    name: 'Ishwar Narayan',
    title: 'Product Manager',
    address: '456 Elm St, Bangalore, India',
    photos: Array(9).fill('https://via.placeholder.com/150')
  },
  {
    id: 3,
    name: 'Pratheek fernandez',
    title: 'UX Designer',
    address: '789 Oak St, New York, USA',
    photos: Array(9).fill('https://via.placeholder.com/150')
  },
  {
    id: 4,
    name: 'John Doe',
    title: 'Software Engineer',
    address: '123 Main St, Anytown, USA',
    photos: Array(9).fill('https://via.placeholder.com/150') // Placeholder images
  },
  {
    id: 5,
    name: 'Jane Smith',
    title: 'Product Manager',
    address: '456 Elm St, Othertown, USA',
    photos: Array(9).fill('https://via.placeholder.com/150')
  },
  {
    id: 6,
    name: 'Alice Johnson',
    title: 'UX Designer',
    address: '789 Oak St, Somewhere, USA',
    photos: Array(9).fill('https://via.placeholder.com/150')
  }
];

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>(sampleCustomers);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    // Select the first customer by default
    if (customers.length > 0) {
      setSelectedCustomer(customers[0]);
    }
  }, [customers]);

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="app">
      <CustomerList
        customers={customers}
        onSelectCustomer={handleSelectCustomer}
        selectedCustomerId={selectedCustomer?.id || null}
      />
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
};

export default App;
