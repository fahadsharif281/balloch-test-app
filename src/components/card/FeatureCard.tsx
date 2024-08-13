import classes from "./FeatureCard.module.scss";
import { ICard } from "../../models/ICard";
import CustomButton from "../common/Button/Button";
const FeatureCard = ({
  cardClassName,
  src,
  title,
  description,
  handleEdit,
  handleDelete,
  containerClassName,
  ...props
}: ICard) => {
  let cardClass = classes.card;
  let containerClass = classes.container;
  if (cardClassName) {
    cardClass = `${cardClassName} ${cardClass}`;
  }
  if (containerClassName) {
    containerClass = `${containerClass} ${containerClassName}`;
  }
  return (
    <div className={containerClass} {...props}>
      <div className={cardClass}>
        {src && (
          <div>
            <img src={src} alt="mnm" />
          </div>
        )}
        {title && <h1 className={classes.title}>{title}</h1>}
        {description && (
          <div className={classes.description}>
            <p>{description}</p>
          </div>
        )}
        <div className={classes.buttons}>
          <CustomButton
            containerClassName={classes.btn}
            buttonClassName={classes.editButton}
            text="Edit"
            onClick={handleEdit}
          />
          <CustomButton
            containerClassName={classes.btn}
            buttonClassName={classes.deleteButton}
            onClick={handleDelete}
            text="Delete"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
