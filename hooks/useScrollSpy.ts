"use client";
import { useEffect, useState } from "react";

export default function useScrollSpy(ids: string[], options?: IntersectionObserverInit) {
  const [active, setActive] = useState<string>(ids[0] || "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, options ?? { rootMargin: "-30% 0px -60% 0px", threshold: 0.01 });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, options]); // 显式依赖

  return active;
}
