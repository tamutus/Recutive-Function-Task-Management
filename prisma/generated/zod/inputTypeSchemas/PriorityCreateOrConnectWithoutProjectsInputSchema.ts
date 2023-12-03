import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityCreateWithoutProjectsInputSchema } from './PriorityCreateWithoutProjectsInputSchema';
import { PriorityUncheckedCreateWithoutProjectsInputSchema } from './PriorityUncheckedCreateWithoutProjectsInputSchema';

export const PriorityCreateOrConnectWithoutProjectsInputSchema: z.ZodType<Prisma.PriorityCreateOrConnectWithoutProjectsInput> = z.object({
  where: z.lazy(() => PriorityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PriorityCreateWithoutProjectsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutProjectsInputSchema) ]),
}).strict();

export default PriorityCreateOrConnectWithoutProjectsInputSchema;
