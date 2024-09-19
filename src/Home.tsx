import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "./api";
import { Card } from "./Card";
import { useAuth } from "./auth";
import { Login } from "./Login";

export const Home = () => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const { status, data, error } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });

  if (!isLoggedIn) {
    return (
      <div>
        <Login
          user={user}
          setUser={setUser}
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
        />
      </div>
    );
  }

  if (status === "pending") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  const characters = data?.results;

  return (
    <>
      <h1>
        Characters for user: {user?.username}, loggedIn?:{" "}
        {isLoggedIn ? "Yes" : "No"}
      </h1>
      {characters.map((ch, index) => {
        return <Card key={index} character={ch} />;
      })}
    </>
  );
};
