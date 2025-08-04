"use client";
import { Yacht } from "../YachtDetail/hero";
import DOMPurify from 'dompurify';

type Props = {
  data: Yacht | null;
};

const CharterDetail: React.FC<Props> = ({ data }) => {

  console.log(data, "hello")
  return (
    <div className="xl:px-0 max-w-7xl mx-auto">
      {/* Tabs */}

      {/* Content */}
      <div className="space-y-4 text-zink">
        <p className="text-xl lg:text-2xl font-bold text-zink font-sourceSansPro">Description</p>
        {data?.aboutThisBoat ? (
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.aboutThisBoat) }} />
        ) : (
          <p className="text-zink">No Night charter information available.</p>
        )}

      {/* <p className="text-base font-bold font-sourceSansPro text-zink">
        Our trips are fun, exciting, and environmentally sustainable and provide our guests with the freedom to go where they want. With Hot Chilli, we take you to uncrowded, safe, unspoiled new places to visit.
      </p> */}
    </div>

      {/* Image */ }
  {/* <div className="mt-8 border-t border-b border-gray-400 pt-3 mb-8">
    <img
      src="/images/map4.png"
      alt="Route Map"
      className="w-full max-w-5xl mx-auto rounded-lg"
    />
  </div> */}
    </div >
  );
};

export default CharterDetail;
