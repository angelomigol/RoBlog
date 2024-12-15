import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";

import AuthCallbackPage from "./pages/auth/AuthCallbackPage";
import AdminPage from "./pages/admin/AdminPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import CreatePost from "./pages/create-post/CreatePost";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import Search from "./pages/search/Search";
import Post from "./pages/post/Post";

import { Toaster } from 'sonner'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={'/auth-callback'} />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search"  element={<Search />} />
          <Route path="/create-post"  element={<CreatePost />} />
          <Route path="/account/:id"  element={<Account />} />
          <Route path="/post/:postId"  element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Toaster closeButton richColors position="bottom-center" />
    </>
  )
}

export default App