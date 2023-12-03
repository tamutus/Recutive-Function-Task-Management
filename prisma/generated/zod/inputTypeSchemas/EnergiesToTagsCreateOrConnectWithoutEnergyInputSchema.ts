import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsWhereUniqueInputSchema } from './EnergiesToTagsWhereUniqueInputSchema';
import { EnergiesToTagsCreateWithoutEnergyInputSchema } from './EnergiesToTagsCreateWithoutEnergyInputSchema';
import { EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToTagsCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTagsCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToTagsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTagsCreateOrConnectWithoutEnergyInputSchema;
