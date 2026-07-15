export function SocialProof() {
  const items = [
    { value: "100%", label: "Recommendation rate" },
    { value: "62+", label: "Verified reviews" },
    { value: "4,200+", label: "Facebook community" },
    { value: "2,000+", label: "On Instagram" },
  ];
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
        {items.map((i) => (
          <div key={i.label} className="text-center md:text-left">
            <div className="text-2xl font-bold text-terracotta md:text-3xl">{i.value}</div>
            <div className="mt-1 text-[11px] uppercase tracking-widest text-cream/70">
              {i.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
