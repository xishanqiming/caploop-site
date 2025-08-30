"use client";
import { useState } from "react";
export default function DownloadDialog() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setOpen(true)}>下载 Onepager</button>
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onClick={() => setOpen(false)}>
          <div className="w-full max-w-lg rounded-2xl bg-white p-6" onClick={e=>e.stopPropagation()}>
            <h3 className="text-lg font-semibold">下载资料</h3>
            <p className="mt-2 text-sm text-gray-500">以下为当前可下载的资料：</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a className="btn btn-primary w-full" href="/documents/Caploop_Onepager_v202501.pdf" download>
                  Caploop Onepager（PDF）
                </a>
              </li>
            </ul>
            <div className="mt-4 text-right">
              <button className="btn" onClick={() => setOpen(false)}>关闭</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
