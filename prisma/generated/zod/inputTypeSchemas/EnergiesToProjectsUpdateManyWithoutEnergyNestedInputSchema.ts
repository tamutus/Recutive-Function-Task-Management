import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsCreateWithoutEnergyInputSchema } from './EnergiesToProjectsCreateWithoutEnergyInputSchema';
import { EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToProjectsUpsertWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToProjectsUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToProjectsCreateManyEnergyInputEnvelopeSchema } from './EnergiesToProjectsCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToProjectsWhereUniqueInputSchema } from './EnergiesToProjectsWhereUniqueInputSchema';
import { EnergiesToProjectsUpdateWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToProjectsUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToProjectsUpdateManyWithWhereWithoutEnergyInputSchema } from './EnergiesToProjectsUpdateManyWithWhereWithoutEnergyInputSchema';
import { EnergiesToProjectsScalarWhereInputSchema } from './EnergiesToProjectsScalarWhereInputSchema';

export const EnergiesToProjectsUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.EnergiesToProjectsUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToProjectsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectsCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToProjectsUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectsUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToProjectsCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToProjectsUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectsUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToProjectsUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectsUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToProjectsScalarWhereInputSchema),z.lazy(() => EnergiesToProjectsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToProjectsUpdateManyWithoutEnergyNestedInputSchema;
