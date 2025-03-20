// Dashboard.jsx
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBarComponent from "./AppBarComponent";
import DrawerComponent from "./DrawerComponent";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
      <DrawerComponent
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        variant="temporary"
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* Add your main content here */}
        <h2>Dashboard Content</h2>
        <p>This is where your dashboard's main content will appear.</p>

        <img
          src="https://uicdn.toast.com/toastui/img/tui-chart_mobile.png"
          alt="Img"
          width={"100%"}
        />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          delectus deserunt architecto harum, laudantium nulla ea ullam, quae
          reiciendis, nam voluptatem rerum vitae facere ad illum sequi a
          accusantium repellendus obcaecati reprehenderit enim odio assumenda?
          Nemo, assumenda voluptas consequatur tempore error obcaecati pariatur
          voluptatum aspernatur eius. Officia delectus qui vel ipsum
          necessitatibus sint autem enim natus odio. Ipsum officia doloremque
          ducimus reiciendis culpa possimus? Debitis, impedit neque maxime
          voluptates reiciendis, repellendus commodi culpa quas soluta,
          doloribus omnis suscipit similique. Facilis porro libero illo suscipit
          officia ullam tenetur sit esse commodi illum cum dolores voluptates
          tempora, qui ab? Nostrum, recusandae fugiat!
        </p>
      </Box>
    </Box>
  );
}
