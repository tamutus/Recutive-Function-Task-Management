import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTagsUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProjectsToTagsUpdateManyMutationInputSchema'
import { ProjectsToTagsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProjectsToTagsUncheckedUpdateManyInputSchema'
import { ProjectsToTagsWhereInputSchema } from '../inputTypeSchemas/ProjectsToTagsWhereInputSchema'

export const ProjectsToTagsUpdateManyArgsSchema: z.ZodType<Prisma.ProjectsToTagsUpdateManyArgs> = z.object({
  data: z.union([ ProjectsToTagsUpdateManyMutationInputSchema,ProjectsToTagsUncheckedUpdateManyInputSchema ]),
  where: ProjectsToTagsWhereInputSchema.optional(),
}).strict()

export default ProjectsToTagsUpdateManyArgsSchema;
