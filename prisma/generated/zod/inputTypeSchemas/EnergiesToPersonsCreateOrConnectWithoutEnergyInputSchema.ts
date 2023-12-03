import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsWhereUniqueInputSchema } from './EnergiesToPersonsWhereUniqueInputSchema';
import { EnergiesToPersonsCreateWithoutEnergyInputSchema } from './EnergiesToPersonsCreateWithoutEnergyInputSchema';
import { EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToPersonsCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPersonsCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToPersonsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToPersonsCreateOrConnectWithoutEnergyInputSchema;
