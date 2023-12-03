import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsScalarWhereInputSchema } from './PrioritiesToTagsScalarWhereInputSchema';
import { PrioritiesToTagsUpdateManyMutationInputSchema } from './PrioritiesToTagsUpdateManyMutationInputSchema';
import { PrioritiesToTagsUncheckedUpdateManyWithoutPriorityInputSchema } from './PrioritiesToTagsUncheckedUpdateManyWithoutPriorityInputSchema';

export const PrioritiesToTagsUpdateManyWithWhereWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTagsUpdateManyWithWhereWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToTagsUpdateManyMutationInputSchema),z.lazy(() => PrioritiesToTagsUncheckedUpdateManyWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToTagsUpdateManyWithWhereWithoutPriorityInputSchema;
