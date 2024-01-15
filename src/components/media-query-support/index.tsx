'use client'
import { useMediaQuery } from "@mui/material";
import NotSupport from "../not-support";

export default function MediaQuerySupport({ children }: {
  children: React.ReactNode,
}) {
  const matches = useMediaQuery('(max-width:600px)');

  if (!matches) return <NotSupport />

  return (
    <>{children}</>
  )
}
