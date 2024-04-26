import { useEffect, useState } from "react";
import { states } from "../data/states";

const DebounceFiltering = () => {
  const [search, setSearch] = useState("");
  const [filteredStates, setFilteredStates] = useState(states);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filter = states.filter((state) => {
        return state.name.toLowerCase().includes(search.toLowerCase());
      });

      setFilteredStates(filter);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {filteredStates &&
          filteredStates.map((state) => {
            return <li key={state.abbreviation}>{state.name}</li>;
          })}
      </ul>
    </>
  );
};

export default DebounceFiltering;
