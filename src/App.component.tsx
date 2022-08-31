import Header from "./components/header/Header.component";
import Listings from "./components/listings/Listings.component";

import { GlobalStyles } from "./styles/Global.styles";

import jobData from "./data.json";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Listings jobData={jobData} />
    </>
  );
}

export default App;
