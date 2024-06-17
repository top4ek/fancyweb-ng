import Header from '../../components/widgets/header/header';
import Footer from '../../components/widgets/footer/footer';
import Router from 'preact-router';
import Introduction from './pages/introduction';
import SupportOpenSource from './pages/support-open-source';
import SupportedHardware from './pages/supported-hardware/supported-hardware';
import OurTeam from './pages/our-team/';
import OpenWall from './pages/open-wall';
import DonateBanner from '../../components/widgets/donate-banner/donate-banner';
import './index.css';

export function App() {
  return (
    <>
      <Header />
      <main class="flex-auto mx-4 flex flex-col justify-start items-center">
        <div className="max-w-[1240px] w-full">
          <Router>
            <Introduction path="/" />
            <Introduction path="/introduction" />
            <SupportOpenSource path="/support-open-source" />
            <SupportedHardware path="/supported-hardware" />
            <OurTeam path="/our-team" />
            <OpenWall path="/open-wall" />
          </Router>
        </div>
        <div className="w-full max-w-[1240px] mt-auto pt-12 pb-4">
          <DonateBanner size="big" />
        </div>
      </main>
      <Footer/>
    </>
  )
}
