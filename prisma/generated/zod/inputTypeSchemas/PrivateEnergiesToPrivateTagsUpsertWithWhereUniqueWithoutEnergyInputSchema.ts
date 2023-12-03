import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsWhereUniqueInputSchema } from './PrivateEnergiesToPrivateTagsWhereUniqueInputSchema';
import { PrivateEnergiesToPrivateTagsUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToPrivateTagsUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToPrivateTagsUpsertWithWhereUniqueWithoutEnergyInputSchema;
