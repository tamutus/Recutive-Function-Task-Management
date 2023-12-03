import { z } from 'zod';

/////////////////////////////////////////
// ENERGIES TO PRIVATE TAGS SCHEMA
/////////////////////////////////////////

/**
 * People can assign their own tags to their canonically defined forms of energy.
 */
export const EnergiesToPrivateTagsSchema = z.object({
  energyId: z.number().int(),
  tagId: z.number().int(),
  notes: z.string().nullable(),
})

export type EnergiesToPrivateTags = z.infer<typeof EnergiesToPrivateTagsSchema>

export default EnergiesToPrivateTagsSchema;
