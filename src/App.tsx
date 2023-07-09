import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import CategoryFilter from "./components/categoryFilter";
import Banner from "./components/banner";

function App() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Header />
      <div className="container mx-auto">
        <CategoryFilter />
        <Content />
      </div>
      <Footer />
    </main>
  );
}

export default App;
