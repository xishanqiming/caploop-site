"use client";
import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        // 等待首屏渲染完成后再滚动，避免水合时机差导致未命中
        setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          0,
        );
      }
    };
    // 首次进入（例如从 /privacy 跳到 /#ecosystem）
    scrollToHash();
    // 处理 hash 变化（例如页内点击锚点）
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);
  return null;
}
