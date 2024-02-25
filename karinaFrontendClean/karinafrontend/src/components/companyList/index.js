import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies } from '../../store/actions/companyActions';

function CompaniesList() {
  const dispatch = useDispatch();
  const { items = [], loading = false, error = null } = useSelector(state => state.companyStateSlice || {});


  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);



console.log('items', items);
console.log('loading', loading);
console.log('error ', error);
  if (loading) return <div>Loading companies...</div>;
  if (error) return <div>Error loading companies: {error.message}</div>;

  return (
    <div>
      <h2>Companies List</h2>
      <ul>
        {items.map((company, index) => (
          <li key={index}>
            <h3>{company.name}</h3>
            <p>SSN: {company.ssn}</p>
            <p>Phone Number: {company.phoneNumber}</p>
            <p>Owner: {company.owner}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompaniesList;