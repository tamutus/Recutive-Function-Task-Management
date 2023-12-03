import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from './ProjectTemplatesToTagsWhereUniqueInputSchema';
import { ProjectTemplatesToTagsUpdateWithoutTagInputSchema } from './ProjectTemplatesToTagsUpdateWithoutTagInputSchema';
import { ProjectTemplatesToTagsUncheckedUpdateWithoutTagInputSchema } from './ProjectTemplatesToTagsUncheckedUpdateWithoutTagInputSchema';
import { ProjectTemplatesToTagsCreateWithoutTagInputSchema } from './ProjectTemplatesToTagsCreateWithoutTagInputSchema';
import { ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema } from './ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema';

export const ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProjectTemplatesToTagsUpdateWithoutTagInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateWithoutTagInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutTagInputSchema;
