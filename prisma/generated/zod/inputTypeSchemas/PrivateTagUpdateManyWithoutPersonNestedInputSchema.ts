import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutPersonInputSchema } from './PrivateTagCreateWithoutPersonInputSchema';
import { PrivateTagUncheckedCreateWithoutPersonInputSchema } from './PrivateTagUncheckedCreateWithoutPersonInputSchema';
import { PrivateTagCreateOrConnectWithoutPersonInputSchema } from './PrivateTagCreateOrConnectWithoutPersonInputSchema';
import { PrivateTagUpsertWithWhereUniqueWithoutPersonInputSchema } from './PrivateTagUpsertWithWhereUniqueWithoutPersonInputSchema';
import { PrivateTagCreateManyPersonInputEnvelopeSchema } from './PrivateTagCreateManyPersonInputEnvelopeSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagUpdateWithWhereUniqueWithoutPersonInputSchema } from './PrivateTagUpdateWithWhereUniqueWithoutPersonInputSchema';
import { PrivateTagUpdateManyWithWhereWithoutPersonInputSchema } from './PrivateTagUpdateManyWithWhereWithoutPersonInputSchema';
import { PrivateTagScalarWhereInputSchema } from './PrivateTagScalarWhereInputSchema';

export const PrivateTagUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.PrivateTagUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutPersonInputSchema),z.lazy(() => PrivateTagCreateWithoutPersonInputSchema).array(),z.lazy(() => PrivateTagUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PrivateTagCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateTagUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PrivateTagUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateTagWhereUniqueInputSchema),z.lazy(() => PrivateTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateTagWhereUniqueInputSchema),z.lazy(() => PrivateTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateTagWhereUniqueInputSchema),z.lazy(() => PrivateTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateTagWhereUniqueInputSchema),z.lazy(() => PrivateTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateTagUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PrivateTagUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateTagUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => PrivateTagUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateTagScalarWhereInputSchema),z.lazy(() => PrivateTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagUpdateManyWithoutPersonNestedInputSchema;
