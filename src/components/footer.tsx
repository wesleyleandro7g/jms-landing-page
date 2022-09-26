import React from "react";

export function Footer(): JSX.Element {
  return (
    <footer className="flex flex-col justify-center items-center py-16 px-0 bg-white">
      <h1 className="text-xl italic font-roboto font-black text-primary">
        James Moto Shop
      </h1>

      <div className="flex flex-col justify-center items-center my-8">
        <a href="#" target="_blank" className="text-gray-800 underline">
          Termos de uso
        </a>
        <a href="#" target="_blank" className="text-gray-800 underline">
          Políticas de privacidade
        </a>
      </div>

      <h6 className="text-gray-800">Copyright 2022 © James Moto Shop</h6>
    </footer>
  );
}
