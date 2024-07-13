import Header from '../../components/widgets/header';
import HeaderMenu from '../../components/widgets/header-menu';
import Footer from '../../components/widgets/footer/footer';
import Introduction from './pages/introduction';
import SupportOpenSource from './pages/support-open-source';
import SupportedHardware from './pages/supported-hardware/supported-hardware';
import InstallationGuide from './pages/installation-guide';
import OurTeam from './pages/about/our-team/';
import OurProjects from './pages/about/our-projects';
import OurSoftware from './pages/about/our-software';
import GreenLife from './pages/about/green-life';
import OurGroups from './pages/about/our-groups';
import OpenWall from './pages/open-wall';
import QRCode from './pages/tools/qr-code';
import DonateBanner from '../../components/widgets/donate-banner/donate-banner';
import { headerMenuConstants } from './constants'; 
import { LocationProvider, ErrorBoundary, Router, Route } from 'preact-iso';
import './index.css';

export function App() {
  return (
    <>
      <Header>
        <HeaderMenu list={headerMenuConstants} />
      </Header>
      <main class="flex-auto mx-4 flex flex-col justify-start items-center">
        <div className="max-w-[1240px] w-full">
          <LocationProvider>
            <ErrorBoundary>
              <Router>
                <Route path="/" component={Introduction} />
                <Route path="/introduction" component={Introduction} />
                <Route path="/support-open-source" component={SupportOpenSource} />
                <Route path="/supported-hardware" component={SupportedHardware} />
                <Route path="/supported-hardware/:vendor/:model" component={InstallationGuide} />
                <Route path="/our-team" component={OurTeam} />
                <Route path="/our-projects" component={OurProjects} />
                <Route path="/our-software" component={OurSoftware} />
                <Route path="/green-life" component={GreenLife} />
                <Route path="/our-telegram" component={OurGroups} />
                <Route path="/open-wall" component={OpenWall} />
                <Route path="/tools/qr-code-generator" component={QRCode} />
              </Router>
            </ErrorBoundary>
          </LocationProvider>
        </div>
        <div className="w-full max-w-[1240px] mt-auto pt-12 pb-4">
          <DonateBanner size="big" />
        </div>
      </main>
      <Footer/>
    </>
  )
}
