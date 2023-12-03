import { z } from 'zod';

/////////////////////////////////////////
// ENERGIES TO PERSONS SCHEMA
/////////////////////////////////////////

/**
 * This relationship is a dimension of a person's experience over time, so other models refer to this join table with the word expereince.
 */
export const EnergiesToPersonsSchema = z.object({
  personId: z.number().int(),
  energyId: z.number().int(),
})

export type EnergiesToPersons = z.infer<typeof EnergiesToPersonsSchema>

export default EnergiesToPersonsSchema;
