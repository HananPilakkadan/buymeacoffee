import React from "react";
import Style from "./DataTable.module.scss";
import { FiTrash2 } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import Loader from "../../Loader";

const DataTable = ({
  isLoading,
  isPaginationLoading,
  columns,
  data,
  loadMore,
  lastElementRef,
}) => {
  return (
    <div className={Style.table_container}>
      <table className={Style.table}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className={`${Style.th} ${
                  columns?.length === index + 1 && Style.th_action
                }`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? Array(5)
                .fill(null)
                .map((_, index) => (
                  <tr key={index}>
                    <td className={Style.td}>
                      <div className={Style.shimmer} />
                    </td>
                    <td className={Style.td}>
                      <div className={Style.shimmer} />
                    </td>
                    <td className={Style.td}>
                      <div className={Style.shimmer} />
                    </td>
                    <td className={Style.td}>
                      <div className={Style.shimmer} />
                    </td>
                    <td className={Style.td}>
                      <div className={Style.shimmer} />
                    </td>
                  </tr>
                ))
            : data?.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={Style.trHover}
                  ref={rowIndex === data.length - 1 ? lastElementRef : null}
                >
                  <td className={Style.td}>{row?.name}</td>
                  <td className={Style.td}>{row?.email}</td>
                  <td
                    className={Style.td}
                    style={{ textTransform: "capitalize" }}
                  >
                    {row?.gender}
                  </td>
                  <td
                    className={Style.td}
                    style={{
                      textTransform: "capitalize",
                      color: row?.status === "active" ? "green" : "red",
                      fontWeight: "600",
                    }}
                  >
                    {row?.status}
                  </td>
                  <td className={Style.td}>
                    <div className={Style.button_group}>
                      <button className={Style.edit}>Edit</button>
                      <button className={Style.trash}>
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      {!isLoading && (
        <div className={Style.bottom}>
          <button className={Style.laodMore} onClick={(e) => loadMore(e)}>
            {isPaginationLoading ? (
              <Loader />
            ) : (
              <>
                Load More <FaAngleDown />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
