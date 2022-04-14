import React from "react";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from "react-table";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";
import GlobalFilter from "./GlobalFilter";
import SelectColumnFilter from "./SelectColumnFilter";
import Button from "./Button";

const Table = ({ columns, data, tableFor }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // globalFilter,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    setFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, hiddenColumns: "typeAlert" },
    },
    useFilters,
    useGlobalFilter,
    useSortBy, // puts sort below the global filter
    usePagination // puts the pagination on the bottom
  );

  // Render the UI for your table
  return (
    <div className="container-table">
      <div className="w-full flex lg:flex-row flex-col-reverse items-center justify-between">
        <div className="lg:w-auto w-full">
          {tableFor === "weekly" && (
            <SelectColumnFilter setFilter={setFilter} />
          )}
          <select
            className="px-5 py-2 rounded-lg shadow ml-2"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Hiển thị {pageSize}
              </option>
            ))}
          </select>
        </div>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <table className={tableFor} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={""} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting.
                <th
                  /* Add a sort direction indicator */
                  className={`${
                    column.isSorted &&
                    (column.isSortedDesc
                      ? "border-black border-t-4"
                      : "border-black border-b-4")
                  }`}
                  key={""}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <div>{column.render("Header")}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td key={""} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-center">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <div>
              <ChevronLeftIcon className="h-5 w-5 text-gray-500 hover:text-white" />
            </div>
          </button>
          <Button gotoPage={gotoPage} page={1} selectedPage={pageIndex} />
          {pageCount > 1 && (
            <>
              {pageIndex < 5 - 1 ? (
                <>
                  {Array.from(
                    { length: pageCount < 5 ? pageCount - 2 : 5 - 1 },
                    (v, k) => k + 2
                  ).map((page, index) => (
                    <Button
                      key={index}
                      gotoPage={gotoPage}
                      page={page}
                      selectedPage={pageIndex}
                    />
                  ))}
                  {pageCount > 5 && <span>...</span>}
                </>
              ) : (
                <>
                  {pageIndex > pageCount - 5 ? (
                    <>
                      <span>...</span>
                      {Array.from(
                        { length: 5 - 1 },
                        (v, k) => k + pageCount - (5 - 1)
                      ).map((page, index) => (
                        <Button
                          key={index}
                          gotoPage={gotoPage}
                          page={page}
                          selectedPage={pageIndex}
                        />
                      ))}
                    </>
                  ) : (
                    <>
                      <span>...</span>
                      {Array.from({ length: 3 }, (v, k) => k + pageIndex).map(
                        (page, index) => (
                          <Button
                            key={index}
                            gotoPage={gotoPage}
                            page={page}
                            selectedPage={pageIndex}
                          />
                        )
                      )}
                      <span>...</span>
                    </>
                  )}
                </>
              )}
              <Button
                gotoPage={gotoPage}
                page={pageCount}
                selectedPage={pageIndex}
              />
            </>
          )}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <div>
              <ChevronRightIcon className="h-5 w-5 text-gray-500 hover:text-white" />
            </div>
          </button>
        </div>
        <div>
          <span>
            Hiển thị
            <strong> {pageIndex * pageSize + 1} </strong>
            đến
            <strong>
              {" "}
              {(pageIndex + 1) * pageSize > preGlobalFilteredRows.length
                ? preGlobalFilteredRows.length
                : (pageIndex + 1) * pageSize}{" "}
            </strong>
            trong tổng số
            <strong> {preGlobalFilteredRows.length} </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;
