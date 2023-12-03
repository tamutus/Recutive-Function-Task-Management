import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsWhereUniqueInputSchema } from './PrioritiesToTagsWhereUniqueInputSchema';
import { PrioritiesToTagsUpdateWithoutTagInputSchema } from './PrioritiesToTagsUpdateWithoutTagInputSchema';
import { PrioritiesToTagsUncheckedUpdateWithoutTagInputSchema } from './PrioritiesToTagsUncheckedUpdateWithoutTagInputSchema';

export const PrioritiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToTagsUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToTagsUpdateWithoutTagInputSchema),z.lazy(() => PrioritiesToTagsUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default PrioritiesToTagsUpdateWithWhereUniqueWithoutTagInputSchema;
