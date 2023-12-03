import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesWhereUniqueInputSchema } from './TagsToTaskTemplatesWhereUniqueInputSchema';
import { TagsToTaskTemplatesCreateWithoutTagInputSchema } from './TagsToTaskTemplatesCreateWithoutTagInputSchema';
import { TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema } from './TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema';

export const TagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => TagsToTaskTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagsToTaskTemplatesCreateWithoutTagInputSchema),z.lazy(() => TagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default TagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema;
