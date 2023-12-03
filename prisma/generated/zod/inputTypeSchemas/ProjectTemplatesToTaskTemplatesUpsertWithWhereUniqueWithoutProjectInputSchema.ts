import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema } from './ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema';
import { ProjectTemplatesToTaskTemplatesUpdateWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesUpdateWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedUpdateWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedUpdateWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutProjectInputSchema';

export const ProjectTemplatesToTaskTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default ProjectTemplatesToTaskTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema;
