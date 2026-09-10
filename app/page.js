import Gallery from "@/components/Gallery";
import experiments from "@/data/experiments.json";

export default function Home() {
  return <Gallery experiments={experiments} />;
}
