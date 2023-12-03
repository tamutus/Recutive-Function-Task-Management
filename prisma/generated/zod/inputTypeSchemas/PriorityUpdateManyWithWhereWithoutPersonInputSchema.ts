import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityScalarWhereInputSchema } from './PriorityScalarWhereInputSchema';
import { PriorityUpdateManyMutationInputSchema } from './PriorityUpdateManyMutationInputSchema';
import { PriorityUncheckedUpdateManyWithoutPersonInputSchema } from './PriorityUncheckedUpdateManyWithoutPersonInputSchema';

export const PriorityUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.PriorityUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => PriorityScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PriorityUpdateManyMutationInputSchema),z.lazy(() => PriorityUncheckedUpdateManyWithoutPersonInputSchema) ]),
}).strict();

export default PriorityUpdateManyWithWhereWithoutPersonInputSchema;
