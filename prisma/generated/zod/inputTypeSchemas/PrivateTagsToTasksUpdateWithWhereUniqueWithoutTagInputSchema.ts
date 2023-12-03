import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksWhereUniqueInputSchema } from './PrivateTagsToTasksWhereUniqueInputSchema';
import { PrivateTagsToTasksUpdateWithoutTagInputSchema } from './PrivateTagsToTasksUpdateWithoutTagInputSchema';
import { PrivateTagsToTasksUncheckedUpdateWithoutTagInputSchema } from './PrivateTagsToTasksUncheckedUpdateWithoutTagInputSchema';

export const PrivateTagsToTasksUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTasksUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToTasksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToTasksUpdateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTasksUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default PrivateTagsToTasksUpdateWithWhereUniqueWithoutTagInputSchema;
