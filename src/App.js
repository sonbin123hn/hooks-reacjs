import AuthContextProvider from "./components/contexts/AuthContext";
import ThemeContextProvider from "./components/contexts/ThemeContext";
import TodosContextProvider from "./components/contexts/TodoContext";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodosContextProvider>
            <Todos />
          </TodosContextProvider>
        </AuthContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>

    </div>
  );
}

export default App;
