import { Cinemas } from "./components/cinemas/component";
import { Layout } from "./components/layout/component";
import { cinemas } from "./constants/mock";
import { UserContextProvider } from "./contexts/user";

export function App() {
  return (
    <UserContextProvider>
      <Layout>
        <Cinemas cinemas={cinemas} />
      </Layout>
    </UserContextProvider>
  );
}
