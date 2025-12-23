'use client';

interface MapProps {
  address: string;
}

export default function Map({ address }: MapProps) {
  // Using OpenStreetMap embed for the location
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=75.7873%2C26.9124%2C75.8173%2C26.9424&layer=mapnik&marker=26.9274%2C75.8023`;
  
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="w-full h-full"
        title="Tnx Surgical Medical Location - Jaipur, Rajasthan"
      />
    </div>
  );
}