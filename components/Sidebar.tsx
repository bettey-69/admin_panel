import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  LayoutDashboard,
  Newspaper,
  Folder,
  CreditCard,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Command className="bg-secondary rounded-none">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <Link
              href="/dashboard"
              className="inline-block hover:text-slate-500"
            >
              Dashboard
            </Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className="mr-2 h-4 w-4" />
            <Link href="/Language"> Language</Link>
          </CommandItem>
          <CommandItem>
            <Folder className="mr-2 h-4 w-4" />
            <Link href="/">Catagories </Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span> Profile </span>
            <CommandShortcut>&#8984;P</CommandShortcut>
          </CommandItem>

          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span> Setting </span>
            <CommandShortcut>&#8984;S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
export default Sidebar;