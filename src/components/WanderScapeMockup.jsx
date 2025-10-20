
import React from 'react';

export default function WanderScapeMockup() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-100 text-gray-800 p-6">
      <h1 className="text-5xl font-bold text-red-600 mb-6 text-center">WanderScape Travel Gallery</h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Explore breathtaking destinations, photos, and travel stories.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-white shadow rounded-lg h-40 flex items-center justify-center text-gray-500">
            Image {i+1}
          </div>
        ))}
      </div>
    </div>
  );
}
