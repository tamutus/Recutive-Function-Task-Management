import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectUpdateWithoutPrioritiesInputSchema } from './ProjectUpdateWithoutPrioritiesInputSchema';
import { ProjectUncheckedUpdateWithoutPrioritiesInputSchema } from './ProjectUncheckedUpdateWithoutPrioritiesInputSchema';
import { ProjectCreateWithoutPrioritiesInputSchema } from './ProjectCreateWithoutPrioritiesInputSchema';
import { ProjectUncheckedCreateWithoutPrioritiesInputSchema } from './ProjectUncheckedCreateWithoutPrioritiesInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutPrioritiesInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutPrioritiesInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutPrioritiesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPrioritiesInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutPrioritiesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPrioritiesInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutPrioritiesInputSchema;
