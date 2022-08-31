import { iJobData } from "../../interfaces";
import { veryDarkGrayishCyan } from "../../styles/colors.styles";
import Pill from "../pill/Pill.component";
import Tag from "../tag/Tag.component";
import { SJobCard, SJobInfoContainer, STagsContainer } from "./JobCard.styles";

interface JobCardProps {
  jobInfo: iJobData;
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
}
function JobCard({ jobInfo, setFilters }: JobCardProps) {
  const handleTagClick = (tag: string) => {
    setFilters((prev) => {
      if (!prev.includes(tag)) return [...prev, tag];
      else return prev;
    });
  };

  return (
    <SJobCard featured={jobInfo.featured}>
      <SJobInfoContainer>
        <img src={jobInfo.logo} alt="" />
        <div>
          <div className="name-tags">
            <h1>{jobInfo.company}</h1>
            {jobInfo.new && <Pill name="NEW!" />}
            {jobInfo.featured && (
              <Pill name="featured" color={veryDarkGrayishCyan} />
            )}
          </div>
          <h2>{jobInfo.position}</h2>
          <div className="job-details">
            <span>{jobInfo.postedAt}</span>
            &bull;
            <span>{jobInfo.contract}</span>
            &bull;
            <span>{jobInfo.location}</span>
          </div>
        </div>
      </SJobInfoContainer>
      <STagsContainer>
        {[
          jobInfo.role,
          jobInfo.level,
          ...jobInfo.tools,
          ...jobInfo.languages,
        ].map((tag) => (
          <Tag key={tag} name={tag} onClick={() => handleTagClick(tag)} />
        ))}
      </STagsContainer>
    </SJobCard>
  );
}

export default JobCard;
