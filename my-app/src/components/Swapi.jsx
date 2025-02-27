import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Box, Typography, CircularProgress, Link } from "@mui/material";
import { fetchInfoStart, clearInfo } from "./store/store";

function Swapi() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const result = useSelector((state) => state.api.result);
  const loading = useSelector((state) => state.api.loading);
  const error = useSelector((state) => state.api.error);

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchInfoStart(query));
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">SWAPI</Typography>
      <Typography>The Star Wars API</Typography>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Try it now!
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          label="Query (e.g., people/1/)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          variant="outlined"
        />
        <Button variant="contained" onClick={handleSearch}>
          Request
        </Button>
      </Box>

      <Typography variant="body2" sx={{ marginTop: 2 }}>
        <i>Need a hint? try </i>
        <Link href="#0">people/1/</Link>
        <i> or </i>
        <Link href="#0">planets/3/</Link>
        <i> or </i>
        <Link href="#0">starships/9/</Link>
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Result:
      </Typography>
      <Button variant="outlined" onClick={() => dispatch(clearInfo())}>
        Clear
      </Button>

      <Box sx={{ marginTop: 2 }}>
        {loading && <CircularProgress />}
        {error && <Typography color="error">{error}</Typography>}
        {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      </Box>
    </Box>
  );
}

export default Swapi;
