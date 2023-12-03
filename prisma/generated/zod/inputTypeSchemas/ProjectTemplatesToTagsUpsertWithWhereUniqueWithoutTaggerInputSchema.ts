import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from './ProjectTemplatesToTagsWhereUniqueInputSchema';
import { ProjectTemplatesToTagsUpdateWithoutTaggerInputSchema } from './ProjectTemplatesToTagsUpdateWithoutTaggerInputSchema';
import { ProjectTemplatesToTagsUncheckedUpdateWithoutTaggerInputSchema } from './ProjectTemplatesToTagsUncheckedUpdateWithoutTaggerInputSchema';
import { ProjectTemplatesToTagsCreateWithoutTaggerInputSchema } from './ProjectTemplatesToTagsCreateWithoutTaggerInputSchema';
import { ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema } from './ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema';

export const ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutTaggerInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProjectTemplatesToTagsUpdateWithoutTaggerInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedUpdateWithoutTaggerInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateWithoutTaggerInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutTaggerInputSchema) ]),
}).strict();

export default ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema;
