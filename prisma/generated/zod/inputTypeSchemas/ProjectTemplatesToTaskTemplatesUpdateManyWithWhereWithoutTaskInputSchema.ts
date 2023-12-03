import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesScalarWhereInputSchema } from './ProjectTemplatesToTaskTemplatesScalarWhereInputSchema';
import { ProjectTemplatesToTaskTemplatesUpdateManyMutationInputSchema } from './ProjectTemplatesToTaskTemplatesUpdateManyMutationInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema';

export const ProjectTemplatesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUpdateManyWithWhereWithoutTaskInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateManyMutationInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default ProjectTemplatesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema;
