import BasicLayout from "@/layouts/BasicLayout";
import BookingSuccess from "@/pages/BookingSuccess";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Reservation from "@/pages/Reservation";
import MainLayout from "@layouts/MainLayout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "reservation",
          element: <Reservation />,
        },
        {
          path: "contactus",
          element: <Contact />,
        },
      ],
    },
    {
      element: <BasicLayout />,
      children: [
        {
          path: "booking-success",
          element: <BookingSuccess />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
