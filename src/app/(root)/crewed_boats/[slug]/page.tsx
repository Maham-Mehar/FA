import HeroSection from "@/Component/YachtDetail/hero";

const YachtDetail = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <HeroSection slug={params.slug} />
    </div>
  );
};

export default YachtDetail;
