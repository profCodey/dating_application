"use client";
import { useState, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Notifications } from "@mantine/notifications";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // With SSR, we are set some default staleTime
      // above 0 to avoid refetching immediately on the client
      staleTime: 60 * 1000,
    },
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <Notifications position="top-right" />
      <QueryClientProvider client={queryClient}>
        {" "}
        <AppRouterCacheProvider>{children} </AppRouterCacheProvider>
      </QueryClientProvider>
    </>
  );
}
