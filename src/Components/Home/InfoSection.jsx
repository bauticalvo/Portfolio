import Ripple from "../magicui/ripple.tsx";

const InfoSection =() => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-secondary md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black">
        Ripple
      </p>
      <Ripple />
    </div>
  );
}

export default InfoSection