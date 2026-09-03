import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { LanguageSwitcher } from './components/languageSwitcher/LanguageSwitcher';
import { Nav } from './components/nav/Nav';
import { Portfolio } from './components/portfolio/Portfolio';
import { Skills } from './components/skills/Skills';
import { Timeline } from './components/timeline/Timeline';
import { useDocumentMeta } from './hooks/useDocumentMeta';

const App = () => {
  useDocumentMeta();

  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <LanguageSwitcher />
      <Header />
      <Nav />
      <main>
        <About />
        <Skills />
        <Timeline />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
