import { z } from 'zod';

/////////////////////////////////////////
// ENERGY SCHEMA
/////////////////////////////////////////

/**
 * Different activities take or create different kinds of energy. The Energy model serves to generalize those different needs a person has, in a way that a person can subjectively quantify.
 */
export const EnergySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  unit: z.string(),
  info: z.string().nullable(),
  color: z.string().nullable(),
  music: z.string().array(),
})

export type Energy = z.infer<typeof EnergySchema>

export default EnergySchema;
