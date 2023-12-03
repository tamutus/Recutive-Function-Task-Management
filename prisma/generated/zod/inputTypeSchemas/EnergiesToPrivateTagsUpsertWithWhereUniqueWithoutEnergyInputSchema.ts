import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPrivateTagsWhereUniqueInputSchema } from './EnergiesToPrivateTagsWhereUniqueInputSchema';
import { EnergiesToPrivateTagsUpdateWithoutEnergyInputSchema } from './EnergiesToPrivateTagsUpdateWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToPrivateTagsUncheckedUpdateWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsCreateWithoutEnergyInputSchema } from './EnergiesToPrivateTagsCreateWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToPrivateTagsUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToPrivateTagsUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPrivateTagsUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToPrivateTagsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToPrivateTagsUpsertWithWhereUniqueWithoutEnergyInputSchema;
