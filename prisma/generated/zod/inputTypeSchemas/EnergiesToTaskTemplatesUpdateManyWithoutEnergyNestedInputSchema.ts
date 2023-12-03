import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema } from './EnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToTaskTemplatesWhereUniqueInputSchema } from './EnergiesToTaskTemplatesWhereUniqueInputSchema';
import { EnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesUpdateManyWithWhereWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesUpdateManyWithWhereWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesScalarWhereInputSchema } from './EnergiesToTaskTemplatesScalarWhereInputSchema';

export const EnergiesToTaskTemplatesUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskTemplatesUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToTaskTemplatesScalarWhereInputSchema),z.lazy(() => EnergiesToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTaskTemplatesUpdateManyWithoutEnergyNestedInputSchema;
