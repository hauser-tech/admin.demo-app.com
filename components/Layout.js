import { useRouter } from "next/router";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";

const exceptions = [
  "/signin",
  "/forgot-password",
  "/signup",
  "/reset-password/[id]",
];

const Layout = ({ children }) => {
  const router = useRouter();
  if (exceptions.includes(router.route)) return <>{children}</>;

  return (
    <div className="flex w-full h-screen">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12">{children}</div>
    </div>
  );
};

export default Layout;
