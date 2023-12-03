import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsWhereUniqueInputSchema } from './PrioritiesToTagsWhereUniqueInputSchema';
import { PrioritiesToTagsUpdateWithoutPriorityInputSchema } from './PrioritiesToTagsUpdateWithoutPriorityInputSchema';
import { PrioritiesToTagsUncheckedUpdateWithoutPriorityInputSchema } from './PrioritiesToTagsUncheckedUpdateWithoutPriorityInputSchema';

export const PrioritiesToTagsUpdateWithWhereUniqueWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTagsUpdateWithWhereUniqueWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToTagsUpdateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTagsUncheckedUpdateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToTagsUpdateWithWhereUniqueWithoutPriorityInputSchema;
