/*
* There are 3 key problems with the React code below. Can you find them?
* Assume fetchUserProfile exists elsewhere.
*/
import { Suspense, useState, useEffect } from 'react';

const SuspensefulUserProfile = ({ userId }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchUserProfile(userId).then((profile) => setData(profile));
  }, [userId, setData])
  return (
    <Suspense>
      <UserProfile data={data} />
    </Suspense>
  );
};
const UserProfile = ({ data }) => {
  return (
    <>
      <h1>{data.name}</h1>
      <h2>{data.email}</h2>
    </>
  );
};
const UserProfileList = () => (
  <>
    <SuspensefulUserProfile userId={1} />
    <SuspensefulUserProfile userId={2} />
    <SuspensefulUserProfile userId={3} />
  </>
);

/*
* Three issue with the code above is
* 1. fetchUserProfile is not defined and was not imported.
* 2. There is no fallback passed to the Suspense Component.
* 3. Watching for Userid and setData doesn not make sense to me and will cause the SuspensefulUserProfile to render infinetly
     Or will definately throw an error when rendering.
*/