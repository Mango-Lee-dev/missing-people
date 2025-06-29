import { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const pathName = useLocation().pathname;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className=" sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between h-16 w-full">
          {/* Logo and Site Name */}
          <div className="flex items-center justify-start">
            <Link to="/" className="flex items-center">
              <span className="text-blue-700 font-semibold text-xl">
                Missing People
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-6">
              <Link
                to="/report"
                className={`text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathName === "/report"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : ""
                }`}
              >
                실종 신고하기
              </Link>
              <Link
                to="/search"
                className={`text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathName === "/search"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : ""
                }`}
              >
                실종자 찾기
              </Link>
              <Link
                to="/resources"
                className={`text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathName === "/resources"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : ""
                }`}
              >
                지원 및 자료
              </Link>
              <Link
                to="/success-stories"
                className={`text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathName === "/success-stories"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : ""
                }`}
              >
                사례 모음
              </Link>
              <Link
                to="/community"
                className={`text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathName === "/community"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : ""
                }`}
              >
                커뮤니티
              </Link>
              <Link
                to="/analysis"
                className={`text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathName === "/analysis"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : ""
                }`}
              >
                분석 및 통계
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 justify-end">
            <Link
              to="/emergency"
              className={`bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                pathName === "/emergency"
                  ? "bg-red-700"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              긴급 상황
            </Link>
            <Link
              to="/login"
              className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                pathName === "/login"
                  ? "bg-blue-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              로그인
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">메뉴 열기</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                // Icon when menu is open
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/report"
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              실종 신고하기
            </Link>
            <Link
              to="/search"
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              실종자 찾기
            </Link>
            <Link
              to="/resources"
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              지원 및 자료
            </Link>
            <Link
              to="/success-stories"
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              사례 모음
            </Link>
            <Link
              to="/community"
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              커뮤니티
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5 space-x-3">
              <Link
                to="/emergency"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium text-center"
                onClick={toggleMenu}
              >
                긴급 상황
              </Link>
            </div>
            <div className="mt-3 px-5">
              <Link
                to="/login"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white block px-4 py-2 rounded-md text-sm font-medium text-center"
                onClick={toggleMenu}
              >
                로그인
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
