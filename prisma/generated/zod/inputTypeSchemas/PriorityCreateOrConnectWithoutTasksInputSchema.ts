import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityCreateWithoutTasksInputSchema } from './PriorityCreateWithoutTasksInputSchema';
import { PriorityUncheckedCreateWithoutTasksInputSchema } from './PriorityUncheckedCreateWithoutTasksInputSchema';

export const PriorityCreateOrConnectWithoutTasksInputSchema: z.ZodType<Prisma.PriorityCreateOrConnectWithoutTasksInput> = z.object({
  where: z.lazy(() => PriorityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PriorityCreateWithoutTasksInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutTasksInputSchema) ]),
}).strict();

export default PriorityCreateOrConnectWithoutTasksInputSchema;
