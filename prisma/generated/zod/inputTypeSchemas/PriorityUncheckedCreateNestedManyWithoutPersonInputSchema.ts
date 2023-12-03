import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateWithoutPersonInputSchema } from './PriorityCreateWithoutPersonInputSchema';
import { PriorityUncheckedCreateWithoutPersonInputSchema } from './PriorityUncheckedCreateWithoutPersonInputSchema';
import { PriorityCreateOrConnectWithoutPersonInputSchema } from './PriorityCreateOrConnectWithoutPersonInputSchema';
import { PriorityCreateManyPersonInputEnvelopeSchema } from './PriorityCreateManyPersonInputEnvelopeSchema';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';

export const PriorityUncheckedCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.PriorityUncheckedCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => PriorityCreateWithoutPersonInputSchema),z.lazy(() => PriorityCreateWithoutPersonInputSchema).array(),z.lazy(() => PriorityUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PriorityCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PriorityCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PriorityCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PriorityWhereUniqueInputSchema),z.lazy(() => PriorityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PriorityUncheckedCreateNestedManyWithoutPersonInputSchema;
