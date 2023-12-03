import { z } from 'zod';

/////////////////////////////////////////
// ENERGIES TO TAGS SCHEMA
/////////////////////////////////////////

/**
 * People can assign tags to forms of energy.
 */
export const EnergiesToTagsSchema = z.object({
  energyId: z.number().int(),
  tagId: z.number().int(),
  taggerId: z.number().int(),
  info: z.string().nullable(),
})

export type EnergiesToTags = z.infer<typeof EnergiesToTagsSchema>

export default EnergiesToTagsSchema;
