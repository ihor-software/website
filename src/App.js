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
import LifelinePage from "./pages/LifelinePage.js";
import ProductsPage from "./pages/ProductsPage.tsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index path="website" element={<HomePage />} />
          <Route path="applications" element={<ApplicationsPage />} />
          <Route path="lifeline" element={<LifelinePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="cv" element={<CVPage />} />
          <Route path="qualifications" element={<QualificationsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="researches" element={<ResearchesPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
