import { z } from 'zod';

/////////////////////////////////////////
// PERSONS TO PROJECTS SCHEMA
/////////////////////////////////////////

/**
 * Each person can join multiple projects, and each project can have multiple people working on it. This join table keeps track of who's working on what.
 */
export const PersonsToProjectsSchema = z.object({
  personId: z.number().int(),
  projectId: z.number().int(),
  volunteerDate: z.coerce.date(),
})

export type PersonsToProjects = z.infer<typeof PersonsToProjectsSchema>

export default PersonsToProjectsSchema;
