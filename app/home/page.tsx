import MovieVideo from "@/app/components/MovieBanner";
import RecentlyAdded from "../components/RecentlyAdded";

export default function HomePage() {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="text-3xl font-bold">Recently Added, Testing GPG Sign</h1>
      <RecentlyAdded />
    </div>
  );
}
