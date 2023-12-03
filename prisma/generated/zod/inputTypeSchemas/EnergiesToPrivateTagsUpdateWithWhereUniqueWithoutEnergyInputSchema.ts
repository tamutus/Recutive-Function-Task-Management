import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPrivateTagsWhereUniqueInputSchema } from './EnergiesToPrivateTagsWhereUniqueInputSchema';
import { EnergiesToPrivateTagsUpdateWithoutEnergyInputSchema } from './EnergiesToPrivateTagsUpdateWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToPrivateTagsUncheckedUpdateWithoutEnergyInputSchema';

export const EnergiesToPrivateTagsUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToPrivateTagsUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPrivateTagsUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToPrivateTagsUpdateWithWhereUniqueWithoutEnergyInputSchema;
