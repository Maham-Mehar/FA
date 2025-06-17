export interface InfoItem {
  id: number;
  label: string;
  img: string;
  href: string;
}

export const InfoData: InfoItem[] = [
  { id: 1, img: "/images/pdf.png", label: "Pitchdeck", href: "/images/Pitchdeck.pdf" },
  { id: 2, img: "/images/website.png", label: "Website", href: "https://sailaway-gamma.vercel.app/" },
  { id: 3, img: "/images/figjam.png", label: "User Flows", href: "https://www.figma.com/board/riU6VzOsUkHHgWeRWj88OH/SalesAway-Charters?node-id=0-1&p=f" },
  { id: 4, img: "/images/figma.png", label: "Designs", href: "https://www.figma.com/design/EHdI64OuxyXtOZlKfUg6EB/SalesAway-Charters?node-id=0-1&p=f" },
  { id: 5, img: "/images/pdf.png", label: "Project Scope", href: "/images/scope.pdf" },
  { id: 6, img: "/images/contact.png", label: "Contact Founder", href: "#" },
];
