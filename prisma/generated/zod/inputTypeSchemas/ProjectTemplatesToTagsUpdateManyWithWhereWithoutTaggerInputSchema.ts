import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsScalarWhereInputSchema } from './ProjectTemplatesToTagsScalarWhereInputSchema';
import { ProjectTemplatesToTagsUpdateManyMutationInputSchema } from './ProjectTemplatesToTagsUpdateManyMutationInputSchema';
import { ProjectTemplatesToTagsUncheckedUpdateManyWithoutTaggerInputSchema } from './ProjectTemplatesToTagsUncheckedUpdateManyWithoutTaggerInputSchema';

export const ProjectTemplatesToTagsUpdateManyWithWhereWithoutTaggerInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpdateManyWithWhereWithoutTaggerInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProjectTemplatesToTagsUpdateManyMutationInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedUpdateManyWithoutTaggerInputSchema) ]),
}).strict();

export default ProjectTemplatesToTagsUpdateManyWithWhereWithoutTaggerInputSchema;
