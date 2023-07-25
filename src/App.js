import logo from "./logo.svg";
import "./App.css";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import CitySelector from "./components/CitySelector/CitySelector";
import { Container } from "react-bootstrap";
import UseFetch from "./components/Hooks/UseFetch";
import { API_BASE_URL, API_KEY } from "./apis/config";
import WeatherList from "./components/WeatherList/WeatherList";

function App() {
  // destructured the returned value
  const { data, error, isLoading, setUrl } = UseFetch();

  const Search = (city) => {
    setUrl(
      `${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
  };

  const getContent = () => {
    if (error) return <h2> Error when fetching : {error}</h2>;
    if (!data && isLoading) return <h2> Loading ...</h2>;
    if (!data) return null;
    return <WeatherList weathers={data.list} />;
  };

  return (
    <>
      <Container className="App">
        <CitySelector onSearch={Search} />
        {getContent()}
      </Container>
    </>
  );
}

export default App;
