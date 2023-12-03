import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsWhereUniqueInputSchema } from './PrivateEnergiesToProjectsWhereUniqueInputSchema';
import { PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema;
