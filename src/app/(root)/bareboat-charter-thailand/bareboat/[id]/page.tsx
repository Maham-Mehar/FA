
import HeroSection from '@/Component/YachtDetail/hero';

const YachtDetail = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params;
    return (
        <div>
            <HeroSection id={id} />
        </div>
    );
};

export default YachtDetail