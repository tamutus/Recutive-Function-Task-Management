import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsWhereUniqueInputSchema } from './EnergiesToTagsWhereUniqueInputSchema';
import { EnergiesToTagsUpdateWithoutTagInputSchema } from './EnergiesToTagsUpdateWithoutTagInputSchema';
import { EnergiesToTagsUncheckedUpdateWithoutTagInputSchema } from './EnergiesToTagsUncheckedUpdateWithoutTagInputSchema';

export const EnergiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToTagsUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTagsUpdateWithoutTagInputSchema),z.lazy(() => EnergiesToTagsUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default EnergiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema;
