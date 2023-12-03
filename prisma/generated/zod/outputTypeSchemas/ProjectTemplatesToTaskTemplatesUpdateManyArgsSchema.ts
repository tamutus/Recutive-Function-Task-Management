import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTaskTemplatesUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesUpdateManyMutationInputSchema'
import { ProjectTemplatesToTaskTemplatesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesUncheckedUpdateManyInputSchema'
import { ProjectTemplatesToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesWhereInputSchema'

export const ProjectTemplatesToTaskTemplatesUpdateManyArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUpdateManyArgs> = z.object({
  data: z.union([ ProjectTemplatesToTaskTemplatesUpdateManyMutationInputSchema,ProjectTemplatesToTaskTemplatesUncheckedUpdateManyInputSchema ]),
  where: ProjectTemplatesToTaskTemplatesWhereInputSchema.optional(),
}).strict()

export default ProjectTemplatesToTaskTemplatesUpdateManyArgsSchema;
