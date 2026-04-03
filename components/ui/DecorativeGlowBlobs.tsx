export default function DecorativeGlowBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div
        className="absolute -right-16 top-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 520,
          height: 520,
          background:
            "radial-gradient(ellipse at center, rgba(123,44,191,0.28) 0%, rgba(74,20,140,0.1) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          right: "25%",
          top: "55%",
          width: 260,
          height: 260,
          background:
            "radial-gradient(ellipse at center, rgba(192,132,252,0.14) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
