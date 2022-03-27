import { Box, Typography, SvgIcon } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import React from "react";

const Alert = ({ alert, show, setShow, timeZone, setRemove, getFullTime }) => {
  return (
    <>
      <Box
        sx={{
          "&": {
            position: "absolute",
            height: "100px",
            display: "flex",
            alignItems: "center",
          },
        }}
        onClick={() => setRemove(true)}
      >
        <SvgIcon
          sx={{
            "&": { paddingLeft: 2, fill: "black" },
            "&:hover": { fill: "red" },
          }}
          component={RemoveCircleOutlineIcon}
          viewBox="0 0 35 35"
        />
      </Box>

      <Box pt={1} color="gray">
        <Typography variant="p" fontWeight="600" color="black">
          {alert.event}
        </Typography>
        <Box sx={{ "&": { display: "flex", justifyContent: "center" } }}>
          <Box variant="span" mr="10px">
            Start:
          </Box>
          {getFullTime(alert.start)}
        </Box>
        <Box sx={{ "&": { display: "flex", justifyContent: "center" } }}>
          <Box variant="span" mr="10px">
            End:
          </Box>

          {getFullTime(alert.end)}
        </Box>
      </Box>
      {show ? (
        <>
          <Typography
            pb={1}
            fontSize="12px"
            color="gray"
            borderBottom={show ? "1px solid lightgray" : ""}
          >
            Source: {alert.sender_name}
          </Typography>
          <Box
            color="black"
            pb={2}
            m={"auto"}
            width={{ xs: "100%", md: "70%", lg: "50%" }}
          >
            {alert.description.split("*").map((str) => (
              <>
                <br />
                <Typography paddingX={{ xs: 3 }}>{str}</Typography>
              </>
            ))}
          </Box>
        </>
      ) : (
        <Typography
          pb={1}
          fontSize="12px"
          color="gray"
          borderBottom={show ? "1px solid lightgray" : ""}
        >
          Source: {alert.sender_name}
        </Typography>
      )}
    </>
  );
};

export default Alert;
