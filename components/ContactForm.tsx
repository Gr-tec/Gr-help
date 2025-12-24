
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'obra',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado pelo contacto! A nossa equipa responderá em breve.");
    setFormData({ name: '', email: '', phone: '', service: 'obra', message: '' });
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tighter uppercase">Solicite um Orçamento</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Tem um projeto em mente? Precisa de blocos de alta qualidade para a sua obra? Preencha o formulário ou utilize os nossos contactos diretos.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-gray-100 p-4 rounded-xl text-blue-700">
                  <i className="fas fa-phone-alt text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Telefone / WhatsApp</h4>
                  <p className="text-gray-600">+244 9XX XXX XXX</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-gray-100 p-4 rounded-xl text-blue-700">
                  <i className="fas fa-envelope text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">E-mail</h4>
                  <p className="text-gray-600">geral@amc-construcoes.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-gray-100 p-4 rounded-xl text-blue-700">
                  <i className="fas fa-map-marker-alt text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Localização</h4>
                  <p className="text-gray-600">Zona Industrial, Luanda, Angola</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-blue-700 rounded-3xl text-white shadow-xl">
              <h4 className="font-bold text-xl mb-4">Horário de Funcionamento</h4>
              <div className="flex justify-between border-b border-blue-500 py-2">
                <span>Segunda - Sexta</span>
                <span>08:00 - 17:00</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Sábado</span>
                <span>08:00 - 12:00</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Telemóvel</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Pedido</label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="obra">Mão-de-obra / Construção Civil</option>
                  <option value="blocos">Compra de Blocos / Pavimentos</option>
                  <option value="manutencao">Manutenção / Reabilitação</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem / Detalhes</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-black text-lg hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-3 group"
              >
                Enviar Solicitação
                <i className="fas fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
