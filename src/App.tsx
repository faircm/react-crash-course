import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import AddJobPage from "./pages/AddJobPage"
import NotFoundPage from "./pages/NotFoundPage"
import JobPage, { jobLoader } from "./pages/JobPage"
import MainLayout from "./layouts/MainLayout"
import EditJobPage from "./pages/EditJobPage"

const App = () => {

  const addJob = async (newJob: object) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  const editJob = async (modJob: any) => {
    const res = await fetch(`/api/jobs/${modJob.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(modJob)
    });
    return;
  }

  const deleteJob = async (id: string) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return;
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