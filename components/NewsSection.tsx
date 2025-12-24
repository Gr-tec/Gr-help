
import React, { useEffect, useState } from 'react';
import { getConstructionNews } from '../services/geminiService';
import { NewsArticle } from '../types';

interface NewsSectionProps {
  preview?: boolean;
}

const NewsSection: React.FC<NewsSectionProps> = ({ preview }) => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getConstructionNews();
      setNews(preview ? data.slice(0, 3) : data);
      setLoading(false);
    };
    fetchNews();
  }, [preview]);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter">Notícias e Atualizações</h2>
            <p className="text-gray-400">Fique por dentro das novidades da A.M.C e do setor.</p>
          </div>
          {preview && (
            <a href="#/noticias" className="text-blue-500 font-bold hover:underline">
              Ler todas <i className="fas fa-arrow-right ml-1"></i>
            </a>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, idx) => (
              <div key={idx} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-colors group">
                <div className="text-blue-500 text-xs font-bold mb-4 uppercase tracking-widest">Tópico relevante</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{item.summary}</p>
                <a href={item.url} className="text-sm font-bold flex items-center gap-2 text-white hover:text-blue-500 transition-colors">
                  Saiba mais <i className="fas fa-external-link-alt text-xs"></i>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
