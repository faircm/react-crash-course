import { useState, useEffect } from "react";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

interface Job {
    id: string,
    type: string,
    title: string,
    description: string,
    location: string,
    salary: string,
    companyName: string,
    companyDescription: string,
    contactEmail: string,
    contactPhone: string,
}

const JobPage = ({ deleteJob }: any) => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [job, setJob] = useState<Job>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios({
            method: 'get',
            url: `/api/jobs/${id}`,
            responseType: 'json'
        }).then(response => {
            setJob(response.data[0]);
            setLoading(false);
        })
    }, [id])

    const onDeleteClick = (jobId: string) => {
        const confirm = window.confirm("Delete this job?")
        if (!confirm) {
            return
        }
        deleteJob(jobId)
        toast.success('Job deleted!');
        navigate('/jobs')
    }

    return (<>
        <section>
            <div className="container m-auto py-6 px-6">
                <Link
                    to="/jobs"
                    className="text-indigo-500 hover:text-indigo-600 flex items-center"
                >
                    <FaArrowLeft className="mr-2" /> Back to Job Listings
                </Link>
            </div>
        </section>

        {loading ? (<Spinner loading={loading} />) : (<section className="bg-indigo-50">
            <div className="container m-auto py-10 px-6">
                <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                    <main>
                        <div
                            className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                        >
                            <div className="text-gray-500 mb-4">Full-Time</div>
                            <h1 className="text-3xl font-bold mb-4">
                                {job.title}
                            </h1>
                            <div
                                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                            >
                                <FaMapMarker className="mr-1 text-orange-700" />
                                <p className="text-orange-700">{job.location}</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                Job Description
                            </h3>

                            <p className="mb-4">
                                {job.description}
                            </p>

                            <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                            <p className="mb-4">{job.salary}</p>
                        </div>
                    </main>

                    <aside>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-6">Company Info</h3>

                            <h2 className="text-2xl">{job.companyName}</h2>

                            <p className="my-2">
                                {job.companyDescription}
                            </p>

                            <hr className="my-4" />

                            <h3 className="text-xl">Contact Email:</h3>

                            <p className="my-2 bg-indigo-100 p-2 font-bold">
                                {job.contactEmail}
                            </p>

                            <h3 className="text-xl">Contact Phone:</h3>

                            <p className="my-2 bg-indigo-100 p-2 font-bold">{job.contactPhone}</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                            <Link
                                to={`/edit-job/${job.id}`}
                                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                            >Edit Job</Link>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                onClick={() => onDeleteClick(job.id)}
                            >
                                Delete Job
                            </button>
                        </div>
                    </aside>
                </div>
            </div >
        </section >)}
    </>)
}

const jobLoader = async ({ params }: any) => {
    const res = await axios.get(`/api/jobs/${params.id}`)
    const data = res.data[0];
    return data;
}
export { JobPage as default, jobLoader }