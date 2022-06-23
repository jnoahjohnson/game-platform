import { Link } from "@remix-run/react";

export default function GamesIndex() {
  return (
    <div className="p-4">
      <h1 className="font-bold text-4xl mb-4 text-center">All Games</h1>

      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        <Link to="/game/1">
          <div className="relative w-full h-[240px] rounded shadow hover:shadow-lg flex items-end justify-start p-4 overflow-hidden">
            <img
              src="/images/platformer.png"
              alt="Platformer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="bg-black opacity-70 absolute inset-0 w-full h-full" />
            <h1 className="relative font-bold text-3xl">Simple Platformer</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
