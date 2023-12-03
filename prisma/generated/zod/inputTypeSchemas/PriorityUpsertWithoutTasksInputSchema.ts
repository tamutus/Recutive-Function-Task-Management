import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityUpdateWithoutTasksInputSchema } from './PriorityUpdateWithoutTasksInputSchema';
import { PriorityUncheckedUpdateWithoutTasksInputSchema } from './PriorityUncheckedUpdateWithoutTasksInputSchema';
import { PriorityCreateWithoutTasksInputSchema } from './PriorityCreateWithoutTasksInputSchema';
import { PriorityUncheckedCreateWithoutTasksInputSchema } from './PriorityUncheckedCreateWithoutTasksInputSchema';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';

export const PriorityUpsertWithoutTasksInputSchema: z.ZodType<Prisma.PriorityUpsertWithoutTasksInput> = z.object({
  update: z.union([ z.lazy(() => PriorityUpdateWithoutTasksInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutTasksInputSchema) ]),
  create: z.union([ z.lazy(() => PriorityCreateWithoutTasksInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutTasksInputSchema) ]),
  where: z.lazy(() => PriorityWhereInputSchema).optional()
}).strict();

export default PriorityUpsertWithoutTasksInputSchema;
