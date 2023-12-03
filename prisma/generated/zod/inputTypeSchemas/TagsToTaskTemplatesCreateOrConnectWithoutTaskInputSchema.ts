import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesWhereUniqueInputSchema } from './TagsToTaskTemplatesWhereUniqueInputSchema';
import { TagsToTaskTemplatesCreateWithoutTaskInputSchema } from './TagsToTaskTemplatesCreateWithoutTaskInputSchema';
import { TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';

export const TagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default TagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema;
