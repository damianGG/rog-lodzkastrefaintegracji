import Image from "next/image";

export default function Toplogo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Image
        src="/img/logos/podkarpackie.jpg"
        alt="logo"
        sizes="90vw"
        width={1200}
        height={100}
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '1200px',
        }} />

    </div>
  );
}
