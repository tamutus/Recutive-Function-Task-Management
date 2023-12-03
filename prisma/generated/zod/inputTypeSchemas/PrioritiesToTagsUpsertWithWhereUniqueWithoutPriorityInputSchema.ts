import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsWhereUniqueInputSchema } from './PrioritiesToTagsWhereUniqueInputSchema';
import { PrioritiesToTagsUpdateWithoutPriorityInputSchema } from './PrioritiesToTagsUpdateWithoutPriorityInputSchema';
import { PrioritiesToTagsUncheckedUpdateWithoutPriorityInputSchema } from './PrioritiesToTagsUncheckedUpdateWithoutPriorityInputSchema';
import { PrioritiesToTagsCreateWithoutPriorityInputSchema } from './PrioritiesToTagsCreateWithoutPriorityInputSchema';
import { PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema';

export const PrioritiesToTagsUpsertWithWhereUniqueWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTagsUpsertWithWhereUniqueWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrioritiesToTagsUpdateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTagsUncheckedUpdateWithoutPriorityInputSchema) ]),
  create: z.union([ z.lazy(() => PrioritiesToTagsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToTagsUpsertWithWhereUniqueWithoutPriorityInputSchema;
