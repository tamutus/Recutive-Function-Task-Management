import { z } from 'zod';

/////////////////////////////////////////
// PRIVATE ENERGIES TO SKILLS SCHEMA
/////////////////////////////////////////

/**
 * People can link their personal forms of energy to skills and describe the relationship.
 */
export const PrivateEnergiesToSkillsSchema = z.object({
  skillId: z.number().int(),
  energyId: z.number().int(),
  notes: z.string().nullable(),
})

export type PrivateEnergiesToSkills = z.infer<typeof PrivateEnergiesToSkillsSchema>

export default PrivateEnergiesToSkillsSchema;
