export default function Banner() {
  return (
    <div className="font-bold flex justify-center text-red-400 text-4xl shadow-lg items-center py-4">
      <div className="lg:hidden">SALE</div>
      <div className="space-x-24 hidden lg:block">
        {Array.from({ length: 5 }).map(() => (
          <span>SALE</span>
        ))}
      </div>
    </div>
  );
}
