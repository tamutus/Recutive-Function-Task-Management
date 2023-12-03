import { z } from 'zod';

/////////////////////////////////////////
// ENERGIES TO PROJECTS SCHEMA
/////////////////////////////////////////

/**
 * People can denote that canonically defined forms of energy are relevant to certain projects
 */
export const EnergiesToProjectsSchema = z.object({
  projectId: z.number().int(),
  energyId: z.number().int(),
  info: z.string().nullable(),
  links: z.string().array(),
})

export type EnergiesToProjects = z.infer<typeof EnergiesToProjectsSchema>

export default EnergiesToProjectsSchema;
