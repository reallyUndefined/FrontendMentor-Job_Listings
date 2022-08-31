import { STag } from "./Tag.styles";
import removeIcon from "../../images/icon-remove.svg";

interface TagProps {
  name: string;
  onClick?: VoidFunction;
  filterVariant?: boolean;
  onButtonClick?: VoidFunction;
}
function Tag({
  name,
  filterVariant = false,
  onClick,
  onButtonClick,
}: TagProps) {
  return (
    <STag filterVariant={filterVariant}>
      <span onClick={onClick}>{name}</span>
      {filterVariant && (
        <button aria-label="remove" onClick={onButtonClick}>
          <img src={removeIcon} alt="" />
        </button>
      )}
    </STag>
  );
}

export default Tag;
