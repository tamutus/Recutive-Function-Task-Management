import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsScalarWhereInputSchema } from './PrioritiesToPrivateTagsScalarWhereInputSchema';
import { PrioritiesToPrivateTagsUpdateManyMutationInputSchema } from './PrioritiesToPrivateTagsUpdateManyMutationInputSchema';
import { PrioritiesToPrivateTagsUncheckedUpdateManyWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsUncheckedUpdateManyWithoutPriorityInputSchema';

export const PrioritiesToPrivateTagsUpdateManyWithWhereWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUpdateManyWithWhereWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToPrivateTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToPrivateTagsUpdateManyMutationInputSchema),z.lazy(() => PrioritiesToPrivateTagsUncheckedUpdateManyWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToPrivateTagsUpdateManyWithWhereWithoutPriorityInputSchema;
