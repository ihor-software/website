import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/MenuComponent.js"

import HomePage from "./pages/HomePage.js";
import ContactsPage from "./pages/ContactMePage.js";
import ApplicationsPage from "./pages/ApplicationsPage.js";
import CVPage from "./pages/CVPage.js";
import PortfolioPage from "./pages/PortfolioPage.js";
import PrivacyPage from "./pages/PrivacyPage.js";
import QualificationsPage from "./pages/QualificationsPage.js";
import ConceptsPage from "./pages/ConceptsPage.js";
import ResearchesPage from "./pages/ResearchesPage.js";

// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<HomePage />} />
          <Route path="applications" element={<ApplicationsPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="cv" element={<CVPage />} />
          <Route path="qualifications" element={<QualificationsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="concepts" element={<ConceptsPage />} />
          <Route path="researches" element={<ResearchesPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
