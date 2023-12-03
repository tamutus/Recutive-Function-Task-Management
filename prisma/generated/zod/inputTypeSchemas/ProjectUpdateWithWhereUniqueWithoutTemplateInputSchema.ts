import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateWithoutTemplateInputSchema } from './ProjectUpdateWithoutTemplateInputSchema';
import { ProjectUncheckedUpdateWithoutTemplateInputSchema } from './ProjectUncheckedUpdateWithoutTemplateInputSchema';

export const ProjectUpdateWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutTemplateInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutTemplateInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTemplateInputSchema) ]),
}).strict();

export default ProjectUpdateWithWhereUniqueWithoutTemplateInputSchema;
