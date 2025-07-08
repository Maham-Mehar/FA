"use client";
const CharterDetail = () => {
  return (
    <div className="xl:px-0 max-w-7xl mx-auto">
      {/* Tabs */}

      {/* Content */}
      <div className="space-y-4">
        <p className="text-xl font-bold text-zink font-sourceSansPro">Description</p>
        <p className="text-base font-normal font-sourceSansPro text-zink">
          Hot Chilli is a brand new, comfortable, fast motor catamaran for up to 14 guests for daily excursions and for up to 4 guests for overnight cruises. It features a very capable captain and cook team. This power cat is perfect for island hopping. Hot Chili can reach all the local islands on a day charter due to its cruising speed of 15 knots.
        </p>
        <p className="text-base font-normal font-sourceSansPro text-zink">
          Let us take you to your dream destination at a faster pace and allow us to spoil you along the way with our fully serviced trips! You will immediately feel at home on this new catamaran. Hot Chilli’s interior is designed to the latest standards of modern building techniques incorporating epoxy resins and carbon fiber components in molded GRP. The saloon and cockpit are designed to create one level, which gives one the comfort of a much larger yacht than imagined.
        </p>
        <p className="text-base font-normal font-sourceSansPro text-zink">
          The fully equipped galley, to prepare gourmet meals, and the designated beverage fridge, complement this luxurious and comfortable yacht. The “balcony” up front provides comfortable seating for sunbathing and enjoying the breeze and sunset.
        </p>
        <p className="text-base font-bold font-sourceSansPro text-zink">
          Our trips are fun, exciting, and environmentally sustainable and provide our guests with the freedom to go where they want. With Hot Chilli, we take you to uncrowded, safe, unspoiled new places to visit.
        </p>
      </div>

      {/* Image */}
      <div className="mt-8 border-t border-b border-gray-400 pt-3 mb-8">
        <img
          src="/images/map4.png"
          alt="Route Map"
          className="w-full max-w-5xl mx-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default CharterDetail;
