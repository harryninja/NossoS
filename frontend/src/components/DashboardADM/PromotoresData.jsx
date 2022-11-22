import axios from "axios";
import "./Briefings.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const PromotoresData = () => {

  // Modal
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1500,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };
  // https://nossostand.willhack.app
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState(null);
  const handleOpen = (e) => {
    axios
      .get(`https://nossostand.willhack.app/users/user/${e.target.value}`)
      .then((res) => {
        setModalData(res.data.briefing)
        console.log(modalData)
        setOpen(true);
      })
      .catch((error) => {
        console.log(error)
      });

  }
  const handleClose = () => setOpen(false);

  //Pagina principal
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
    },
  }));

  const OrangeButton = styled(Button)`
    background-color: orange;
    color: white;
    height: 60px;
    width: auto;
  `;

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  let [briefingInfo, setBriefingInfo] = useState(null)

  useLayoutEffect(() => {
    axios
      .get("https://nossostand.willhack.app/users/user/all")
      .then((res) => {
        setBriefingInfo(res.data.briefing)
        console.log(briefingInfo)
      })
      .catch((error) => {
        console.log(error)
      });
  }, [])

  if (!briefingInfo || null) return (<span>loading...</span>);

  return (

    <div className="featured">

      {/* {briefingInfo && briefingInfo.map((briefing, index) => */}
      <div className="featured">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Empresa</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Celular</StyledTableCell>
                <StyledTableCell>Cidade</StyledTableCell>
                <StyledTableCell>País</StyledTableCell>
                <StyledTableCell>Editar</StyledTableCell>
                <StyledTableCell>Deletar</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {briefingInfo && briefingInfo.map((briefing, index) =>
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">

                  </StyledTableCell>
                  <StyledTableCell>{briefing.email}</StyledTableCell>
                  <StyledTableCell>{briefing.phone}</StyledTableCell>
                  <StyledTableCell>{briefing.cidade}</StyledTableCell>
                  <StyledTableCell>{briefing.country}</StyledTableCell>
                  <StyledTableCell><OrangeButton value={briefing._id} onClick={handleOpen}><VisibilityIcon /></OrangeButton></StyledTableCell>
                  <StyledTableCell><OrangeButton><DeleteIcon /></OrangeButton></StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {open ?
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {modalData.cidade}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {modalData.address1}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {modalData.cidade}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {modalData.country}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {modalData.phone}
              </Typography>
            </Box>
          </Modal>
        </div>
        : (<></>)}
    </div>

  );
};

export default PromotoresData;
