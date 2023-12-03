import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateNestedOneWithoutTagsInputSchema } from './TaskTemplateCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutTaskTemplatesInputSchema } from './TagCreateNestedOneWithoutTaskTemplatesInputSchema';

export const TagsToTaskTemplatesCreateWithoutTaggerInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateWithoutTaggerInput> = z.object({
  task: z.lazy(() => TaskTemplateCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutTaskTemplatesInputSchema)
}).strict();

export default TagsToTaskTemplatesCreateWithoutTaggerInputSchema;
