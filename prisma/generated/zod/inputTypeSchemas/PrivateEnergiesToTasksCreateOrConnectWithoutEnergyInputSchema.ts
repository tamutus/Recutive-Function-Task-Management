import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksWhereUniqueInputSchema } from './PrivateEnergiesToTasksWhereUniqueInputSchema';
import { PrivateEnergiesToTasksCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTasksCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToTasksCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToTasksCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTasksCreateOrConnectWithoutEnergyInputSchema;
