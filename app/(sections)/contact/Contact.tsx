"use client";
import Section from "@/components/Section";
import { useForm } from "react-hook-form";
import type { Resolver, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  role: z.enum(["创业者", "投资人", "合作伙伴"]).default("创业者"),
  name: z.string().min(1, "请填写姓名"),
  email: z.string().email("邮箱格式不正确"),
  message: z.string().min(5, "至少5个字").max(2000, "不超过2000字"),
});
type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const [ok, setOk] = useState<boolean | null>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema) as Resolver<FormValues>, // 收窄为表单的确切类型
    defaultValues: { role: "创业者" },
  });

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    setOk(null);
    setErrMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      const data: { ok?: boolean; error?: string } = await res.json();
      if (!res.ok || !data.ok) {
        setOk(false);
        setErrMsg(data?.error || "提交失败，请稍后再试。");
        return;
      }
      setOk(true);
      reset({ role: values.role, name: "", email: "", message: "" });
    } catch (e: unknown) {
      setOk(false);
      const msg =
        e instanceof Error ? e.message : "网络异常，请检查网络后重试。";
      setErrMsg(msg);
    }
  };

  return (
    <Section
      id="contact"
      title="联系我们 / 资料下载"
      subtitle="填写表单我们会尽快回覆，也可直接下载 Onepager"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-gray-100 p-6 space-y-4"
          noValidate
        >
          <div>
            <label htmlFor="role" className="block text-sm text-gray-700">
              我是
            </label>
            <select
              id="role"
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2"
              {...register("role")}
            >
              <option value="创业者">创业者</option>
              <option value="投资人">投资人</option>
              <option value="合作伙伴">合作伙伴</option>
            </select>
            {errors.role && (
              <p className="text-xs text-red-500 mt-1">{errors.role.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="name" className="block text-sm text-gray-700">
              姓名
            </label>
            <input
              id="name"
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2"
              {...register("name")}
              autoComplete="name"
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-700">
              邮箱
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2"
              {...register("email")}
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-700">
              需求/留言
            </label>
            <textarea
              id="message"
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 min-h-[120px]"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "提交中..." : "提交"}
            </Button>
            {ok === true && (
              <span className="text-green-600 text-sm">
                已提交成功，我们会尽快联系你。
              </span>
            )}
            {ok === false && (
              <span className="text-red-600 text-sm">
                {errMsg || "提交失败，请稍后再试或发邮件至 info@caploop.lu。"}
              </span>
            )}
          </div>
        </form>

        <div className="rounded-2xl border border-gray-100 p-6">
          <h4 className="font-semibold">资料下载</h4>
          <a
            className="inline-flex mt-3 rounded-xl border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50"
            href="/documents/Caploop_Onepager_v202501.pdf"
            download
          >
            下载 Onepager（PDF）
          </a>
          <p className="mt-3 text-sm text-gray-500">
            更多资料（IR Kit、结构图）可在下一阶段补充。
          </p>
          <div className="mt-6 text-sm text-gray-600">
            或直接发邮件至{" "}
            <a className="underline" href="mailto:info@caploop.lu">
              info@caploop.lu
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
