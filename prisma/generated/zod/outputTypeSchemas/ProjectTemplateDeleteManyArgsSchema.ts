import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplateWhereInputSchema } from '../inputTypeSchemas/ProjectTemplateWhereInputSchema'

export const ProjectTemplateDeleteManyArgsSchema: z.ZodType<Prisma.ProjectTemplateDeleteManyArgs> = z.object({
  where: ProjectTemplateWhereInputSchema.optional(),
}).strict()

export default ProjectTemplateDeleteManyArgsSchema;
