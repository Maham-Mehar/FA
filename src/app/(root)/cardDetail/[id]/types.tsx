export interface NewsDetailPageParams {
  id: string;
}

export interface NewsDetailPageProps {
  params: Promise<NewsDetailPageParams>; 
}
