import React, { useEffect } from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/Dashboard/SubHeader";
import DataTable from "../../components/Dashboard/DataTable";
import { useExploreCreators } from "./useExploreCreators";

const ExploreCreators = () => {
  const { isLoading, isPaginationLoading, creators, loadMore, lastElementRef } =
    useExploreCreators();

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
        />
      </div>
    </>
  );
};

export default ExploreCreators;
