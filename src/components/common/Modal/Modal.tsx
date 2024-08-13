import { Children, ReactNode, useState } from "react";
import Button from "react-bootstrap/Button";
import BootStrapModal from "react-bootstrap/Modal";
import classes from "./Modal.module.scss";
function Modal({
  show,
  onHide = () => {},
  children,
  title,
  closeButton = true,
  headerClassName,
  bodyClassName,
  titleClassName,
}: {
  show: boolean;
  title?: string;
  onHide?: () => void;
  children: ReactNode;
  closeButton?: boolean;
  headerClassName?: string;
  bodyClassName?: string;
  titleClassName?: string;
}) {
  let headerClass = classes.header;
  let bodyClass = classes.body;
  let titleClass = classes.title;
  if (headerClassName) {
    headerClass = `${headerClass} ${headerClassName}`;
  }
  if (titleClassName) {
    titleClass = `${titleClass} ${titleClassName}`;
  }
  if (bodyClassName) {
    bodyClass = `${bodyClass} ${bodyClassName}`;
  }
  return (
    <>
      <div>
        <BootStrapModal
          className={classes.modal}
          centered
          show={show}
          onHide={onHide}
        >
          <BootStrapModal.Header
            className={headerClass}
            closeButton={closeButton}
          >
            {title && (
              <BootStrapModal.Title className={titleClass}>
                {title}
              </BootStrapModal.Title>
            )}
          </BootStrapModal.Header>
          <BootStrapModal.Body className={bodyClass}>
            {children}
          </BootStrapModal.Body>
        </BootStrapModal>
      </div>
    </>
  );
}

export default Modal;
