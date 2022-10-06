import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface PurchaseProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface ProductProps {
  id: number;
  parcels?: number;
  documentation?: boolean;
  color?: string;
  colorName?: string;
  value?: number;
  planId?: number;
  featuresId?: number;
}

interface PurchaseContextInterface {
  productSelected: ProductProps;
  setProductSelected: Dispatch<SetStateAction<ProductProps>>;
}

export const PurchaseContext = createContext<PurchaseContextInterface>({
  productSelected: {} as ProductProps,
  setProductSelected: () => null,
});

const PurchaseProvider: React.FC<PurchaseProviderProps> = ({ children }) => {
  const [productSelected, setProductSelected] = useState({} as ProductProps);

  return (
    <PurchaseContext.Provider value={{ productSelected, setProductSelected }}>
      {children}
    </PurchaseContext.Provider>
  );
};

export default PurchaseProvider;
