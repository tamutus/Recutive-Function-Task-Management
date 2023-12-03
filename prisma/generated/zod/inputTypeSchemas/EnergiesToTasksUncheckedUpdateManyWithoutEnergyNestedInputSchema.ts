import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksCreateWithoutEnergyInputSchema } from './EnergiesToTasksCreateWithoutEnergyInputSchema';
import { EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToTasksCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToTasksCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToTasksUpsertWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToTasksUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToTasksCreateManyEnergyInputEnvelopeSchema } from './EnergiesToTasksCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToTasksWhereUniqueInputSchema } from './EnergiesToTasksWhereUniqueInputSchema';
import { EnergiesToTasksUpdateWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToTasksUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToTasksUpdateManyWithWhereWithoutEnergyInputSchema } from './EnergiesToTasksUpdateManyWithWhereWithoutEnergyInputSchema';
import { EnergiesToTasksScalarWhereInputSchema } from './EnergiesToTasksScalarWhereInputSchema';

export const EnergiesToTasksUncheckedUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.EnergiesToTasksUncheckedUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTasksCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTasksCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTasksCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToTasksCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToTasksUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToTasksUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTasksCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),z.lazy(() => EnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),z.lazy(() => EnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),z.lazy(() => EnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),z.lazy(() => EnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToTasksUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToTasksUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToTasksUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => EnergiesToTasksUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToTasksScalarWhereInputSchema),z.lazy(() => EnergiesToTasksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTasksUncheckedUpdateManyWithoutEnergyNestedInputSchema;
