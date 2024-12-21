/*eslint-disable*/

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!cabins.length) return <Empty resourceName={"cabins"} />;

  // 1) FILTER
  const filterValue = searchParams.get("discount") || "all";

  let filterCabins;
  if (filterValue === "all") filterCabins = cabins;

  if (filterValue === "no-discount")
    filterCabins = cabins.filter((cabin) => cabin.discount === 0);

  if (filterValue === "with-discount")
    filterCabins = cabins.filter((cabin) => cabin.discount > 0);

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "name-asc";

  const [field, direction] = sortBy.split("-");
  // console.log(field, direction);
  const modifier = direction === "asc" ? 1 : -1;
  // const sortedCabins = filterCabins.sort(
  //   (a, b) => Number(a[field]) - Number(b[field]) * modifier
  // );

  const sortedCabins = filterCabins?.sort((a, b) =>
    typeof a[field] === "string"
      ? a[field].localeCompare(b[field]) * modifier
      : (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div>CABIN</div>
          <div>NAME</div>
          <div>CAPICITY</div>
          <div>PRICE</div>
          <div>DISCOUNT</div>
        </Table.Header>
        <Table.Body
          // data={filterCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
export default CabinTable;
