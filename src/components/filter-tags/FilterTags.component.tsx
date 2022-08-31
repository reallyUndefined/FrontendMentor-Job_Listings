import Tag from "../tag/Tag.component";
import { SFilterTags, SFilterTagsContainer } from "./FilterTags.styles";

interface FilterTagsProps {
  filters: string[];
  clearFilters: VoidFunction;
  removeFilter: Function;
}
function FilterTags({ filters, clearFilters, removeFilter }: FilterTagsProps) {
  return (
    <SFilterTagsContainer>
      <SFilterTags>
        <div className="tags">
          {filters.map((tag) => (
            <Tag
              key={tag}
              name={tag}
              filterVariant={true}
              onButtonClick={() => removeFilter(tag)}
            />
          ))}
        </div>
        <button onClick={clearFilters}>Clear</button>
      </SFilterTags>
    </SFilterTagsContainer>
  );
}

export default FilterTags;
