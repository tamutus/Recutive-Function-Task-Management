import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksWhereUniqueInputSchema } from './PrivateTagsToTasksWhereUniqueInputSchema';
import { PrivateTagsToTasksUpdateWithoutTaskInputSchema } from './PrivateTagsToTasksUpdateWithoutTaskInputSchema';
import { PrivateTagsToTasksUncheckedUpdateWithoutTaskInputSchema } from './PrivateTagsToTasksUncheckedUpdateWithoutTaskInputSchema';

export const PrivateTagsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTasksUpdateWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToTasksUpdateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTasksUncheckedUpdateWithoutTaskInputSchema) ]),
}).strict();

export default PrivateTagsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema;
