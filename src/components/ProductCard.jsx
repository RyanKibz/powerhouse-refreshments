export default function ProductCard({ product, onDelete }) {
  if (!product) return null;

  const { id, image, name, type, description, origin, healthBenefits } = product;

  const imageUrl =
    image && image.trim() !== ""
      ? image
      : "https://via.placeholder.com/400x250?text=No+Image+Available";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between border border-zinc-200 transition-shadow hover:shadow-lg">
      <div>
        <div className="relative h-48 w-full bg-zinc-100">
          <img
            src={imageUrl}
            alt={name || "Product"}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400x250?text=Image+Error";
            }}
          />
          {type && (
            <span className="absolute top-3 right-3 bg-teal-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {type}
            </span>
          )}
        </div>

        <div className="p-5 space-y-3">
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-xl font-bold text-zinc-800 capitalize">
              {name}
            </h3>
            {origin && (
              <span className="text-xs bg-zinc-100 text-zinc-600 px-2 py-1 rounded border border-zinc-200 font-medium whitespace-nowrap">
                {origin}
              </span>
            )}
          </div>

          <p className="text-zinc-600 text-sm line-clamp-3">{description}</p>

          {healthBenefits && (
            <div className="pt-2 border-t border-zinc-100">
              <h4 className="text-xs font-semibold text-purple-900 uppercase tracking-wide mb-1">
                Health Benefits
              </h4>
              <p className="text-xs text-zinc-500 line-clamp-2">
                {healthBenefits}
              </p>
            </div>
          )}
        </div>
      </div>

      {onDelete && (
        <div className="px-5 pb-5 pt-2">
          <button
            onClick={() => onDelete(id)}
            className="w-full bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 font-medium text-sm py-2 px-4 rounded-md transition-colors"
          >
            Delete Product
          </button>
        </div>
      )}
    </div>
  );
}