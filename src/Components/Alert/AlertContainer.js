import React, { useState } from "react";
import Alert from "./Alert";
import { getFullTime } from "../../Utils/handleFunctions";

const AlertContainer = ({ alert, timeZone }) => {
  const [show, setShow] = useState(false);
  const [remove, setRemove] = useState(false);

  return (
    <>
      {!remove && (
        <Alert
          setRemove={setRemove}
          getFullTime={getFullTime}
          alert={alert}
          show={show}
          setShow={setShow}
          timeZone={timeZone}
        />
      )}
    </>
  );
};

export default AlertContainer;
