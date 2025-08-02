// src/Home/Secret.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  username: string;
};

const Secret: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("user");

    if (!stored) {
      redirectToLogin();
      return;
    }

    try {
      const parsed: unknown = JSON.parse(stored);
      if (isValidUser(parsed)) {
        setUser(parsed);
      } else {
        throw new Error("Invalid user shape");
      }
    } catch (err) {
      console.warn("⚠️ Invalid user object in localStorage:", err);
      localStorage.removeItem("user");
      redirectToLogin();
    } finally {
      setLoading(false);
    }
  }, []);

  const redirectToLogin = () => {
    navigate("/login", { replace: true });
  };

  const isValidUser = (data: any): data is User => {
    return data && typeof data.username === "string";
  };

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-base-100">
        <div className="loading loading-spinner loading-lg text-primary" />
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-base-100 text-base-content">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 space-y-5">
        <h1 className="text-2xl font-bold text-primary">ห้องรับงาน</h1>
        <p className="text-gray-600">
          สวัสดี <span className="font-semibold">{user?.username}</span> 👋
        </p>
        <p className="text-gray-700">คุณสามารถจัดการงานของคุณได้ที่นี่</p>
      </div>
    </section>
  );
};

export default Secret;
