import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateWithoutTasksInputSchema } from './PriorityCreateWithoutTasksInputSchema';
import { PriorityUncheckedCreateWithoutTasksInputSchema } from './PriorityUncheckedCreateWithoutTasksInputSchema';
import { PriorityCreateOrConnectWithoutTasksInputSchema } from './PriorityCreateOrConnectWithoutTasksInputSchema';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';

export const PriorityCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.PriorityCreateNestedOneWithoutTasksInput> = z.object({
  create: z.union([ z.lazy(() => PriorityCreateWithoutTasksInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PriorityCreateOrConnectWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => PriorityWhereUniqueInputSchema).optional()
}).strict();

export default PriorityCreateNestedOneWithoutTasksInputSchema;
