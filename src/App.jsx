import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Users from './pages/Users';
import Navbar from './components/Navbar';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="full-height">
        <Navbar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
