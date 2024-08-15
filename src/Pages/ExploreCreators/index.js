import React, { useEffect } from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/Dashboard/SubHeader";
import DataTable from "../../components/Dashboard/DataTable";
import { useExploreCreators } from "./useExploreCreators";
import { useDashboardHeader } from "../../components/Dashboard/SubHeader/useDashboardHeader";

const ExploreCreators = () => {
  const { isLoading, isPaginationLoading, creators, loadMore, lastElementRef } =
    useExploreCreators();

  const { handleDeleteCreator, handleEditCreator } = useDashboardHeader();

  const columns = ["Name", "Email", "Gender", "Available for chat", "Action"];

  return (
    <>
      <Header admin />
      <div className="wrapper">
        <SubHeader />
        <DataTable
          isLoading={isLoading}
          columns={columns}
          data={creators}
          loadMore={loadMore}
          isPaginationLoading={isPaginationLoading}
          lastElementRef={lastElementRef}
          handleDeleteCreator={handleDeleteCreator}
          handleEditCreator={handleEditCreator}
        />
      </div>
    </>
  );
};

export default ExploreCreators;
