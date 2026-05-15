import type { PartyProfile } from "@/features/discover/types";

export function DiscoveryStackPreview({ profiles }: { profiles: readonly PartyProfile[] }) {
  return (
    <>
      <StackPreviewLayer
        image={profiles[1].image}
        className="inset-x-14 top-0 opacity-35"
        overlayClassName="bg-white/35 backdrop-blur-[1px]"
      />
      <StackPreviewLayer
        image={profiles[0].image}
        className="inset-x-8 top-4 opacity-60"
        overlayClassName="bg-white/20 backdrop-blur-[0.5px]"
      />
    </>
  );
}

function StackPreviewLayer({
  image,
  className,
  overlayClassName,
}: {
  image: string;
  className: string;
  overlayClassName: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute h-[min(648px,calc(100svh-220px))] min-h-125 overflow-hidden rounded-[30px] max-[430px]:min-h-115 ${className}`}
    >
      <img className="size-full object-cover" src={image} alt="" />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
