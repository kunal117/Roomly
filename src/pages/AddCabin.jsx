import { useState } from "react";

import Button from "../ui/Button";
import Modal from "../ui/Modal";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

// function AddCabin() {
//   return (
//     <Modal>
//       <Modal.Open opens="cabin-form">
//         <Button>Add new cabin</Button>
//       </Modal.Open>
//       <Modal.Window name="cabin-form">
//         <CreateCabinForm />
//       </Modal.Window>

//       {/* <Modal.Open>
//         <Button>Show Table</Button>
//       </Modal.Open>
//       <Modal.Window>
//         <CreateCabinForm />
//       </Modal.Window> */}
//     </Modal>
//   );
// }

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button
        size="medium"
        variation="primary"
        onClick={() => setIsOpenModal((show) => !show)}
      >
        Add new Cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}
export default AddCabin;
