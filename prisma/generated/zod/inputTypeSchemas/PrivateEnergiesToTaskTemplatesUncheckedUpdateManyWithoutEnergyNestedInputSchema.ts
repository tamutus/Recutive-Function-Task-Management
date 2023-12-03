import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesUpdateManyWithWhereWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesUpdateManyWithWhereWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesScalarWhereInputSchema } from './PrivateEnergiesToTaskTemplatesScalarWhereInputSchema';

export const PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema;
