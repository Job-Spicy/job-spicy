/*
realising that we will probably have more than one
fetch function? you can name the generic one
fetchData like the file, but there might be
more specific fetch functions later on.

if that's the case you can change the file name! it
will cause a scary merge conflict but don't worry about it

the fetch functions will be imported in the context folder! i already
left a placeholder for you

test it with console logs! your fetch works fine, the data just isn't set up how you think it is lol,
so read over the response object <3
*/

/* I'm just putting this here for now until I know where it goes lol -epi 

import React, { useState, useEffect } from 'react';

function App() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('https://jobicy.com/api/v2/remote-jobs');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchJobs();
    }, []);

    return (
        <div>
            <h1>Remote Jobs</h1>
            <ul>
                {jobs.map (job => (
                    <li key = {job.id}>
                        <h2>{job.title}</h2>
                        <p>{job.company_name}</p>
                        <p>{job.location}</p>
                        {}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App; */
