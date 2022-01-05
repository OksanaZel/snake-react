import React from "react";
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import CancelIcon from '@material-ui/icons/Cancel';
import Modal from '@material-ui/core/Modal';
import { StyledBox, StyledIconButton} from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

function BasicModal({open, onClick, onClose, children}) {
  return createPortal(
          <Modal open={open} onClose={onClose} >
          <StyledBox>
              <StyledIconButton type="button" onClick={onClick} onClose={onClose}>
                    <CancelIcon />
                </StyledIconButton> 
                {children}
            </StyledBox>           
      </Modal>, modalRoot,
  )
}

BasicModal.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default BasicModal;