import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsWhereUniqueInputSchema } from './EnergiesToTagsWhereUniqueInputSchema';
import { EnergiesToTagsUpdateWithoutEnergyInputSchema } from './EnergiesToTagsUpdateWithoutEnergyInputSchema';
import { EnergiesToTagsUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToTagsUncheckedUpdateWithoutEnergyInputSchema';
import { EnergiesToTagsCreateWithoutEnergyInputSchema } from './EnergiesToTagsCreateWithoutEnergyInputSchema';
import { EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToTagsUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTagsUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToTagsUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTagsUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToTagsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTagsUpsertWithWhereUniqueWithoutEnergyInputSchema;
