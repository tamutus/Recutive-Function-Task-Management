import { z } from 'zod';

/////////////////////////////////////////
// PRIVATE ENERGIES TO PROJECTS SCHEMA
/////////////////////////////////////////

/**
 * People can denote that certain projects are related to their personally defined forms of energy
 */
export const PrivateEnergiesToProjectsSchema = z.object({
  projectId: z.number().int(),
  energyId: z.number().int(),
  notes: z.string().nullable(),
})

export type PrivateEnergiesToProjects = z.infer<typeof PrivateEnergiesToProjectsSchema>

export default PrivateEnergiesToProjectsSchema;
