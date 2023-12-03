import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplateUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProjectTemplateUpdateManyMutationInputSchema'
import { ProjectTemplateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProjectTemplateUncheckedUpdateManyInputSchema'
import { ProjectTemplateWhereInputSchema } from '../inputTypeSchemas/ProjectTemplateWhereInputSchema'

export const ProjectTemplateUpdateManyArgsSchema: z.ZodType<Prisma.ProjectTemplateUpdateManyArgs> = z.object({
  data: z.union([ ProjectTemplateUpdateManyMutationInputSchema,ProjectTemplateUncheckedUpdateManyInputSchema ]),
  where: ProjectTemplateWhereInputSchema.optional(),
}).strict()

export default ProjectTemplateUpdateManyArgsSchema;
