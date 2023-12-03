import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksCreateWithoutEnergyInputSchema } from './EnergiesToTasksCreateWithoutEnergyInputSchema';
import { EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToTasksCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToTasksCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToTasksCreateManyEnergyInputEnvelopeSchema } from './EnergiesToTasksCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToTasksWhereUniqueInputSchema } from './EnergiesToTasksWhereUniqueInputSchema';

export const EnergiesToTasksCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTasksCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTasksCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTasksCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTasksCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToTasksCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTasksCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),z.lazy(() => EnergiesToTasksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTasksCreateNestedManyWithoutEnergyInputSchema;
