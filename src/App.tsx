import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "./components/NavBar";
import MainRoutes from "./router/main.routes";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <MainRoutes />
    </QueryClientProvider>
  );
}

export default App;
