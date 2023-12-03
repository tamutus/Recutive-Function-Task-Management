import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityUpdateWithoutPersonInputSchema } from './PriorityUpdateWithoutPersonInputSchema';
import { PriorityUncheckedUpdateWithoutPersonInputSchema } from './PriorityUncheckedUpdateWithoutPersonInputSchema';

export const PriorityUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PriorityUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PriorityWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PriorityUpdateWithoutPersonInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default PriorityUpdateWithWhereUniqueWithoutPersonInputSchema;
