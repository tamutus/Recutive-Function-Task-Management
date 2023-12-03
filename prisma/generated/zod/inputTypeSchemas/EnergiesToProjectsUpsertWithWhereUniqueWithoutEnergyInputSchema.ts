import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsWhereUniqueInputSchema } from './EnergiesToProjectsWhereUniqueInputSchema';
import { EnergiesToProjectsUpdateWithoutEnergyInputSchema } from './EnergiesToProjectsUpdateWithoutEnergyInputSchema';
import { EnergiesToProjectsUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToProjectsUncheckedUpdateWithoutEnergyInputSchema';
import { EnergiesToProjectsCreateWithoutEnergyInputSchema } from './EnergiesToProjectsCreateWithoutEnergyInputSchema';
import { EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToProjectsUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectsUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToProjectsUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectsUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToProjectsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToProjectsUpsertWithWhereUniqueWithoutEnergyInputSchema;
