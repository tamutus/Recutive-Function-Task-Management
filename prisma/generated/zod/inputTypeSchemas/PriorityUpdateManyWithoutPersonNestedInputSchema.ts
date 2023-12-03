import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateWithoutPersonInputSchema } from './PriorityCreateWithoutPersonInputSchema';
import { PriorityUncheckedCreateWithoutPersonInputSchema } from './PriorityUncheckedCreateWithoutPersonInputSchema';
import { PriorityCreateOrConnectWithoutPersonInputSchema } from './PriorityCreateOrConnectWithoutPersonInputSchema';
import { PriorityUpsertWithWhereUniqueWithoutPersonInputSchema } from './PriorityUpsertWithWhereUniqueWithoutPersonInputSchema';
import { PriorityCreateManyPersonInputEnvelopeSchema } from './PriorityCreateManyPersonInputEnvelopeSchema';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityUpdateWithWhereUniqueWithoutPersonInputSchema } from './PriorityUpdateWithWhereUniqueWithoutPersonInputSchema';
import { PriorityUpdateManyWithWhereWithoutPersonInputSchema } from './PriorityUpdateManyWithWhereWithoutPersonInputSchema';
import { PriorityScalarWhereInputSchema } from './PriorityScalarWhereInputSchema';

export const PriorityUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.PriorityUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => PriorityCreateWithoutPersonInputSchema),z.lazy(() => PriorityCreateWithoutPersonInputSchema).array(),z.lazy(() => PriorityUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PriorityCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PriorityCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PriorityUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PriorityUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PriorityCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PriorityWhereUniqueInputSchema),z.lazy(() => PriorityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PriorityWhereUniqueInputSchema),z.lazy(() => PriorityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PriorityWhereUniqueInputSchema),z.lazy(() => PriorityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PriorityWhereUniqueInputSchema),z.lazy(() => PriorityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PriorityUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PriorityUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PriorityUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => PriorityUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PriorityScalarWhereInputSchema),z.lazy(() => PriorityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PriorityUpdateManyWithoutPersonNestedInputSchema;
