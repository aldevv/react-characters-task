import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Home } from "./Home";
import { AuthProvider } from "./auth";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

export default App;
