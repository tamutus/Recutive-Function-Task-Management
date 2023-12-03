import { z } from 'zod';

/////////////////////////////////////////
// ENERGIES TO SKILLS SCHEMA
/////////////////////////////////////////

/**
 * People can link different forms of energy to skills and describe the relationship.
 */
export const EnergiesToSkillsSchema = z.object({
  skillId: z.number().int(),
  energyId: z.number().int(),
  notes: z.string().nullable(),
})

export type EnergiesToSkills = z.infer<typeof EnergiesToSkillsSchema>

export default EnergiesToSkillsSchema;
