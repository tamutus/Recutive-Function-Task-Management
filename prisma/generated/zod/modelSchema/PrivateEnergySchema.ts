import { z } from 'zod';

/////////////////////////////////////////
// PRIVATE ENERGY SCHEMA
/////////////////////////////////////////

/**
 * People can define their own forms of energy, and capture the same information as publicly defined ones.
 */
export const PrivateEnergySchema = z.object({
  personId: z.number().int(),
  id: z.number().int(),
  name: z.string(),
  unit: z.string(),
  info: z.string().nullable(),
  color: z.string().nullable(),
  music: z.string().array(),
})

export type PrivateEnergy = z.infer<typeof PrivateEnergySchema>

export default PrivateEnergySchema;
