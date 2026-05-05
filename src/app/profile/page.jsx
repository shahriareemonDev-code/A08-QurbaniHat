"use client";

import UpdateProfilePage from "@/components/UpdateProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";
import React from "react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  
  return (
    <div>
      <Card className="max-w-100 mx-auto border mt-10 p-20 flex flex-col items-center">
        <Avatar className="h-20 w-20 ">
          <Avatar.Image src={user?.image} />
          <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
        </Avatar>
         <h2>{user?.name}</h2>
         <p>{user?.email}</p>

         <UpdateProfilePage> </UpdateProfilePage>
      </Card>
    </div>
  );
};

export default ProfilePage;
