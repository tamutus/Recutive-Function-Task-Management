import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTasksWhereUniqueInputSchema } from './TagsToTasksWhereUniqueInputSchema';
import { TagsToTasksCreateWithoutTagInputSchema } from './TagsToTasksCreateWithoutTagInputSchema';
import { TagsToTasksUncheckedCreateWithoutTagInputSchema } from './TagsToTasksUncheckedCreateWithoutTagInputSchema';

export const TagsToTasksCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.TagsToTasksCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => TagsToTasksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagsToTasksCreateWithoutTagInputSchema),z.lazy(() => TagsToTasksUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default TagsToTasksCreateOrConnectWithoutTagInputSchema;
