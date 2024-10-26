import React, { useState } from 'react';
import axios from 'axios';

const RuleForm = () => {
  const [rule, setRule] = useState('');
  const [data, setData] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rule || !data) {
      alert('Both rule and data are required!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/evaluate', {
        rule,
        data: JSON.parse(data), // Parse the JSON string into an object
      });
      setResult(response.data.result);
      alert(`Result: ${response.data.result}`);
    } catch (error) {
      alert(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Rule Engine</h2>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Rule String:</label>
        <input
          type="text"
          value={rule}
          onChange={(e) => setRule(e.target.value)}
          style={inputStyle}
          required
        />
      </div>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Data (JSON):</label>
        <textarea
          value={data}
          onChange={(e) => setData(e.target.value)}
          style={textareaStyle}
          required
        />
      </div>
      <button type="submit" style={buttonStyle}>Submit</button>
      {result !== null && <p style={resultStyle}>Result: {result.toString()}</p>}
    </form>
  );
};

// Styles
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '20px auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9',
};

const inputContainerStyle = {
  marginBottom: '15px',
};

const labelStyle = {
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '3px',
  width: '100%',
};

const textareaStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '3px',
  width: '100%',
  height: '100px',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
  fontSize: '16px',
};

const resultStyle = {
  marginTop: '15px',
  fontSize: '18px',
  fontWeight: 'bold',
};

export default RuleForm;
