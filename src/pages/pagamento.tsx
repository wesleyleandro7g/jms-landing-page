import { NextPage } from "next";
import Link from "next/link";
import QRCode from "react-qr-code";

const Payment: NextPage = () => {
  return (
    <div className="flex flex-col w-full overflow-scroll h-screen bg-secondary">
      <header className="flex justify-center space-x-6 items-center p-4">
        <Link href="/motos">
          <h1 className="text-2xl italic font-black text-primary font-roboto">
            James Moto Shop
          </h1>
        </Link>
      </header>

      <main className="p-4 space-y-8">
        <div className="w-full text-center space-y-1">
          <h3 className="text-gray-800 text-xl font-bold">Estamos quase lá!</h3>
          <p className="text-gray-800">
            Realize o pagamento da primeira parcela para prosseguir.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="border-4 border-primary-300 rounded-md p-2">
            <QRCode value="hey" />
          </div>
          <p className="text-center text-gray-800 font-semibold mt-4">
            Leia o QRCode ou clique <span className="text-primary">aqui</span>{" "}
            para ir para o banco.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Payment;
