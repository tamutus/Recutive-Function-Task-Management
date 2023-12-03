import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutPrioritiesInputSchema } from './ProjectUpdateWithoutPrioritiesInputSchema';
import { ProjectUncheckedUpdateWithoutPrioritiesInputSchema } from './ProjectUncheckedUpdateWithoutPrioritiesInputSchema';

export const ProjectUpdateToOneWithWhereWithoutPrioritiesInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutPrioritiesInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutPrioritiesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPrioritiesInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutPrioritiesInputSchema;
