import type { Moto } from "../types/moto";

import { biz110i } from "../database/motos/biz110i";
import { biz125 } from "./motos/biz125";
import { elite125 } from "./motos/elite125";
import { cg160start } from "./motos/cg160start";

export const motos: Moto[] = [biz110i, biz125, elite125, cg160start];
