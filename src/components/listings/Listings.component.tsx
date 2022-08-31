import { iJobData } from "../../interfaces";
import JobCard from "../job-card/JobCard.component";
import { SListings } from "./Listings.styles";

interface ListingsProps {
  jobData: iJobData[];
}
function Listings({ jobData }: ListingsProps) {
  return (
    <SListings>
      {jobData.map((data) => (
        <JobCard key={data.id} jobInfo={data} />
      ))}
    </SListings>
  );
}

export default Listings;
