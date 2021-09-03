import React, { createContext, useState, useEffect } from "react";
import { db, auth } from "../firebase/utils";

export const UserContext = createContext({});

const UserContextProvider = (props: any) => {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("SignedUpUsersData")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            setUser({
              user: snapshot.data(),
            });
          });
      } else {
        setUser({});
      }
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
