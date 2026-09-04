import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/packages")({
  component: PackagesLayout,
});

// Layout wrapper: renders /packages (grid) OR /packages/$slug (detail)
// TanStack Router injects the correct child via <Outlet />
function PackagesLayout() {
  return <Outlet />;
}
