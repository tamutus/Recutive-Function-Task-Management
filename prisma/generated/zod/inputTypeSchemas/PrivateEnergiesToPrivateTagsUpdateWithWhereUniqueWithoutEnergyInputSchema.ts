import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsWhereUniqueInputSchema } from './PrivateEnergiesToPrivateTagsWhereUniqueInputSchema';
import { PrivateEnergiesToPrivateTagsUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedUpdateWithoutEnergyInputSchema';

export const PrivateEnergiesToPrivateTagsUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToPrivateTagsUpdateWithWhereUniqueWithoutEnergyInputSchema;
