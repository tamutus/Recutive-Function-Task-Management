import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsWhereUniqueInputSchema } from './PrivateEnergiesToTagsWhereUniqueInputSchema';
import { PrivateEnergiesToTagsUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTagsUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToTagsUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTagsUncheckedUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToTagsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTagsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToTagsUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToTagsUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTagsUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToTagsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTagsUpsertWithWhereUniqueWithoutEnergyInputSchema;
