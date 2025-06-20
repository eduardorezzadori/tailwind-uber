import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white h-screen w-full">
      <header className="bg-black h-20 flex items-center justify-between p-8 max-w-7xl">
        <Image
        src="/assets/uberlogo.png"
        alt=""
        height={50}
        width={100}
        ></Image>
        <div>
          <a href="#">Entrar</a>
          <a href="#">Cadastre-se</a>
        </div>
      </header>
    </div>
  );
}
