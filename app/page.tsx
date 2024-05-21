import VideoContainer from "@/components/VideoContainer";
import Header from "@/components/shared/header/Header";
import ShowMoreComponent from "@/components/showMore";
import Dashboard from "./dashboard/page";

export default async function Home() {
  return (
    <>
      <Header name="ananas" />
      <VideoContainer />
      <Dashboard />
      <ShowMoreComponent />
    </>
  );
}
