import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutTasksInputSchema } from './TagUpdateWithoutTasksInputSchema';
import { TagUncheckedUpdateWithoutTasksInputSchema } from './TagUncheckedUpdateWithoutTasksInputSchema';

export const TagUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutTasksInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutTasksInputSchema;
