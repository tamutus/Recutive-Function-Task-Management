import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectTemplatesUpdateManyWithWhereWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesUpdateManyWithWhereWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectTemplatesScalarWhereInputSchema } from './PrivateEnergiesToProjectTemplatesScalarWhereInputSchema';

export const PrivateEnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyNestedInputSchema;
