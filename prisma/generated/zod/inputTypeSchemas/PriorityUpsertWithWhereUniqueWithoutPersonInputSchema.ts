import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityUpdateWithoutPersonInputSchema } from './PriorityUpdateWithoutPersonInputSchema';
import { PriorityUncheckedUpdateWithoutPersonInputSchema } from './PriorityUncheckedUpdateWithoutPersonInputSchema';
import { PriorityCreateWithoutPersonInputSchema } from './PriorityCreateWithoutPersonInputSchema';
import { PriorityUncheckedCreateWithoutPersonInputSchema } from './PriorityUncheckedCreateWithoutPersonInputSchema';

export const PriorityUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PriorityUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PriorityWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PriorityUpdateWithoutPersonInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => PriorityCreateWithoutPersonInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PriorityUpsertWithWhereUniqueWithoutPersonInputSchema;
