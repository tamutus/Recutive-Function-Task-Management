import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsCreateWithoutEnergyInputSchema } from './EnergiesToPersonsCreateWithoutEnergyInputSchema';
import { EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToPersonsCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToPersonsCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToPersonsUpsertWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToPersonsUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToPersonsCreateManyEnergyInputEnvelopeSchema } from './EnergiesToPersonsCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToPersonsWhereUniqueInputSchema } from './EnergiesToPersonsWhereUniqueInputSchema';
import { EnergiesToPersonsUpdateWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToPersonsUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToPersonsUpdateManyWithWhereWithoutEnergyInputSchema } from './EnergiesToPersonsUpdateManyWithWhereWithoutEnergyInputSchema';
import { EnergiesToPersonsScalarWhereInputSchema } from './EnergiesToPersonsScalarWhereInputSchema';

export const EnergiesToPersonsUncheckedUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.EnergiesToPersonsUncheckedUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToPersonsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPersonsCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToPersonsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToPersonsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToPersonsUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToPersonsUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToPersonsCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToPersonsUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToPersonsUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToPersonsUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => EnergiesToPersonsUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToPersonsScalarWhereInputSchema),z.lazy(() => EnergiesToPersonsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToPersonsUncheckedUpdateManyWithoutEnergyNestedInputSchema;
