"use client";

import type { FormEvent } from "react";
import WhatsApp from "@/components/icons/WhatsApp";

const fields = [
  { name: "segmento", label: "Qual é o seu segmento?", options: ["Serviço local", "Saúde e estética", "Consultoria ou B2B", "Infoproduto ou educação", "E-commerce", "Outro"] },
  { name: "objetivo", label: "Qual é o principal objetivo?", options: ["Receber contatos no WhatsApp", "Receber pedidos de orçamento", "Vender uma oferta", "Apresentar melhor o negócio", "Ainda não tenho certeza"] },
  { name: "prazo", label: "Quando gostaria de colocar no ar?", options: ["O quanto antes", "Em até 30 dias", "Entre 30 e 60 dias", "Sem prazo definido"] },
  { name: "estrutura", label: "De qual estrutura precisa?", options: ["Página direta com WhatsApp", "Página com formulário e métricas", "Estrutura completa com automações", "Quero uma recomendação"] },
] as const;

export default function QualificationForm({ whatsappHref }: { whatsappHref: string }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const answers = fields.map((field) => `• ${field.label} ${data.get(field.name)}`).join("\n");
    const message = encodeURIComponent(`Olá, Luan! Quero conversar sobre uma landing page.\n\n${answers}`);
    window.open(`${whatsappHref}?text=${message}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-2xl border border-[#173f3b]/10 bg-white p-5 shadow-[0_18px_50px_rgba(16,45,43,.08)] sm:grid-cols-2 sm:p-7">
      {fields.map((field) => (
        <label key={field.name} className="grid gap-2 text-sm font-semibold">
          {field.label}
          <select name={field.name} required defaultValue="" className="min-h-12 w-full rounded-xl border border-[#173f3b]/15 bg-[#f7f6f2] px-3 text-sm font-normal text-[#294844] outline-none transition focus:border-[#0b7769] focus:ring-2 focus:ring-[#0b7769]/10">
            <option value="" disabled>Selecione uma opção</option>
            {field.options.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
      ))}
      <div className="sm:col-span-2">
        <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#b94e2d] px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 sm:w-auto">
          <WhatsApp className="h-5 w-5" /> Enviar respostas pelo WhatsApp <span aria-hidden="true">↗</span>
        </button>
        <p className="mt-3 text-xs leading-5 text-[#526a67]">Suas respostas não ficam armazenadas no site. Elas são enviadas diretamente para nossa conversa no WhatsApp.</p>
      </div>
    </form>
  );
}
