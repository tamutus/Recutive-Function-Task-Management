import { z } from 'zod';

/////////////////////////////////////////
// PRIVATE ENERGIES TO PRIVATE TAGS SCHEMA
/////////////////////////////////////////

/**
 * People can assign their own tags to their personally defined forms of energy.
 */
export const PrivateEnergiesToPrivateTagsSchema = z.object({
  energyId: z.number().int(),
  tagId: z.number().int(),
})

export type PrivateEnergiesToPrivateTags = z.infer<typeof PrivateEnergiesToPrivateTagsSchema>

export default PrivateEnergiesToPrivateTagsSchema;
