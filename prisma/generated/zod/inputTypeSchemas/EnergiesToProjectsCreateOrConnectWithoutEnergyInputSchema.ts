import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsWhereUniqueInputSchema } from './EnergiesToProjectsWhereUniqueInputSchema';
import { EnergiesToProjectsCreateWithoutEnergyInputSchema } from './EnergiesToProjectsCreateWithoutEnergyInputSchema';
import { EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectsCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToProjectsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema;
