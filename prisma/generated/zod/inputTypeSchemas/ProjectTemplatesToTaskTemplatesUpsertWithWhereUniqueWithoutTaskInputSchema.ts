import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema } from './ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema';
import { ProjectTemplatesToTaskTemplatesUpdateWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesUpdateWithoutTaskInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema';
import { ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';

export const ProjectTemplatesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateWithoutTaskInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default ProjectTemplatesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema;
