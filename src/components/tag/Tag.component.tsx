import { STag } from "./Tag.styles";
import removeIcon from "../../images/icon-remove.svg";

interface TagProps {
  name: string;
  onClick?: Function;
  filterVariant?: boolean;
  onButtonClick?: Function;
}
function Tag({
  name,
  filterVariant = false,
  onClick,
  onButtonClick,
}: TagProps) {
  return (
    <STag filterVariant={filterVariant}>
      <span>{name}</span>
      {filterVariant && (
        <button aria-label="remove">
          <img src={removeIcon} alt="" />
        </button>
      )}
    </STag>
  );
}

export default Tag;
