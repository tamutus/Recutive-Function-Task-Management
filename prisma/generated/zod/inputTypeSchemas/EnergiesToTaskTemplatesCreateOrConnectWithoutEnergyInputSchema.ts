import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesWhereUniqueInputSchema } from './EnergiesToTaskTemplatesWhereUniqueInputSchema';
import { EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema;
