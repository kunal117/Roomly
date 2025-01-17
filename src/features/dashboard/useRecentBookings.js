import { useSearchParams } from "react-router-dom";

export function useRecentBoolings() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
}
