import { useState } from "react";
import { iJobData } from "../../interfaces";
import FilterTags from "../filter-tags/FilterTags.component";
import JobCard from "../job-card/JobCard.component";
import { SListings } from "./Listings.styles";

interface ListingsProps {
  jobData: iJobData[];
}
function Listings({ jobData }: ListingsProps) {
  const [filters, setFilters] = useState<string[]>([]);

  const filteredJobData = jobData.filter((data) => {
    if (filters.length <= 0) return data;
    return filters.every((tag) =>
      [data.role, data.level, ...data.tools, ...data.languages].includes(tag)
    );
  });

  const handleClearFilters = () => {
    setFilters([]);
  };

  const handleRemoveFilter = (tagToRemove: string) => {
    setFilters(filters.filter((tag) => tag !== tagToRemove));
  };

  return (
    <>
      {filters.length > 0 && (
        <FilterTags
          filters={filters}
          clearFilters={handleClearFilters}
          removeFilter={handleRemoveFilter}
        />
      )}
      <SListings filtersActive={filters.length > 0}>
        {filteredJobData.map((data) => (
          <JobCard key={data.id} jobInfo={data} setFilters={setFilters} />
        ))}
      </SListings>
    </>
  );
}

export default Listings;
