import Header from '../../components/widgets/header/header';
import Footer from '../../components/widgets/footer/footer';
import Router from 'preact-router';
import Introduction from './pages/introduction/introduction';
import SupportOpenSource from './pages/support-open-source/support-open-source';
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
