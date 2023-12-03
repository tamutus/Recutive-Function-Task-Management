import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTagsUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsUpdateManyMutationInputSchema'
import { ProjectTemplatesToTagsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsUncheckedUpdateManyInputSchema'
import { ProjectTemplatesToTagsWhereInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsWhereInputSchema'

export const ProjectTemplatesToTagsUpdateManyArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpdateManyArgs> = z.object({
  data: z.union([ ProjectTemplatesToTagsUpdateManyMutationInputSchema,ProjectTemplatesToTagsUncheckedUpdateManyInputSchema ]),
  where: ProjectTemplatesToTagsWhereInputSchema.optional(),
}).strict()

export default ProjectTemplatesToTagsUpdateManyArgsSchema;
