import { Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AuthButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} sx={{ width: 200, mr: 2 }}>
      <Grid size={6}>
        <Button
          variant="contained"
          sx={{ bgcolor: "white", color: "#1976d2" }}
          onClick={() => navigate("/login")}
        >
          <Typography>Login</Typography>
        </Button>
      </Grid>

      <Grid size={6}>
        <Button
          variant="contained"
          sx={{ bgcolor: "white", color: "#1976d2" }}
          onClick={() => navigate("/register")}
        >
          <Typography>Register</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default AuthButton;
