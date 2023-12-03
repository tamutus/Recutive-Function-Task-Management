import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutPersonInputSchema } from './PrivateEnergyCreateWithoutPersonInputSchema';
import { PrivateEnergyUncheckedCreateWithoutPersonInputSchema } from './PrivateEnergyUncheckedCreateWithoutPersonInputSchema';
import { PrivateEnergyCreateOrConnectWithoutPersonInputSchema } from './PrivateEnergyCreateOrConnectWithoutPersonInputSchema';
import { PrivateEnergyUpsertWithWhereUniqueWithoutPersonInputSchema } from './PrivateEnergyUpsertWithWhereUniqueWithoutPersonInputSchema';
import { PrivateEnergyCreateManyPersonInputEnvelopeSchema } from './PrivateEnergyCreateManyPersonInputEnvelopeSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyUpdateWithWhereUniqueWithoutPersonInputSchema } from './PrivateEnergyUpdateWithWhereUniqueWithoutPersonInputSchema';
import { PrivateEnergyUpdateManyWithWhereWithoutPersonInputSchema } from './PrivateEnergyUpdateManyWithWhereWithoutPersonInputSchema';
import { PrivateEnergyScalarWhereInputSchema } from './PrivateEnergyScalarWhereInputSchema';

export const PrivateEnergyUncheckedUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.PrivateEnergyUncheckedUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutPersonInputSchema),z.lazy(() => PrivateEnergyCreateWithoutPersonInputSchema).array(),z.lazy(() => PrivateEnergyUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergyCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PrivateEnergyCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergyUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PrivateEnergyUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergyCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergyWhereUniqueInputSchema),z.lazy(() => PrivateEnergyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergyWhereUniqueInputSchema),z.lazy(() => PrivateEnergyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergyWhereUniqueInputSchema),z.lazy(() => PrivateEnergyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergyWhereUniqueInputSchema),z.lazy(() => PrivateEnergyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergyUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PrivateEnergyUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergyUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => PrivateEnergyUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergyScalarWhereInputSchema),z.lazy(() => PrivateEnergyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergyUncheckedUpdateManyWithoutPersonNestedInputSchema;
