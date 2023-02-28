import React from "react";
import { Link } from "react-router-dom";
const FilterList = ({ filters }) => {
  return filters.map((f) => (
    <li key={f.key}>
      <Link
        to={f.url}
        className="border-none hover:bg-transparent hover:text-red-500"
      >
        {f.label}
      </Link>
    </li>
  ));
};

export default FilterList;
