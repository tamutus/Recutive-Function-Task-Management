import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksWhereUniqueInputSchema } from './EnergiesToTasksWhereUniqueInputSchema';
import { EnergiesToTasksUpdateWithoutEnergyInputSchema } from './EnergiesToTasksUpdateWithoutEnergyInputSchema';
import { EnergiesToTasksUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToTasksUncheckedUpdateWithoutEnergyInputSchema';
import { EnergiesToTasksCreateWithoutEnergyInputSchema } from './EnergiesToTasksCreateWithoutEnergyInputSchema';
import { EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToTasksUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTasksUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToTasksUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTasksUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToTasksCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTasksUpsertWithWhereUniqueWithoutEnergyInputSchema;
