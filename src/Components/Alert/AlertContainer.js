import React, { useState } from "react";
import Alert from "./Alert";
import { getFullTime } from "../../Utils/handleFunctions";
import { Box } from "@mui/material";

const AlertContainer = ({ alerts, timeZone }) => {
  const [show, setShow] = useState(false);
  const [remove, setRemove] = useState(false);

  return (
    <Box
      sx={{
        "&": {
          position: "relative",
          backgroundColor: "white",
          cursor: "pointer",
          width: "100%",
          borderBottom: "1px solid lightgray",
        },
      }}
      onClick={() => setShow(!show)}
    >
      {!remove &&
        alerts.map((alert) => {
          return (
            <Alert
              setRemove={setRemove}
              getFullTime={getFullTime}
              alert={alert}
              show={show}
              setShow={setShow}
              timeZone={timeZone}
            />
          );
        })}
    </Box>
  );
};

export default AlertContainer;
