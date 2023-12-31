import LogoutButton from "@components/LogoutButton";
import { deleteCookie, getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      deleteCookie("authorization");
      router.push("/login");
    } catch (error: any) {}
  };

  const isLinkActive = (href: any) => {
    return router.pathname === href;
  };

  return (
    <nav className="bg-white  border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          M o o d l e
        </span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/home"
                className={`block py-2 px-3 text-white rounded  ${
                  isLinkActive("/home")
                  ? "md:bg-transparent md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500"
                  : "hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
                aria-current="page"
              >
                Página Inicial
              </Link>
            </li>
            <li>
              <Link
                href="/painel"
                className={`block py-2 px-3 text-white rounded  ${
                  isLinkActive("/painel")
                  ? "md:bg-transparent md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500"
                  : "hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
                aria-current="page"
              >
                Painel
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className={`block py-2 px-3 text-white rounded  ${
                  isLinkActive("/courses")
                  ? "md:bg-transparent md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500"
                  : "hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
                aria-current="page"
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className={`block py-2 px-3 text-white rounded  ${
                  isLinkActive("/profile")
                  ? "md:bg-transparent md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500"
                  : "hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
                aria-current="page"
              >
                Perfil
              </Link>
            </li>
          </ul>
        </div>
        <LogoutButton handleClick={handleLogout} />
        {/* <LogoutButton /> */}
      </div>
    </nav>
  );
};

export default NavBar;

{
  /* <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/home"
                passHref
                className={`block py-2 px-3 rounded ${
                  isLinkActive("/home")
                    ? "text-green-700 bg-transparent md:text-white md:bg-green-500 dark:text-green-500 dark:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    : "text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-white md:dark:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
              >
                Página Inicial
              </Link>
            </li>
            <li>
              <Link href="/courses" passHref
               
                  className={`block py-2 px-3 rounded ${
                    isLinkActive("/courses")
                      ? "text-green-700 bg-transparent md:text-white md:bg-green-500 dark:text-green-500 dark:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      : "text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-white md:dark:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                >
                  Cursos
               
              </Link>
            </li>
            <li>
              <Link href="/painel" passHref
                
                  className={`block py-2 px-3 rounded ${
                    isLinkActive("/painel")
                      ? "text-green-700 bg-transparent md:text-white md:bg-green-500 dark:text-green-500 dark:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      : "text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-white md:dark:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                >
                  Painel
              
              </Link>
            </li>
            <li>
              <Link href="/profile" passHref
                
                  className={`block py-2 px-3 rounded ${
                    isLinkActive("/profile")
                      ? "text-green-700 bg-transparent md:text-white md:bg-green-500 dark:text-green-500 dark:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      : "text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-white md:dark:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                >
                  Perfil
                
              </Link>
            </li>
          </ul> */
}
