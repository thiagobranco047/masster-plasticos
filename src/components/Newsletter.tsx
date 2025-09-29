"use client";
import { useState } from "react";
import Button from "@/components/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder integration
    await new Promise((r) => setTimeout(r, 500));
    setSent(true);
  }

  return (
    <section className="bg-[#2B2C2C]">
      <div className="container py-12 md:py-16">
        <div className="grid gap-4 md:grid-cols-3 md:items-center">
          <h3 className="text-xl md:text-2xl font-semibold text-white md:col-span-1">
            Cadastre seu e-mail para<br />receber novidades
          </h3>
          <form onSubmit={onSubmit} className="md:col-span-2 flex gap-0">
            <input
              type="email"
              required
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-l-md rounded-r-none border border-zinc-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-brand-yellow"
            />
            <Button type="submit" className="rounded-r-md rounded-l-none">Inscrever</Button>
          </form>
          {sent && <p className="text-sm text-green-400 mt-2">Inscrição realizada com sucesso!</p>}
        </div>
      </div>
    </section>
  );
}

