import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AuthLayout from "@/components/layout/AuthLayout";
import ProtectedRoute from "@/components/common/ProtectedRoute";

import DashboardPage from "@/pages/dashboard/DashboardPage";
import MyPollsPage from "@/pages/polls/MyPollsPage";
import CreatePollPage from "@/pages/polls/CreatePollPage";
import PollDetailsPage from "@/pages/polls/PollDetailsPage";
import AnalyticsPage from "@/pages/analytics/AnalyticsPage";
import AnalyticsOverview from "@/pages/analytics/AnalyticsOverview";

import PublicPollPage from "@/pages/public/PublicPollPage";
import PublicResultsPage from "@/pages/public/PublicResultsPage";
import LandingPage from "@/pages/public/LandingPage";
import NotFound from "@/pages/NotFound";

import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";

const router = createBrowserRouter([
     {
          path: "/",
          element: <LandingPage />,
     },

     {
          element: <AuthLayout />,

          children: [
               {
                    path: "/login",
                    element: <LoginPage />,
               },
               {
                    path: "/register",
                    element: <RegisterPage />,
               },
          ],
     },

     {
          path: "/app",

          element: (
               <ProtectedRoute>
                    <DashboardLayout />
               </ProtectedRoute>
          ),

          children: [
               {
                    path: "dashboard",
                    element: <DashboardPage />,
               },

               {
                    path: "polls",
                    element: <MyPollsPage />,
               },

               {
                    path: "polls/create",
                    element: <CreatePollPage />,
               },

               {
                    path: "polls/:pollId",
                    element: <PollDetailsPage />,
               },

               {
                    path: "analytics",
                    element: <AnalyticsOverview />,
               },
               {
                    path: "analytics/:pollId",
                    element: <AnalyticsPage />,
               },
          ],
     },

     {
          path: "/vote/:pollId",
          element: <PublicPollPage />,
     },

     {
          path: "/results/:pollId",
          element: <PublicResultsPage />,
     },
     // Not Found
     {
           path: "*",
           element: <NotFound />,
     },
]);

export default router;
