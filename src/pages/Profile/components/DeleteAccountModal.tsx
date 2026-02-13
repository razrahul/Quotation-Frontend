import "./DeleteAccountModal.scss";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { deleteProfile } from "../../../redux/action/userActions";

type Props = {
  onClose: () => void;
};

const DeleteAccountModal = ({ onClose }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = async () => {
    await dispatch(deleteProfile());
  };

  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        <h3>Are you sure you want to delete your account?</h3>

        <p>
          If you delete your account, all your quotation data may be permanently
          lost.
        </p>

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="confirm-btn" onClick={handleDelete}>
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
