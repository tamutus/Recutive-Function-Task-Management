import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsWhereUniqueInputSchema } from './PrioritiesToPrivateTagsWhereUniqueInputSchema';
import { PrioritiesToPrivateTagsUpdateWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsUpdateWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsUncheckedUpdateWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsUncheckedUpdateWithoutPriorityInputSchema';

export const PrioritiesToPrivateTagsUpdateWithWhereUniqueWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUpdateWithWhereUniqueWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToPrivateTagsUpdateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToPrivateTagsUncheckedUpdateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToPrivateTagsUpdateWithWhereUniqueWithoutPriorityInputSchema;
