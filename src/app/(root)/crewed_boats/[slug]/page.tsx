import HeroSection from '@/Component/YachtDetail/hero';

interface PageProps {
  params: {
    slug: string;
  };
}

const YachtDetail= ({ params }: PageProps) => {
  return (
    <div>
      <HeroSection slug={params.slug} />
    </div>
  );
};

export default YachtDetail;
