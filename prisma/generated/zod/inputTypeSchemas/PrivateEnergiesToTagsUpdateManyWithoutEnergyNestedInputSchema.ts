import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTagsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTagsCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToTagsCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToTagsUpsertWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToTagsUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToTagsCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToTagsCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToTagsWhereUniqueInputSchema } from './PrivateEnergiesToTagsWhereUniqueInputSchema';
import { PrivateEnergiesToTagsUpdateWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToTagsUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToTagsUpdateManyWithWhereWithoutEnergyInputSchema } from './PrivateEnergiesToTagsUpdateManyWithWhereWithoutEnergyInputSchema';
import { PrivateEnergiesToTagsScalarWhereInputSchema } from './PrivateEnergiesToTagsScalarWhereInputSchema';

export const PrivateEnergiesToTagsUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTagsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTagsCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTagsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTagsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToTagsUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTagsUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTagsCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToTagsUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTagsUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToTagsUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTagsUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToTagsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTagsUpdateManyWithoutEnergyNestedInputSchema;
