export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden border-y border-wine/20 bg-wine py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-8 text-2xl font-medium uppercase tracking-[0.2em] text-chartreuse"
          >
            {item}
            <span className="text-cream">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}
