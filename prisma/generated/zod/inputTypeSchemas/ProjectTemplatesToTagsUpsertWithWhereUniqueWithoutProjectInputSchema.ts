import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from './ProjectTemplatesToTagsWhereUniqueInputSchema';
import { ProjectTemplatesToTagsUpdateWithoutProjectInputSchema } from './ProjectTemplatesToTagsUpdateWithoutProjectInputSchema';
import { ProjectTemplatesToTagsUncheckedUpdateWithoutProjectInputSchema } from './ProjectTemplatesToTagsUncheckedUpdateWithoutProjectInputSchema';
import { ProjectTemplatesToTagsCreateWithoutProjectInputSchema } from './ProjectTemplatesToTagsCreateWithoutProjectInputSchema';
import { ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema } from './ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema';

export const ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProjectTemplatesToTagsUpdateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectTemplatesToTagsCreateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTagsUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default ProjectTemplatesToTagsUpsertWithWhereUniqueWithoutProjectInputSchema;
