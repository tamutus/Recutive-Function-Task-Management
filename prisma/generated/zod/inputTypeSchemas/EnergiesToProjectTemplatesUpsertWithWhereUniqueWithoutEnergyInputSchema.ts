import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesWhereUniqueInputSchema } from './EnergiesToProjectTemplatesWhereUniqueInputSchema';
import { EnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema';
import { EnergiesToProjectTemplatesUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesUncheckedUpdateWithoutEnergyInputSchema';
import { EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema';
import { EnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectTemplatesUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema;
