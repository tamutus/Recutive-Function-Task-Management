import { z } from 'zod';

/////////////////////////////////////////
// PRIORITIES TO PROJECTS SCHEMA
/////////////////////////////////////////

/**
 * People can assign their projects to certain priorities of theirs.
 */
export const PrioritiesToProjectsSchema = z.object({
  projectId: z.number().int(),
  priorityId: z.number().int(),
  notes: z.string().nullable(),
})

export type PrioritiesToProjects = z.infer<typeof PrioritiesToProjectsSchema>

export default PrioritiesToProjectsSchema;
