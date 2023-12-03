import { z } from 'zod';

/////////////////////////////////////////
// PRIVATE ENERGIES TO TAGS SCHEMA
/////////////////////////////////////////

/**
 * People can assign canonical tags to their personally defined forms of energy.
 */
export const PrivateEnergiesToTagsSchema = z.object({
  energyId: z.number().int(),
  tagId: z.number().int(),
})

export type PrivateEnergiesToTags = z.infer<typeof PrivateEnergiesToTagsSchema>

export default PrivateEnergiesToTagsSchema;
