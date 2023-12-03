import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesWhereUniqueInputSchema } from './EnergiesToProjectTemplatesWhereUniqueInputSchema';
import { EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema';
import { EnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema;
