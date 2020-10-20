import React, { useState } from "react";
import Card from "../components/hardware/Card";
import Modal from "react-modal";

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Hardware() {
  const hardwares = [
    {
      id: 1,
      name: "Monitor",
      price: "100$",
      description: "144hz 1920x1080px",
      imageUrl:
        "//images.samsung.com/is/image/samsung/th-ur55-lu28r550uqexxt-frontblack-229495059?$PD_GALLERY_L_JPG$",
    },

    {
      id: 2,
      name: "Mainboard",
      price: "50$",
      description: "A320M",
      imageUrl:
        "https://sites.google.com/site/cp5910122113051/_/rsrc/1479283827567/2-menbxrd-main-board/%E0%B9%80%E0%B8%A1%E0%B8%A1.jpg",
    },

    {
      id: 3,
      name: "CPU",
      price: "250$",
      description: "R5-3600",
      imageUrl:
        "https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/7/3/730143309936-1-1598372198.jpg",
    },

    {
      id: 4,
      name: "RAM",
      price: "50$",
      description: "TT TOUCHRAM 32GB",
      imageUrl:
        "https://thermaltake.azureedge.net/pub/media/catalog/product/cache/cff8144a2156fdaedfb0b91d200e5398/t/r/trrgbmemoryddr4b_01_3.jpg",
    },

    {
      id: 5,
      name: "GPU",
      price: "250$",
      description: "NVIDIA GEFORCE RTX 3090",
      imageUrl:
        "https://cnet4.cbsistatic.com/img/VKJh-KU3VkheQY_CtMI33Mhhb64=/1092x0/2020/09/01/809e4f50-5e89-4c5d-a6b0-c93fa045c268/screen-shot-2020-09-01-at-9-35-51-am.png",
    },
  ];

  const [hardwaresState, setHardwaresState] = useState(hardwares);
  const resetHardwaresState = () => setHardwaresState([]); // ลบ State ทั้งหมด โดยกำหนดค่าในอาร์เรย์ให้เท่ากับ 0
  const deleteThisHardware = (hardwareId) => {
    const newHardwaresState = hardwaresState.filter(function (hardware) {
      return hardware.id !== hardwareId;
    });
    setHardwaresState(newHardwaresState);
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [hardwareState, sethardwareState] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  });

  return (
    <div>
      <button onClick={openModal}>เพิ่มข้อมูล</button>
      <button onClick={resetHardwaresState}>ลบข้อมูลทั้งหมด</button>
      <div className="d-flex">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <form>
            <div>
              <label>ชื่ออุปกรณ์</label>
              <input name="name" value={hardwareState.name} />
            </div>

            <div>
              <label>ราคา</label>
            </div>

            <div>
              <label>รายละเอียด</label>
            </div>

            <div>
              <label>รูปภาพ</label>
            </div>
          </form>
        </Modal>
        {hardwaresState.map(function (hardware) {
          return (
            <Card
              hardware={hardware}
              deleteThisHardware={deleteThisHardware}
              key={hardware.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Hardware;
