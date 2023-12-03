import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTagsWhereInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsWhereInputSchema'

export const ProjectTemplatesToTagsDeleteManyArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTagsDeleteManyArgs> = z.object({
  where: ProjectTemplatesToTagsWhereInputSchema.optional(),
}).strict()

export default ProjectTemplatesToTagsDeleteManyArgsSchema;
