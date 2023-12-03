import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksWhereUniqueInputSchema } from './EnergiesToTasksWhereUniqueInputSchema';
import { EnergiesToTasksCreateWithoutEnergyInputSchema } from './EnergiesToTasksCreateWithoutEnergyInputSchema';
import { EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToTasksCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTasksCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToTasksCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTasksCreateOrConnectWithoutEnergyInputSchema;
