import { Routes, Route } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from './outlet/Layout';
import ProtectedRoute from './protected-routes/ProtectedRoute';
import { lazy, Suspense } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

const Home = lazy(() => import('./pages/home/homepage'));
const About = lazy(() => import('./pages/about/About'));
const SignupPage = lazy(() => import('./pages/signup/SignupPage'));
const SigninPage = lazy(() => import('./pages/signin/SigninPage'));
const Faq = lazy(() => import('./pages/faq/Faq'));

const IndividualSolution = lazy(
  () => import('./pages/individualSolutions/individualSolutionsPage')
);
const OrganisationsSolution = lazy(
  () => import('./pages/organisationSolutions/organisationsSolutionPage')
);
const ActivateReportProfile = lazy(
  () => import('./pages/careerVerification/ActivateCareerReportProfile')
);
const Repository = lazy(() => import('./pages/credentials/Repository'));
const CareerSettings = lazy(
  () => import('./pages/careerVerification/CareerSettings')
);
const CredentialRepository = lazy(
  () => import('./pages/credentials/CredentialsPage')
);
const CareerDashboard = lazy(
  () => import('./pages/careerVerification/CareerDashboard')
);
const CareerProfile = lazy(
  () => import('./pages/careerVerification/careerProfile')
);
const ErrorPage = lazy(() => import('./protected-routes/ErrorPage'));

AOS.init({
  duration: 1000, // Animation duration in milliseconds
  easing: 'ease-in-out', // Default easing for animations
  once: true, // Whether animation should happen only once - while scrolling down
});
function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="h-screen flex justify-center items-center">
            <h2>Loading...</h2>
          </div>
        }
      >
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signuppage" element={<SignupPage />} />
            <Route path="signinpage" element={<SigninPage />} />
            <Route path="faq" element={<Faq />} />
            <Route path="about-us" element={<About />} />
            <Route path="individual" element={<IndividualSolution />} />
            <Route path="organisation" element={<OrganisationsSolution />} />
            <Route element={<ProtectedRoute />}>
              <Route path="career-dashboard" element={<CareerDashboard />} />
              <Route
                path="activate-profile"
                element={<ActivateReportProfile />}
              />
              <Route path="repository" element={<Repository />} />
              <Route path="settings" element={<CareerSettings />} />
              <Route path="career-profile" element={<CareerProfile />} />
              <Route path="settings" element={<CareerSettings />} />
              <Route path="credentials" element={<CredentialRepository />} />
            </Route>
          </Route>
          <Route path={'*'} element={<ErrorPage />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </Suspense>
    </>
  );
}

export default App;
