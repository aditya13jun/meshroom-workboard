"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useOrganization } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const EmptyBoards = () => {
    const router = useRouter();
    const { organization } = useOrganization();
    const { mutate, pending } = useApiMutation(api.board.create);
    const onClick = () => {
        if (!organization) return;

        mutate({
            orgId: organization.id,
            title: "Untitled"
        })
        .then((id) => {
            toast.success("Board created!");
            router.push(`/board/$(id)`);
        })
        .catch(() => toast.error("Failed to create board!"));
    };

return (
    <div className="h-full flex flex-col items-center justify-center">
        <Image
            src="/note.svg"
            alt="Empty Search"
            height={100}
            width={100}
        />
        <h2 className="text-2xl font-semibold mt-6">
            Create your first Board!
        </h2>
        <p className="text-muted-foreground text-sm mt-2">
            Start by creating a Board for your organisation...
        </p>
        <div className="mt-6">
            <Button disabled={pending} onClick={onClick} size="lg">
                Create board
            </Button>
        </div>
    </div>
)
}