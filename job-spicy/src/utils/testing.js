/* import React, { useState } from 'react';

const JobForm = () => {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    // Other job data fields, to be filled out
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('your-api-url/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });
      const data = await response.json();
      console.log('Job saved successfully:', data);
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
        // Other job fields as needed //
      />
    </form>
  );
};

export default JobForm; */
