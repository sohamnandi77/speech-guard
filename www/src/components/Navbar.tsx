import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 bg-white/75 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto lg:px-8 px-6">
        <div className="relative flex h-14 items-center justify-between">
          <Link
            href="/"
            className="relative text-black sm:absolute inset-y-0 left-0 flex items-center font-semibold"
          >
            <Image
              src="/swear-emoji.png"
              alt="angry-emoji"
              width={24}
              height={24}
              className="h-6 w-6 mr-1.5"
            />
            SpeechGuard API
          </Link>

          {/* placeholder */}
          <div className="hidden sm:block invisible">Speech Guard API</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
