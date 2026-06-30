export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 hover:border-violet-500 transition duration-300 hover:-translate-y-2">

      <div className="text-5xl mb-6">{icon}</div>

      <h3 className="text-white text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 leading-7">
        {description}
      </p>

    </div>
  );
}