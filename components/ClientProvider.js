// components/ClientProvider.js

"use client"; // Mark this component as a Client Component

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUserFromStorage } from '@/redux/features/auth/authSlice';

export default function ClientProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  return <>{children}</>;
}
