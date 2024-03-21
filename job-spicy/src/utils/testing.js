/* import React, { useState } from 'react';

const JobForm = () => {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    // Other fields to be filled out
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('savedJob', JSON.stringify(jobData));
      console.log('Job saved successfully');
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={jobData.title}
        onChange={handleChange}
        placeholder="Job Title"
      />
      <textarea
        name="description"
        value={jobData.description}
        onChange={handleChange}
        placeholder="Job Description"
      />
      <button type="submit">Save Job</button>
    </form>
  );
};

export default JobForm; */
