import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { HomePage } from "@/pages/HomePage";
import { IndustriesPage } from "@/pages/IndustriesPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { InsightsPage } from "@/pages/InsightsPage";
import { CareersPage } from "@/pages/CareersPage";
import { AboutPage } from "@/pages/AboutPage";
import { GenericSubPage } from "@/pages/GenericSubPage";
import { SoftwareSolutionsPage } from "@/pages/SoftwareSolutionsPage";
// Career sub-pages
import { AreaOfExpertisePage } from "@/pages/career/AreaOfExpertisePage";
import { CountdownPage } from "@/pages/career/CountdownPage";
import { LimitlessLearningPage } from "@/pages/career/LimitlessLearningPage";
import { InclusionDiversityPage } from "@/pages/career/InclusionDiversityPage";
import { LifeAtAvanadePage } from "@/pages/career/LifeAtAvanadePage";
import { BenefitsPage } from "@/pages/career/BenefitsPage";
import { SearchJobsPage } from "@/pages/career/SearchJobsPage";
// About sub-pages
import { LeadershipPage } from "@/pages/about/LeadershipPage";
import { ResponsibleBusinessPage } from "@/pages/about/ResponsibleBusinessPage";
// Insights sub-pages
import { ClientStoriesPage } from "@/pages/insights/ClientStoriesPage";
import { EventsPage } from "@/pages/insights/EventsPage";

export const App = () => {
  return (
    <BrowserRouter>
      <body className="text-zinc-800 text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc max-w-full outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-segoe_ui">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent outline-[3px]"></div>
          <div className="box-border caret-transparent outline-[3px]">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/en-us" element={<HomePage />} />
              <Route path="/en-us/industry" element={<IndustriesPage />} />
              <Route path="/en-us/industry/:sub" element={<GenericSubPage />} />
              <Route path="/en-us/services" element={<ServicesPage />} />
              <Route path="/en-us/services/:sub" element={<GenericSubPage />} />
              <Route
                path="/en-us/software-solutions"
                element={<SoftwareSolutionsPage />}
              />
              <Route
                path="/en-us/software-solutions/:sub"
                element={<GenericSubPage />}
              />
              <Route path="/en-us/insights" element={<InsightsPage />} />
              <Route
                path="/en-us/insights/clients"
                element={<ClientStoriesPage />}
              />
              <Route path="/en-us/insights/events" element={<EventsPage />} />
              <Route path="/en-us/insights/:sub" element={<GenericSubPage />} />
              <Route path="/en-us/career" element={<CareersPage />} />
              <Route
                path="/en-us/career/area-of-expertise"
                element={<AreaOfExpertisePage />}
              />
              <Route
                path="/en-us/career/countdown"
                element={<CountdownPage />}
              />
              <Route
                path="/en-us/career/limitless-learning"
                element={<LimitlessLearningPage />}
              />
              <Route
                path="/en-us/career/inclusion-and-diversity"
                element={<InclusionDiversityPage />}
              />
              <Route
                path="/en-us/career/life-at-avanade"
                element={<LifeAtAvanadePage />}
              />
              <Route path="/en-us/career/benefits" element={<BenefitsPage />} />
              <Route
                path="/en-us/career/search-jobs"
                element={<SearchJobsPage />}
              />
              <Route path="/en-us/about" element={<AboutPage />} />
              <Route
                path="/en-us/about/leadership"
                element={<LeadershipPage />}
              />
              <Route
                path="/en-us/about/responsible-business"
                element={<ResponsibleBusinessPage />}
              />
              <Route path="/en-us/about/:sub" element={<GenericSubPage />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </body>
    </BrowserRouter>
  );
};
