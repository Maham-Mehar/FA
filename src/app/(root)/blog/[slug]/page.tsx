import BlogDetail from "@/Component/blogDetail/detailDescription";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div>
      <BlogDetail slug={slug} />
    </div>
  );
}