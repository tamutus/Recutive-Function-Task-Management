import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsWhereUniqueInputSchema } from './PrioritiesToPrivateTagsWhereUniqueInputSchema';
import { PrioritiesToPrivateTagsUpdateWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsUpdateWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsUncheckedUpdateWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsUncheckedUpdateWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema';

export const PrioritiesToPrivateTagsUpsertWithWhereUniqueWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUpsertWithWhereUniqueWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrioritiesToPrivateTagsUpdateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToPrivateTagsUncheckedUpdateWithoutPriorityInputSchema) ]),
  create: z.union([ z.lazy(() => PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToPrivateTagsUpsertWithWhereUniqueWithoutPriorityInputSchema;
