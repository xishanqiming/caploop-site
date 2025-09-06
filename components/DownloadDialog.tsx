"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function DownloadDialog() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // 路由变化时，自动关闭弹窗，避免遮挡点击
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div>
      <button className="btn btn-outline btn-lg" onClick={() => setOpen(true)}>
        下载 Onepager
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold">下载资料</h3>
            <p className="mt-2 text-sm text-gray-500">
              以下为当前可下载的资料：
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  className="btn btn-primary w-full"
                  href="/documents/Caploop_Onepager_v202501.pdf"
                  download
                >
                  Caploop Onepager（PDF）
                </a>
              </li>
            </ul>
            <div className="mt-4 text-right">
              <button
                className="btn btn-outline btn-lg"
                onClick={() => setOpen(false)}
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
