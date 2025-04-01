import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
    icon: LucideIcon,
    label: string,
    href?: string,
}

export function NavButton({
    icon: Icon,
    label,
    href,
}: Props) {
    return (
        <Button 
            size="icon" 
            aria-label={label}
            title={label}
            asChild
            className="mr-2"
            >                
                {href ? (
                    <Link href={href}>
                        <Icon />
                    </Link>
                ) : (
                    <Icon />
                )}
            </Button>
        

    )
}