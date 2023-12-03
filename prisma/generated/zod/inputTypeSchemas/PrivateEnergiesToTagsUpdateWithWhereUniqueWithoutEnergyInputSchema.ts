import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsWhereUniqueInputSchema } from './PrivateEnergiesToTagsWhereUniqueInputSchema';
import { PrivateEnergiesToTagsUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTagsUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToTagsUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTagsUncheckedUpdateWithoutEnergyInputSchema';

export const PrivateEnergiesToTagsUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTagsUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTagsUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTagsUpdateWithWhereUniqueWithoutEnergyInputSchema;
