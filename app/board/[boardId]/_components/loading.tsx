import { Loader } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
export const Loading = () => {
    return (
        <main
            className="h-full w-full relative items-center justify-center bg-neutral-100 touch-none flex">
            <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
        </main>
    );
};