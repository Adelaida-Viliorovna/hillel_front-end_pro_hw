import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ textAlign: "center", p: 2, mt: 4, bgcolor: "#eee" }}>
      <Typography variant="body2">
        © 2025 Лизогуб Анастасія | <a href="mailto:adelaida.viliorovna@gmail.com">Email</a> | 
        <a href="https://github.com/Adelaida-Viliorovna" target="_blank"> GitHub</a>
      </Typography>
    </Box>
  );
}

export default Footer;
