import type { Moto } from "../types/moto";

import { BIZ_110i } from "./motos/BIZ_110i";
import { BIZ_125 } from "./motos/BIZ_125";
import { ELITE_125 } from "./motos/ELITE_125";
import { CG_160_START } from "./motos/CG_160_START";
import { CG_160_FAN } from "./motos/CG_160_FAN";
import { CG_160_TITAN } from "./motos/CG_160_TITAN";
import { PCX_STD_CBS } from "./motos/PCX_STD_CBS";

export const motos: Moto[] = [
  BIZ_110i,
  BIZ_125,
  ELITE_125,
  CG_160_START,
  CG_160_FAN,
  CG_160_TITAN,
  PCX_STD_CBS,
];
