import HomePage from "../pages/HomePage";
import AllCoursePage from "../pages/AllCoursePage";
import { Icon } from "../components/Navbar/style";

export const navbar = [
  {
    id: 1,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: 2,
    element: <AllCoursePage />,
    title: "Все курсы",
    path: "/all_course",
    private: false,
    hidden: false,
  },
  {
    id: 3,
    element: <h1>Мероприятия</h1>,
    title: "Мероприятия",
    path: "/no",
    private: false,
    hidden: false,
  },
  {
    id: 4,
    element: <h1>Базы знаний</h1>,
    title: "Базы знаний",
    path: "/",
    private: false,
    hidden: false,
  },
  {
    id: 5,
    element: <h1>Карьера</h1>,
    title: "Карьера",
    path: "/karyera",
    private: false,
    hidden: false,
  },
  {
    id: 6,
    element: <h1>Нижний Новгород</h1>,
    title: "Нижний Новгород",
    path: "/location",
    private: false,
    hidden: false,
    icon: <Icon.Location />,
  },
  {
    id: 7,
    element: <h1>8 800 950-33-98</h1>,
    title: "8 800 950-33-98",
    path: "/contact",
    private: false,
    hidden: false,
  },
  {
    id: 8,
    element: <h1>Войти</h1>,
    title: `Войти`,
    path: "/login",
    private: false,
    hidden: false,
    icon: <Icon.User />,
  },
];
