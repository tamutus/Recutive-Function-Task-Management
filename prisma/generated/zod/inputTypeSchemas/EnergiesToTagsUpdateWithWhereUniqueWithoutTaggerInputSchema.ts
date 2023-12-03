import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsWhereUniqueInputSchema } from './EnergiesToTagsWhereUniqueInputSchema';
import { EnergiesToTagsUpdateWithoutTaggerInputSchema } from './EnergiesToTagsUpdateWithoutTaggerInputSchema';
import { EnergiesToTagsUncheckedUpdateWithoutTaggerInputSchema } from './EnergiesToTagsUncheckedUpdateWithoutTaggerInputSchema';

export const EnergiesToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema: z.ZodType<Prisma.EnergiesToTagsUpdateWithWhereUniqueWithoutTaggerInput> = z.object({
  where: z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTagsUpdateWithoutTaggerInputSchema),z.lazy(() => EnergiesToTagsUncheckedUpdateWithoutTaggerInputSchema) ]),
}).strict();

export default EnergiesToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema;
