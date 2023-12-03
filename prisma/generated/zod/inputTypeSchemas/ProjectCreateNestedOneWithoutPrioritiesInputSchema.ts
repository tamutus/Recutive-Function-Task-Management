import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateWithoutPrioritiesInputSchema } from './ProjectCreateWithoutPrioritiesInputSchema';
import { ProjectUncheckedCreateWithoutPrioritiesInputSchema } from './ProjectUncheckedCreateWithoutPrioritiesInputSchema';
import { ProjectCreateOrConnectWithoutPrioritiesInputSchema } from './ProjectCreateOrConnectWithoutPrioritiesInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutPrioritiesInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutPrioritiesInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutPrioritiesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPrioritiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutPrioritiesInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutPrioritiesInputSchema;
