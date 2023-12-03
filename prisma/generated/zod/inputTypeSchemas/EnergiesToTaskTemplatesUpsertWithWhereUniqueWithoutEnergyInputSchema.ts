import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesWhereUniqueInputSchema } from './EnergiesToTaskTemplatesWhereUniqueInputSchema';
import { EnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesUncheckedUpdateWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskTemplatesUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema;
