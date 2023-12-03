import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsScalarWhereInputSchema } from './PrioritiesToPrivateTagsScalarWhereInputSchema';
import { PrioritiesToPrivateTagsUpdateManyMutationInputSchema } from './PrioritiesToPrivateTagsUpdateManyMutationInputSchema';
import { PrioritiesToPrivateTagsUncheckedUpdateManyWithoutTagInputSchema } from './PrioritiesToPrivateTagsUncheckedUpdateManyWithoutTagInputSchema';

export const PrioritiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => PrioritiesToPrivateTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToPrivateTagsUpdateManyMutationInputSchema),z.lazy(() => PrioritiesToPrivateTagsUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default PrioritiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema;
