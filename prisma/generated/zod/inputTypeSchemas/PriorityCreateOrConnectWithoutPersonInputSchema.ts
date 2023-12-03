import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityCreateWithoutPersonInputSchema } from './PriorityCreateWithoutPersonInputSchema';
import { PriorityUncheckedCreateWithoutPersonInputSchema } from './PriorityUncheckedCreateWithoutPersonInputSchema';

export const PriorityCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.PriorityCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => PriorityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PriorityCreateWithoutPersonInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PriorityCreateOrConnectWithoutPersonInputSchema;
