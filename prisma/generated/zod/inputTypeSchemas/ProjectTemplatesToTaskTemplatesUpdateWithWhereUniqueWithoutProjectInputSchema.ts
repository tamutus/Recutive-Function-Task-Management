import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema } from './ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema';
import { ProjectTemplatesToTaskTemplatesUpdateWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesUpdateWithoutProjectInputSchema';
import { ProjectTemplatesToTaskTemplatesUncheckedUpdateWithoutProjectInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedUpdateWithoutProjectInputSchema';

export const ProjectTemplatesToTaskTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateWithoutProjectInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default ProjectTemplatesToTaskTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema;
