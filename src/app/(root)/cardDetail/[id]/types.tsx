// Define the types for the dynamic route page
export interface NewsDetailPageParams {
  id: string;
}
export interface NewsDetailPageProps {
  params: Promise<NewsDetailPageParams>;
}