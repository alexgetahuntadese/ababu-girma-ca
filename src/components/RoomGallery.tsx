import { useState } from "react";
import { Users, Maximize, Wifi, Bath } from "lucide-react";
import roomStandard from "@/assets/room-standard.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";

const rooms = [
  {
    name: "Standard Room",
    image: roomStandard,
    price: "From $85/night",
    size: "28 m²",
    guests: "2 Guests",
    features: ["King Bed", "Free WiFi", "City View", "En-suite Bathroom"],
  },
  {
    name: "Deluxe Room",
    image: roomDeluxe,
    price: "From $140/night",
    size: "42 m²",
    guests: "2 Guests",
    features: ["King Bed", "Minibar", "Panoramic View", "Rain Shower"],
  },
  {
    name: "Executive Suite",
    image: roomSuite,
    price: "From $220/night",
    size: "65 m²",
    guests: "3 Guests",
    features: ["Living Area", "Work Desk", "Premium Amenities", "Lounge Access"],
  },
  {
    name: "Presidential Suite",
    image: roomPresidential,
    price: "From $450/night",
    size: "120 m²",
    guests: "4 Guests",
    features: ["Private Terrace", "Dining Room", "Butler Service", "Grand Piano"],
  },
];

const RoomGallery = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="rooms" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <p className="text-accent text-sm font-medium text-center mb-2">Accommodations</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Our Rooms
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">
          From cozy comfort to grand luxury — find the perfect room for your stay.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {rooms.map((r, i) => (
            <button
              key={r.name}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === i
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>

        {/* Active room */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in" key={active}>
          <div className="rounded-2xl overflow-hidden border border-border shadow-card aspect-[4/3]">
            <img
              src={rooms[active].image}
              alt={rooms[active].name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="font-display text-3xl font-bold text-foreground mb-2">
              {rooms[active].name}
            </h3>
            <p className="text-gradient font-display text-2xl font-semibold mb-6">
              {rooms[active].price}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Maximize className="w-4 h-4 text-accent" />
                {rooms[active].size}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Users className="w-4 h-4 text-accent" />
                {rooms[active].guests}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Wifi className="w-4 h-4 text-accent" />
                Free WiFi
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Bath className="w-4 h-4 text-accent" />
                En-suite
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {rooms[active].features.map((f) => (
                <div
                  key={f}
                  className="glass-light rounded-lg px-4 py-3 text-sm text-foreground text-center"
                >
                  {f}
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground rounded-lg px-8 py-3 font-medium w-fit shadow-glow transition-opacity"
            >
              Book This Room
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-3 mt-8">
          {rooms.map((r, i) => (
            <button
              key={r.name}
              onClick={() => setActive(i)}
              className={`rounded-xl overflow-hidden border-2 transition-all aspect-[4/3] ${
                active === i ? "border-primary shadow-glow" : "border-border opacity-50 hover:opacity-80"
              }`}
            >
              <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomGallery;
