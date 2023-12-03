import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';
import { PriorityUpdateWithoutProjectsInputSchema } from './PriorityUpdateWithoutProjectsInputSchema';
import { PriorityUncheckedUpdateWithoutProjectsInputSchema } from './PriorityUncheckedUpdateWithoutProjectsInputSchema';

export const PriorityUpdateToOneWithWhereWithoutProjectsInputSchema: z.ZodType<Prisma.PriorityUpdateToOneWithWhereWithoutProjectsInput> = z.object({
  where: z.lazy(() => PriorityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PriorityUpdateWithoutProjectsInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutProjectsInputSchema) ]),
}).strict();

export default PriorityUpdateToOneWithWhereWithoutProjectsInputSchema;
