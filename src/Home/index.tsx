import React, { useEffect, useState } from "react";
import { Button } from "../shared/components/UI/atoms";
import axiosHelper from "../shared/utilities/axiosHelper";

const Home: React.FC = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function getUser() {
      try {
        const response: any = await axiosHelper.get("/accounts/auth/user");
        const msg = `Hello ${response?.data?.user?.name}`;
        setMessage(msg);
      } catch (err) {
        const msg = `Oops still not authenticated`;
        setMessage(msg);
      }
    }

    getUser();
  }, []);

  const signOut = async () => {
    await axiosHelper.post("/accounts/auth/signout", {});
  };

  return (
    <>
      <Button onClick={signOut}>Sign out</Button>
      <h1>{message || "You need to be signed in to view this page"}</h1>
    </>
  );
};

export default Home;
