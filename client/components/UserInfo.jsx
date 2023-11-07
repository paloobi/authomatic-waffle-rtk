import { useMeQuery } from "../features/api";

const UserInfo = () => {
  const { data: user, isLoading, error } = useMeQuery();

  if (user) {
    console.log(user);
  }

  if (isLoading) {
    return <p>Loading user data...</p>;
  }
  if (error) {
    return <p>Oops! Error loading user data :(</p>;
  }
  return user ? (
    <div>
      <p>Username: {user.username}</p>
      <p>User ID: {user.id}</p>
    </div>
  ) : null;
};

export default UserInfo;
