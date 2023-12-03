import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';
import { PriorityUpdateWithoutTasksInputSchema } from './PriorityUpdateWithoutTasksInputSchema';
import { PriorityUncheckedUpdateWithoutTasksInputSchema } from './PriorityUncheckedUpdateWithoutTasksInputSchema';

export const PriorityUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.PriorityUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => PriorityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PriorityUpdateWithoutTasksInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();

export default PriorityUpdateToOneWithWhereWithoutTasksInputSchema;
