import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPrivateTagsWhereUniqueInputSchema } from './EnergiesToPrivateTagsWhereUniqueInputSchema';
import { EnergiesToPrivateTagsCreateWithoutEnergyInputSchema } from './EnergiesToPrivateTagsCreateWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToPrivateTagsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema;
