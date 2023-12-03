import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksScalarWhereInputSchema } from './PrivateTagsToTasksScalarWhereInputSchema';
import { PrivateTagsToTasksUpdateManyMutationInputSchema } from './PrivateTagsToTasksUpdateManyMutationInputSchema';
import { PrivateTagsToTasksUncheckedUpdateManyWithoutTaskInputSchema } from './PrivateTagsToTasksUncheckedUpdateManyWithoutTaskInputSchema';

export const PrivateTagsToTasksUpdateManyWithWhereWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTasksUpdateManyWithWhereWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateTagsToTasksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToTasksUpdateManyMutationInputSchema),z.lazy(() => PrivateTagsToTasksUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default PrivateTagsToTasksUpdateManyWithWhereWithoutTaskInputSchema;
