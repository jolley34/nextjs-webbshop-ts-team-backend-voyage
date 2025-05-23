import Image from "next/image";

export default function ImageContainer() {
  return (
    <>
      <Image
        style={{ width: "100vw", height: "80dvh", objectFit: "cover" }}
        src="https://www.apple.com/euro/iphone-15-pro/b/screens_alt/images/overview/welcome/hero_endframe__ov6ewwmbhiqq_large_2x.jpg"
        alt=""
      />
    </>
  );
}
