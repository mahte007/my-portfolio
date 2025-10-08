import Image from "next/image";

type PackageFeatureProps = {
  icon: string;
  text: string;
};

export default function PackageFeature({ icon, text }: PackageFeatureProps) {
  return (
    <div className="flex items-center gap-2">
      <Image alt="tick" src={icon} width={15} height={15} />
      <p className="text-sm">{text}</p>
    </div>
  );
}
