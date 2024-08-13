import CustomButton from "../../components/common/Button/Button";
import classes from "./FeaturesCardSection.module.scss";
import FeatureCard from "../../components/card/FeatureCard";
import Modal from "../../components/common/Modal/Modal";
import { useState } from "react";
import CustomFeatureCardModal from "./AddFeatureCardModal";
import { useDispatch, useSelector } from "react-redux";
import { IContentCardApiCall } from "../../models/IWebContentReducer";
import { deleteContentCardApiCall } from "../../services/general.services";
import caution from "../../assets/png/caution.png";
import { toast } from "react-toastify";
import { getAllContentCard } from "../../redux/actions/webContent.action";

const baseURL = process.env.REACT_APP_BASE_URL;

const FeaturesCardSection = () => {
  const { contentCards } = useSelector((state: any) => state.root.webContent);
  const dispatch = useDispatch<any>();
  const [show, setShow] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [editCard, setEditCard] = useState<IContentCardApiCall | null>(null);
  const handleClose = () => {
    setShow(!show);
  };
  const handleDelete = () => {
    deleteContentCardApiCall(deleteId).then((response) => {
      if (response?.data?.status) {
        toast.success("Delete Successfully");
        dispatch(getAllContentCard());
        setShowDeleteModal(false);
      }
    });
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.section1}>
          <div className={classes.heading}>Feature Cards</div>
          <CustomButton
            containerClassName={classes.button}
            buttonClassName={classes.button}
            text="Add"
            onClick={() => {
              handleClose();
              setEditCard(null);
            }}
          />
        </div>
        <div className={classes.section2}>
          {!!contentCards &&
            contentCards?.map((item: IContentCardApiCall) => {
              return (
                <>
                  <FeatureCard
                    containerClassName={classes.card_container}
                    handleEdit={() => {
                      setEditCard(item);
                      setShow(true);
                    }}
                    handleDelete={() => {
                      setShowDeleteModal(true);
                      setDeleteId(item?._id);
                    }}
                    title={item?.title}
                    description={item?.description}
                    src={`${baseURL}/${item?.image}`}
                  />
                </>
              );
            })}
        </div>
      </div>
      {showDeleteModal && (
        <Modal
          closeButton={false}
          onHide={() => setShowDeleteModal(false)}
          show={showDeleteModal}
        >
          <div className={classes.modal_container}>
            <div className={classes.caution}>
              <img src={caution} />
            </div>
            <div className={classes.warning}>
              Are you sure you want to delete this Feature Card?
            </div>
            <div className={classes.btn_container}>
              <CustomButton
                containerClassName={classes.yes_btn_container}
                buttonClassName={classes.yes_btn}
                onClick={handleDelete}
                text="Yes"
              />
              <CustomButton
                onClick={() => setShowDeleteModal(false)}
                containerClassName={classes.yes_btn_container}
                buttonClassName={classes.no_btn}
                text="No"
              />
            </div>
          </div>
        </Modal>
      )}
      <Modal
        titleClassName={classes.modalheader}
        title={editCard ? "Update Feature Card" : "Add Feature Card"}
        closeButton={true}
        onHide={handleClose}
        show={show}
      >
        <CustomFeatureCardModal handleClose={handleClose} editCard={editCard} />
      </Modal>
    </>
  );
};

export default FeaturesCardSection;
