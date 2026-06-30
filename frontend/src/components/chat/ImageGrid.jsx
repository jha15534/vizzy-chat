import { useState } from "react";
import { Download, Heart, X, ZoomIn } from "lucide-react";

export default function ImageGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) return null;

  const downloadImage = async (url, index) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `vizzy-ai-${index + 1}.png`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download failed:", err);
      alert("Unable to download image.");
    }
  };

  return (
    <>
      <div className="mt-12">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <h2 className="text-3xl font-bold">
            🎨 Generated Images
          </h2>

          <p className="text-gray-400">
            {images.length} Image{images.length > 1 ? "s" : ""}
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {images.map((img, index) => (

            <div
              key={index}
              className="bg-[#1B2333] border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-violet-500/20 hover:scale-[1.02] transition-all duration-300"
            >

              <div className="relative group">

                <img
                  src={img}
                  alt={`AI ${index}`}
                  onClick={() => setSelectedImage(img)}
                  className="w-full h-72 object-cover cursor-pointer"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                  <button
                    onClick={() => setSelectedImage(img)}
                    className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-violet-600 transition"
                  >
                    <ZoomIn size={28} />
                  </button>

                </div>

              </div>

              {/* Buttons */}
              <div className="flex justify-between p-5">

                <button
                  onClick={() => downloadImage(img, index)}
                  className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-xl transition"
                >
                  <Download size={18} />
                  Download
                </button>

                <button
                  className="flex items-center gap-2 bg-[#2A3448] hover:bg-red-500 px-4 py-2 rounded-xl transition"
                >
                  <Heart size={18} />
                  Save
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Full Screen Preview */}
      {selectedImage && (

        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
        >

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 p-3 rounded-full"
          >
            <X />
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl"
          />

        </div>

      )}
    </>
  );
}