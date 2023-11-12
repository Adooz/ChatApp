interface User {
  username: string;
  secret: string;
  email?: string;
  first_name?: string;
  last_name?: string;
}

interface ChatsPageProps {
    username: string;
    secret: string;
  }

export type { User, ChatsPageProps };
