import "./App.css";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Row from "../Row/Row";
import { addNewRow } from "store/Slices/addrSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.addr.rows);
  const total = useSelector((state) => state.addr.total);
  const rowIndex = useSelector((state) => state.addr.rowIndex);
  const dispatch = useDispatch();

  const addTableRows = () => {
    const rowsInput = {
      key: rowIndex,
      sign: "+",
      number: "",
      isDisabled: false,
    };
    dispatch(addNewRow(rowsInput));
  };

  return (
    <div className="App">
      <Box sx={{ display: "flex", padding: "20px", justifyContent: "center" }}>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              mt={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Addr calculator challenge
            </Typography>
            <img
              src="/logo.svg"
              alt="Logo"
              width="150"
              style={{ float: "left" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Button
                  variant="contained"
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                  startIcon={<AddIcon />}
                  onClick={addTableRows}
                >
                  Add row
                </Button>
                {state.map((item) => {
                  return <Row key={item.key} rowItem={item} />;
                })}
              </CardContent>
              <CardActions>
                <Typography variant="h5" gutterBottom>
                  Result : {total}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ textAlign: "start", margin: "18px" }}
      >
        Created by Abdullah AL-Mousa
      </Typography>
    </div>
  );
}

export default App;
