
import React from 'react';

const ProductionGallery: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1590486803833-ffc910ffa5c0?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1531834361935-ee12bd38086a?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=800'
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Galeria de Produção</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Acompanhe o nosso processo industrial. Do controlo de matérias-primas ao armazenamento final, garantimos transparência e qualidade em cada unidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative h-72 rounded-3xl overflow-hidden shadow-lg cursor-zoom-in">
              <img src={img} alt={`Produção ${idx}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <i className="fas fa-search-plus text-white text-3xl"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-12 rounded-3xl border border-gray-100 flex flex-col lg:flex-row gap-12 items-center shadow-sm">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
              <i className="fas fa-video text-blue-700"></i>
              Processo de Fabrico em Tempo Real
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Os nossos blocos passam por um rigoroso processo de vibro-compressão e cura controlada para atingir a resistência máxima. Veja a nossa linha de montagem industrial.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center gap-2">
                <i className="fas fa-play"></i> Ver Vídeo
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1590486803833-ffc910ffa5c0?auto=format&fit=crop&q=80&w=1200" alt="Video Placeholder" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 cursor-pointer hover:scale-110 transition-transform">
                <i className="fas fa-play text-white text-3xl ml-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionGallery;
