import Hero from "@/components/Detail/Hero";

const DetailPage = async ({
    params,
}: {
    params: Promise<{ id: number }>
}) => {

    const { id } = await params;

    return (
        <div className="bg-white">
            <Hero id={id}  />
        </div>
    );
};

export default DetailPage;
