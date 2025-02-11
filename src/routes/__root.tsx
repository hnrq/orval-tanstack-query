import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const client = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={client}>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </QueryClientProvider>
  ),
});
