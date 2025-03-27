import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import axios from "axios"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import AddJobPage from "./pages/AddJobPage"
import NotFoundPage from "./pages/NotFoundPage"
import JobPage, { jobLoader } from "./pages/JobPage"
import MainLayout from "./layouts/MainLayout"
import EditJobPage from "./pages/EditJobPage"

const App = () => {

  const addJob = async (newJob: object) => {
    try {
      const res = await axios.post('/api/jobs',
        newJob, { headers: { "Content-Type": "application/json" } })

      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  const editJob = async (modJob: object) => {
    try {
      const res = await axios.put('/api/jobs',
        modJob, { headers: { "Content-Type": "application/json" } })

      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  const deleteJob = async (id: string) => {
    try {
      const res = await axios.delete(`/api/jobs/${id}`)
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="/edit-job/:id" element={<EditJobPage editJobSubmit={editJob} />} loader={jobLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>)
  )

  return <RouterProvider router={router} />
}
export default App;