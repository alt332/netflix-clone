import { Button } from "@/components/ui/button";
import { InfoIcon, PlayIcon } from "lucide-react";

export default function MovieBannerButttons() {
  return (
    <div className="flex gap-x-3 mt-4">
      <Button>
        <PlayIcon className="w-6 h-6 mr-2" /> Play
      </Button>
      <Button>
        <InfoIcon className="w-6 h-6 mr-2" /> Learn More
      </Button>
    </div>
  );
}
