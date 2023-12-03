import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsWhereUniqueInputSchema } from './PrivateEnergiesToTagsWhereUniqueInputSchema';
import { PrivateEnergiesToTagsUpdateWithoutTagInputSchema } from './PrivateEnergiesToTagsUpdateWithoutTagInputSchema';
import { PrivateEnergiesToTagsUncheckedUpdateWithoutTagInputSchema } from './PrivateEnergiesToTagsUncheckedUpdateWithoutTagInputSchema';

export const PrivateEnergiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTagsUpdateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToTagsUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default PrivateEnergiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema;
