import styles from './App.module.css';
import { AgeGroups } from './components/AgeGroups/AgeGroups';
import { Coaches } from './components/Coaches/Coaches';
import { Events } from './components/Events/Events';
import { FAQ } from './components/FAQ/FAQ';
import { Gallery } from './components/Gallery/Gallery';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MobileDock } from './components/MobileDock/MobileDock';
import { Hero } from './components/Hero/Hero';
import { Locations } from './components/Locations/Locations';
import { Signup } from './components/Signup/Signup';
import { Stats } from './components/Stats/Stats';
import { Steps } from './components/Steps/Steps';
import { Testimonials } from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Stats />
        <Steps />
        <AgeGroups />
        <Locations />
        <Coaches />
        <Gallery />
        <Events />
        <Testimonials />
        <FAQ />
        <Signup />
      </main>
      <Footer />
      <MobileDock />
    </div>
  );
}

export default App;
