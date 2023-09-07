import { Grid, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import CheckIcon from "@mui/icons-material/Check";
import { DropDown, Input } from "components";
import { useDispatch } from "react-redux";
import {
  disableButton,
  updateTotalResult,
  removeRow,
  updateNumber,
  updateRowSign,
} from "store/Slices/addrSlice";

export default function Row({ rowItem }) {
  const dispatch = useDispatch();
  const disableButtonText = !rowItem.isDisabled ? "Disable" : "Enable";
  const disableButtonColor = !rowItem.isDisabled ? "error" : "success";

  const deleteHandler = () => {
    dispatch(removeRow(rowItem.key));
    dispatch(updateTotalResult());
  };

  const inputChangeHandler = (event) => {
    dispatch(updateNumber({ key: rowItem.key, value: event.target.value }));
    dispatch(updateTotalResult());
  };

  const selectChangeHandler = (event) => {
    dispatch(updateRowSign({ key: rowItem.key, sign: event.target.value }));
    dispatch(updateTotalResult());
  };

  return (
    <Grid
      container
      spacing={0.5}
      mt={2}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Grid item xs={2}>
        <DropDown
          value={rowItem.sign}
          selectChangeHandler={selectChangeHandler}
          Id={rowItem.key}
        />
      </Grid>
      <Grid item xs={3} md={6}>
        <Input
          value={rowItem.number}
          isDisabled={rowItem.isDisabled}
          onChange={inputChangeHandler}
          type="number"
          min={0}
        />
      </Grid>
      <Grid
        item
        xs={7}
        md={4}
        sx={{ display: "flex", justifyContent: "flex-start", gap: 1 }}
      >
        <Button
          variant="outlined"
          onClick={deleteHandler}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button
          variant="outlined"
          color={disableButtonColor}
          onClick={() => {
            dispatch(
              disableButton({ key: rowItem.key, value: rowItem.isDisabled })
            );
            dispatch(updateTotalResult());
          }}
          startIcon={!rowItem.isDisabled ? <BlockIcon /> : <CheckIcon />}
        >
          {disableButtonText}
        </Button>
      </Grid>
    </Grid>
  );
}
