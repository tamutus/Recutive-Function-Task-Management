import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsWhereUniqueInputSchema } from './PrivateEnergiesToPrivateTagsWhereUniqueInputSchema';
import { PrivateEnergiesToPrivateTagsUpdateWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsUpdateWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema';

export const PrivateEnergiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsUpdateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default PrivateEnergiesToPrivateTagsUpdateWithWhereUniqueWithoutTagInputSchema;
