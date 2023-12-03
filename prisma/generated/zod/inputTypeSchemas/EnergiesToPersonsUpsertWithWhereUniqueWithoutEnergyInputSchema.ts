import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsWhereUniqueInputSchema } from './EnergiesToPersonsWhereUniqueInputSchema';
import { EnergiesToPersonsUpdateWithoutEnergyInputSchema } from './EnergiesToPersonsUpdateWithoutEnergyInputSchema';
import { EnergiesToPersonsUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToPersonsUncheckedUpdateWithoutEnergyInputSchema';
import { EnergiesToPersonsCreateWithoutEnergyInputSchema } from './EnergiesToPersonsCreateWithoutEnergyInputSchema';
import { EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToPersonsUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPersonsUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToPersonsUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPersonsUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToPersonsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToPersonsUpsertWithWhereUniqueWithoutEnergyInputSchema;
