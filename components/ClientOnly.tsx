"use client";
import { useEffect, useState } from "react";

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;      // 服务端/尚未挂载时不渲染，挂载后再渲染子节点
  return <>{children}</>;
}
