import { useState, useEffect } from 'react';
import axios from 'axios';
import JobListing from './JobListing';
import Spinner from './Spinner';
interface Job {
    id: string,
    type: string,
    title: string,
    description: string,
    location: string,
    salary: string,
    company: {
        name: string,
        description: string,
        contactEmail: string,
        contactPhone: string
    }
}

const JobListings = ({ isHome = false }) => {

    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios({
            method: 'get',
            url: '/api/jobs/',
            responseType: 'json'
        }).then(response => {
            setJobs(response.data);
            setLoading(false);
        })
    }, [])

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "Recent Jobs" : "Browse Jobs"}
                </h2>

                {loading ? (<Spinner loading={loading} />) : (<>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}
                    </div>
                </>)}
            </div>
        </section>
    )
}
export default JobListings;