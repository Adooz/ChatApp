import { useState } from "react";
import AuthPage from "./authPage";
import ChatsPage from "./chatsPage";
import { User } from "./Interfaces";

function App() {
  const [user, setUser] = useState<User | null>(null);

  if (!user) {
    return <AuthPage onAuth={(userData: User) => setUser(userData)} />;
  } else {
    return <ChatsPage username={user.username} secret={user.secret} />;
  }
}

export default App;
