import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: ServicesLayout,
});

// Layout wrapper: renders /services (overview) OR /services/$slug (detail)
// TanStack Router injects the correct child via <Outlet />
function ServicesLayout() {
  return <Outlet />;
}
