import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema } from './ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema';
import { ProjectTemplatesToTaskTemplatesUpdateWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesUpdateWithoutTaskInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema';

export const ProjectTemplatesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateWithoutTaskInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema) ]),
}).strict();

export default ProjectTemplatesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema;
