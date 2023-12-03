import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsScalarWhereInputSchema } from './PrioritiesToTagsScalarWhereInputSchema';
import { PrioritiesToTagsUpdateManyMutationInputSchema } from './PrioritiesToTagsUpdateManyMutationInputSchema';
import { PrioritiesToTagsUncheckedUpdateManyWithoutTagInputSchema } from './PrioritiesToTagsUncheckedUpdateManyWithoutTagInputSchema';

export const PrioritiesToTagsUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToTagsUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => PrioritiesToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToTagsUpdateManyMutationInputSchema),z.lazy(() => PrioritiesToTagsUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default PrioritiesToTagsUpdateManyWithWhereWithoutTagInputSchema;
