import { z } from 'zod';

/////////////////////////////////////////
// PROJECT SCHEMA
/////////////////////////////////////////

/**
 * A project can be implemented from a project template, or a person can make their own one-off project.
 */
export const ProjectSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  info: z.string().nullable(),
  completionRequirements: z.string().nullable(),
  color: z.string().nullable(),
  links: z.string().array(),
  templateId: z.number().int().nullable(),
  public: z.boolean(),
  publicAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  startAt: z.coerce.date().nullable(),
  startedAt: z.coerce.date().nullable(),
  dueAt: z.coerce.date().nullable(),
  endedAt: z.coerce.date().nullable(),
})

export type Project = z.infer<typeof ProjectSchema>

export default ProjectSchema;
