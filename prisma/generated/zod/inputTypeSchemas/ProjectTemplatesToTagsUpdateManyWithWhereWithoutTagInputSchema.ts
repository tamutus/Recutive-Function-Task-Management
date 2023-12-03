import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsScalarWhereInputSchema } from './ProjectTemplatesToTagsScalarWhereInputSchema';
import { ProjectTemplatesToTagsUpdateManyMutationInputSchema } from './ProjectTemplatesToTagsUpdateManyMutationInputSchema';
import { ProjectTemplatesToTagsUncheckedUpdateManyWithoutTagInputSchema } from './ProjectTemplatesToTagsUncheckedUpdateManyWithoutTagInputSchema';

export const ProjectTemplatesToTagsUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProjectTemplatesToTagsUpdateManyMutationInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default ProjectTemplatesToTagsUpdateManyWithWhereWithoutTagInputSchema;
