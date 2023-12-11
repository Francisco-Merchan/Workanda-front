import React, { useEffect } from "react";
import { AppLayout } from "../layout/AppLayout";
import { HeaderSection } from "../components/HeaderSection";
import UserModal from "../components/UserModal";
import { UsersList } from "../components/UsersList";

const AppPage = () => {
  return (
    <AppLayout>
      <HeaderSection />
      <UsersList />
      <UserModal />
    </AppLayout>
  );
};

export default AppPage;
