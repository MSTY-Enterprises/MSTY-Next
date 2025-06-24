// app/page.jsx
// import HomeClient from "@/components/HomeClient"; 
// 👈 Client component with AOS and useEffect
import HomeClient from "./HomeClient";

export const metadata = {
  title: "MSTY Enterprises | Web & Digital Marketing Solution for Grow",
  description:
    "MSTY Enterprises provides professional web solutions, social media management, website maintenance, and digital marketing to help businesses expand online.",
};

export default function HomePage() {
  return <HomeClient />;
}
