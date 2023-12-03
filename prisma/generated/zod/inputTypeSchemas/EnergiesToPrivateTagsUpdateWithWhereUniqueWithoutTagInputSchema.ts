import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPrivateTagsWhereUniqueInputSchema } from './EnergiesToPrivateTagsWhereUniqueInputSchema';
import { EnergiesToPrivateTagsUpdateWithoutTagInputSchema } from './EnergiesToPrivateTagsUpdateWithoutTagInputSchema';
import { EnergiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema } from './EnergiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema';

export const EnergiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToPrivateTagsUpdateWithoutTagInputSchema),z.lazy(() => EnergiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default EnergiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema;
