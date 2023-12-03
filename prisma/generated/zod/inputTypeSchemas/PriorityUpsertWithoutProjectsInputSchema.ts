import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityUpdateWithoutProjectsInputSchema } from './PriorityUpdateWithoutProjectsInputSchema';
import { PriorityUncheckedUpdateWithoutProjectsInputSchema } from './PriorityUncheckedUpdateWithoutProjectsInputSchema';
import { PriorityCreateWithoutProjectsInputSchema } from './PriorityCreateWithoutProjectsInputSchema';
import { PriorityUncheckedCreateWithoutProjectsInputSchema } from './PriorityUncheckedCreateWithoutProjectsInputSchema';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';

export const PriorityUpsertWithoutProjectsInputSchema: z.ZodType<Prisma.PriorityUpsertWithoutProjectsInput> = z.object({
  update: z.union([ z.lazy(() => PriorityUpdateWithoutProjectsInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutProjectsInputSchema) ]),
  create: z.union([ z.lazy(() => PriorityCreateWithoutProjectsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutProjectsInputSchema) ]),
  where: z.lazy(() => PriorityWhereInputSchema).optional()
}).strict();

export default PriorityUpsertWithoutProjectsInputSchema;
