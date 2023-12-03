import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutPrioritiesInputSchema } from './ProjectCreateWithoutPrioritiesInputSchema';
import { ProjectUncheckedCreateWithoutPrioritiesInputSchema } from './ProjectUncheckedCreateWithoutPrioritiesInputSchema';

export const ProjectCreateOrConnectWithoutPrioritiesInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutPrioritiesInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutPrioritiesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPrioritiesInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutPrioritiesInputSchema;
