import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import HomeCards from "./components/HomeCards.tsx";
import JobListings from "./components/JobListings.tsx";
import ViewAllJobs from "./components/ViewAllJobs.tsx";
const App = () => {

  return (
    <body>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </body>
  )
}
export default App;