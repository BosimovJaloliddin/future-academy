import HomePage from "../pages/HomePage";
import AllCoursePage from "../pages/AllCoursePage";

export const navbar = [
  {
    id: 1,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
    bgNav: true,
  },
  {
    id: 2,
    element: <AllCoursePage />,
    title: "Home",
    path: "/all_course",
    private: false,
    hidden: false,
    bgNav: true,
  },
];
