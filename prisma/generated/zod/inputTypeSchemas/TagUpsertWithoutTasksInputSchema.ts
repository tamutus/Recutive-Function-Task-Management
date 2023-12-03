import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateWithoutTasksInputSchema } from './TagUpdateWithoutTasksInputSchema';
import { TagUncheckedUpdateWithoutTasksInputSchema } from './TagUncheckedUpdateWithoutTasksInputSchema';
import { TagCreateWithoutTasksInputSchema } from './TagCreateWithoutTasksInputSchema';
import { TagUncheckedCreateWithoutTasksInputSchema } from './TagUncheckedCreateWithoutTasksInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutTasksInputSchema: z.ZodType<Prisma.TagUpsertWithoutTasksInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutTasksInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTasksInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutTasksInputSchema),z.lazy(() => TagUncheckedCreateWithoutTasksInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutTasksInputSchema;
