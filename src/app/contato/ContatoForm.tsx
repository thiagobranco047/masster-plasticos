"use client";

import { useState } from "react";

export default function ContatoForm() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar mensagem");
      }

      setIsSubmitted(true);
      setFormData({
        nome: "",
        empresa: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">
          Mensagem enviada com sucesso!
        </h3>
        <p className="text-green-700">
          Nossa equipe entrará em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
            Nome *
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            value={formData.nome}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
            placeholder="Seu nome completo"
          />
        </div>
        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={formData.empresa}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
            placeholder="Nome da sua empresa"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefone *
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            required
            value={formData.telefone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
            placeholder="(47) 99999-9999"
          />
        </div>
      </div>

      <div>
        <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
          Assunto *
        </label>
        <select
          id="assunto"
          name="assunto"
          required
          value={formData.assunto}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
        >
          <option value="">Selecione um assunto</option>
          <option value="orcamento">Solicitar Orçamento</option>
          <option value="informacoes">Informações sobre Produtos</option>
          <option value="suporte">Suporte Técnico</option>
          <option value="parceria">Parceria Comercial</option>
          <option value="outros">Outros</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
          Mensagem *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={6}
          required
          value={formData.mensagem}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
          placeholder="Descreva sua necessidade ou dúvida..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-yellow text-black px-8 py-3 rounded-lg font-medium hover:bg-brand-yellow/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </button>
    </form>
  );
}

