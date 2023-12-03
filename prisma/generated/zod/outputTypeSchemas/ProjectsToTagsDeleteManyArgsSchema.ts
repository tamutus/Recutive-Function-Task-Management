import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTagsWhereInputSchema } from '../inputTypeSchemas/ProjectsToTagsWhereInputSchema'

export const ProjectsToTagsDeleteManyArgsSchema: z.ZodType<Prisma.ProjectsToTagsDeleteManyArgs> = z.object({
  where: ProjectsToTagsWhereInputSchema.optional(),
}).strict()

export default ProjectsToTagsDeleteManyArgsSchema;
