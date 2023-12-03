import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksScalarWhereInputSchema } from './PrivateTagsToTasksScalarWhereInputSchema';
import { PrivateTagsToTasksUpdateManyMutationInputSchema } from './PrivateTagsToTasksUpdateManyMutationInputSchema';
import { PrivateTagsToTasksUncheckedUpdateManyWithoutTagInputSchema } from './PrivateTagsToTasksUncheckedUpdateManyWithoutTagInputSchema';

export const PrivateTagsToTasksUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTasksUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToTasksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToTasksUpdateManyMutationInputSchema),z.lazy(() => PrivateTagsToTasksUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default PrivateTagsToTasksUpdateManyWithWhereWithoutTagInputSchema;
