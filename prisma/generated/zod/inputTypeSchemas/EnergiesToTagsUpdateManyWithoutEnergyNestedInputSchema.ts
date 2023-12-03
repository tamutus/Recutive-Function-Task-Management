import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsCreateWithoutEnergyInputSchema } from './EnergiesToTagsCreateWithoutEnergyInputSchema';
import { EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToTagsCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToTagsCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToTagsUpsertWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToTagsUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToTagsCreateManyEnergyInputEnvelopeSchema } from './EnergiesToTagsCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToTagsWhereUniqueInputSchema } from './EnergiesToTagsWhereUniqueInputSchema';
import { EnergiesToTagsUpdateWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToTagsUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToTagsUpdateManyWithWhereWithoutEnergyInputSchema } from './EnergiesToTagsUpdateManyWithWhereWithoutEnergyInputSchema';
import { EnergiesToTagsScalarWhereInputSchema } from './EnergiesToTagsScalarWhereInputSchema';

export const EnergiesToTagsUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.EnergiesToTagsUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTagsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTagsCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTagsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToTagsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToTagsUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToTagsUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTagsCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToTagsUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToTagsUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToTagsUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => EnergiesToTagsUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToTagsScalarWhereInputSchema),z.lazy(() => EnergiesToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTagsUpdateManyWithoutEnergyNestedInputSchema;
