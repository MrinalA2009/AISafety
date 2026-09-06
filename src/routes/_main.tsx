import { createFileRoute, Outlet } from "@tanstack/react-router";
import { MainNav } from "../components/main/MainNav";
import { MainFooter } from "../components/main/MainFooter";

export const Route = createFileRoute("/_main")({
  component: MainLayout,
});

function MainLayout() {
  return (
    <>
      <MainNav />
      <main className="relative">
        <Outlet />
      </main>
      <MainFooter />
    </>
  );
}
