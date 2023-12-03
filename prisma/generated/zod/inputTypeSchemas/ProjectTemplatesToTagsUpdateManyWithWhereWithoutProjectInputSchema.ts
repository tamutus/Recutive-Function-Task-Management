import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsScalarWhereInputSchema } from './ProjectTemplatesToTagsScalarWhereInputSchema';
import { ProjectTemplatesToTagsUpdateManyMutationInputSchema } from './ProjectTemplatesToTagsUpdateManyMutationInputSchema';
import { ProjectTemplatesToTagsUncheckedUpdateManyWithoutProjectInputSchema } from './ProjectTemplatesToTagsUncheckedUpdateManyWithoutProjectInputSchema';

export const ProjectTemplatesToTagsUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProjectTemplatesToTagsUpdateManyMutationInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default ProjectTemplatesToTagsUpdateManyWithWhereWithoutProjectInputSchema;
