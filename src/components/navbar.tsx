import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div>
      <nav className="flex lg:flex-row flex-row-reverse items-center justify-between top-0 z-20 lg:px-28 px-10 py-2 fixed w-screen transition-all duration-300 ease-in-out bg-transparent">
        <div className="flex items-center justify-between w-full">
          <Button>Get a Quote</Button>
        </div>
      </nav>
    </div>
  );
}
