import HomePage from "../pages/HomePage";
import AllCoursePage from "../pages/AllCoursePage";
import RegisterPage from "../pages/RegisterPage";
import ChatsPage from "../pages/ChatsPage";

export const navbar = [
  {
    id: 1,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    isPrivate: false,
    hidden: true,
  },
  {
    id: 2,
    element: <AllCoursePage />,
    title: "Все курсы",
    path: "/all_course",
    isPrivate: false,
    hidden: false,
  },
  {
    id: 3,
    element: <ChatsPage />,
    title: "Мероприятия",
    path: "/chats",
    isPrivate: true,
    hidden: false,
  },
  {
    id: 4,
    element: <h1>Базы знаний</h1>,
    title: "Базы знаний",
    path: "/",
    isPrivate: false,
    hidden: false,
  },
  {
    id: 5,
    element: <h1>Карьера</h1>,
    title: "Карьера",
    path: "/karyera",
    isPrivate: false,
    hidden: false,
  },
  {
    id: 8,
    element: <RegisterPage />,
    title: `Войти`,
    path: "/login",
    isPrivate: false,
    hidden: true,
  },
];
