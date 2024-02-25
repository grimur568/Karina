import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postCompany } from '../../store/actions/companyActions';

function CreateCompany() {
  const [company, setCompany] = useState({
    name: '',
    SSN: '',
    phoneNumber: '',
    owner: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCompany(company));
    // Reset form
    setCompany({ name: '', SSN: '', phoneNumber: '', owner: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={company.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="SSN"
        value={company.SSN}
        onChange={handleChange}
        placeholder="SSN"
      />
      <input
        name="phoneNumber"
        value={company.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <input
        name="owner"
        value={company.owner}
        onChange={handleChange}
        placeholder="Owner"
      />
      <button type="submit">Add Company</button>
    </form>
  );
}

export default CreateCompany;
