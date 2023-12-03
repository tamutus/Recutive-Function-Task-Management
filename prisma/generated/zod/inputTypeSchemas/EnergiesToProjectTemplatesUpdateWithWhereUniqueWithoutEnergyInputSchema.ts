import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesWhereUniqueInputSchema } from './EnergiesToProjectTemplatesWhereUniqueInputSchema';
import { EnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema';
import { EnergiesToProjectTemplatesUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesUncheckedUpdateWithoutEnergyInputSchema';

export const EnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectTemplatesUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema;
