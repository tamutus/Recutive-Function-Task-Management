import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesScalarWhereInputSchema } from './ProjectTemplatesToTaskTemplatesScalarWhereInputSchema';
import { ProjectTemplatesToTaskTemplatesUpdateManyMutationInputSchema } from './ProjectTemplatesToTaskTemplatesUpdateManyMutationInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutProjectInputSchema';

export const ProjectTemplatesToTaskTemplatesUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateManyMutationInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default ProjectTemplatesToTaskTemplatesUpdateManyWithWhereWithoutProjectInputSchema;
