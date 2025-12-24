
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="bg-blue-700 p-2 rounded">
              <i className="fas fa-building text-white text-xl"></i>
            </div>
            <span className="text-xl font-black tracking-tighter">
              A.M.C <span className="text-blue-700 font-normal">CONSTRUÇÕES</span>
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Especialistas em construção civil e produção industrial de materiais em Angola. Construímos soluções sólidas para o seu crescimento.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Links Úteis</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/sobre" className="hover:text-blue-500 transition-colors">Sobre Nós</Link></li>
            <li><Link to="/servicos" className="hover:text-blue-500 transition-colors">Nossos Serviços</Link></li>
            <li><Link to="/blocos" className="hover:text-blue-500 transition-colors">Produtos</Link></li>
            <li><Link to="/obras" className="hover:text-blue-500 transition-colors">Portfólio</Link></li>
            <li><Link to="/noticias" className="hover:text-blue-500 transition-colors">Notícias</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Nossos Produtos</h4>
          <ul className="space-y-4 text-gray-400">
            <li>Bloco de Cimento 10</li>
            <li>Bloco de Cimento 15</li>
            <li>Bloco de Cimento 20</li>
            <li>Pavers e Pavimentos</li>
            <li>Lancis de Betão</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Subscrever News</h4>
          <p className="text-gray-400 text-sm mb-4">Receba atualizações sobre novas obras e promoções de materiais.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="bg-gray-800 border-none rounded-lg px-4 py-2 w-full focus:ring-1 focus:ring-blue-700"
            />
            <button className="bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} A.M.C CONSTRUÇÕES E SERVIÇOS, LDA. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 text-xs text-gray-500 font-medium">
          <a href="#" className="hover:text-white">Termos de Uso</a>
          <a href="#" className="hover:text-white">Política de Privacidade</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
