import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

const client = new ApolloClient({
  uri: "http://localhost:5050/graphql",
  // Lo guarda en cache, no solicita los datos si ya estan en memoria.
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container m-auto h-screen flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Navigate to="/projects"/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/projects/:id" element={<ProjectDetails/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
