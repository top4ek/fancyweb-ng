import Header from '../../components/widgets/header';
import Footer from '../../components/widgets/footer/footer';
import './index.css';

export function App() {
  return (
    <>
      <Header />
      <main class="flex-auto mx-4 flex flex-col justify-start items-center">
        <div className="max-w-[1240px] w-full">
        </div>
      </main>
      <Footer />
    </>
  )
}
