
import ImageGallery from "./components/ImageGallery";
import "./App.css";

function App() {
  return (
    <>
      <header className="navbar">
        <h1>Image Gallery</h1>
      </header>

      <main>
        <ImageGallery />
      </main>

      <footer className="footer">
        <p>© 2026 Image Gallery. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;