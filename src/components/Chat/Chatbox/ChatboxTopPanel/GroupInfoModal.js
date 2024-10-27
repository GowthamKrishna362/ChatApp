import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

const GroupInfoModal = ({ isOpen, closeModal, defaultStyles, members = [] }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={defaultStyles}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      portalClassName="group-info-modal"
    >
      <div className="dialogue-box" onClick={closeModal}>
        <div className="dialogue-box__header-wpr">Chat Info</div>
        <div className="dialogue-box__content-wpr">
          <div className="dialogue-box__label">Members:</div>
          {members.map((member) => (
            <div key={member.username}>{member.username}</div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

GroupInfoModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  members: PropTypes.shape([{}]),
  openModal: PropTypes.func,
  defaultStyles: PropTypes.shape({
    content: PropTypes.shape({}),
  }),
};
export default GroupInfoModal;
