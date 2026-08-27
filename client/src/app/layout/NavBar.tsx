import { Box, AppBar, Toolbar, Container, Typography, Button } from "@mui/material";
import { Group } from "@mui/icons-material";

const navItemStyles = {
  fontSize: '1.2rem',
  textTransform: "uppercase",
  fontWeight: "bold",
  px: 2,
  py: 1,
  cursor: "pointer",
  '&:hover': { opacity: 0.8 }
};

type Props ={
  openForm: () => void
}

export default function NavBar({openForm}: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'}}>
        <Container maxWidth='xl'>
          <Toolbar sx={{display: 'flex', justifyContent: "space-between"}}>
              <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                <Group fontSize="large"/>
                <Typography variant="h4" sx={{fontWeight: 'bold'}}>Reactivities</Typography>
              </Box>
              <Box sx={{display: "flex"}}>
                <Box sx={navItemStyles}>Activities</Box>
                <Box sx={navItemStyles}>About</Box>
                <Box sx={navItemStyles}>Contact</Box>
              </Box>
              <Button onClick={openForm} size="large" variant="contained" color="warning">Create Activity</Button>
          </Toolbar>
        </Container>

      </AppBar>
    </Box>
  )
}
