"use client";
import Link from "next/link";
import { useState } from "react";
import { AppBar, Toolbar, Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { INavItem } from '../interfaces/navItem.interface';

interface FlexibleNavbarProps {
  items: INavItem[];
  direction?: "horizontal" | "vertical";
  width?: number | string;
  backgroundColor?: string;
  textColor?: string;
  sx?: object;
  mobile?: boolean;
  title?: string;
}

export default function FlexibleNavbar({
  items,
  direction = "horizontal",
  width = 260,
  backgroundColor = "#1976d2",
  textColor = "#fff",
  sx = {},
  mobile = true,
  title = "Navbar",
}: FlexibleNavbarProps) {
  const [open, setOpen] = useState(false);
  const isVertical = direction === "vertical";

  const navContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: isVertical ? "column" : "row",
        gap: 2,
        width: "100%",
        alignItems: isVertical ? "flex-start" : "center",
        p: isVertical ? 2 : 0,
      }}
    >
      {items.map((item) => (
        <Button key={item.href} component={Link} href={item.href}
          sx={{
            color: textColor,
            justifyContent: isVertical ? "flex-start" : "center",
            width: isVertical ? "100%" : "auto",
            fontWeight: 600,
            textTransform: "none",
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );

  // ---------------------------- Vertical Navbar ----------------------------
  if (isVertical) {
    return (
      <Box sx={{ width, height: "100vh", backgroundColor, color: textColor, display: "flex", flexDirection: "column", ...sx }}>
        <Typography variant="h6" sx={{ p: 2, fontWeight: 700 }}>
          {title}
        </Typography>

        {navContent}
      </Box>
    );
  }

  // ---------------------------- Horizontal Navbar ----------------------------
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor, ...sx }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>

          {/* Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navContent}
          </Box>

          {/* Mobile */}
          {mobile && (
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon sx={{ color: textColor }} />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          {items.map((item) => (
            <Button key={item.href} component={Link} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
