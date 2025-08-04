import HeroSection from "@/Component/YachtDetail/hero";

const YachtDetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <HeroSection slug={params.slug} />
    </div>
  );
};

export default YachtDetailPage;
