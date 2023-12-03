import { z } from 'zod';

/////////////////////////////////////////
// PROJECT TEMPLATE SCHEMA
/////////////////////////////////////////

/**
 * This is the public template for projects, which individuals can implement as projects of their own.
 */
export const ProjectTemplateSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  info: z.string().nullable(),
  completionRequirements: z.string().nullable(),
  image: z.string().nullable(),
  color: z.string().nullable(),
  links: z.string().array(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ProjectTemplate = z.infer<typeof ProjectTemplateSchema>

export default ProjectTemplateSchema;
