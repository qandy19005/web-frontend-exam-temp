import AppLoading from './components/AppLoading';
import usePageLoading from './hooks/usePageLoading';
import JobListPage from './pages/JobListPage';

function App() {
  const {loading, fadeOut} = usePageLoading();

  return (
    <>
      {loading && <AppLoading fadeOut={fadeOut} />}
      <JobListPage />
    </>
  );
}

export default App;
