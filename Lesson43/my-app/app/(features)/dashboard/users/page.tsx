import { Box } from "@mui/material";
import FlexibleNavbar from '../../../shared/components/FlexibleNavbar';

export default function UsersPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <FlexibleNavbar
        title="Dashboard"
        direction="vertical"
        width={280}
        backgroundColor="#0f172a"
        textColor="#fff"
        items={[
          { label: "Overview", href: "/dashboard" },
          { label: "Users", href: "/dashboard/users" },
          { label: "Orders", href: "/dashboard/orders" },
          { label: "Settings", href: "/dashboard/settings" },
        ]}
      />

      <Box sx={{ p: 4 }}>
        <h1>Users Content</h1>
      </Box>
    </Box>
  );
}
