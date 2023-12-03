import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateNestedOneWithoutTagsInputSchema } from './TaskTemplateCreateNestedOneWithoutTagsInputSchema';
import { PersonCreateNestedOneWithoutTaskTagsInputSchema } from './PersonCreateNestedOneWithoutTaskTagsInputSchema';

export const TagsToTaskTemplatesCreateWithoutTagInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateWithoutTagInput> = z.object({
  task: z.lazy(() => TaskTemplateCreateNestedOneWithoutTagsInputSchema),
  tagger: z.lazy(() => PersonCreateNestedOneWithoutTaskTagsInputSchema)
}).strict();

export default TagsToTaskTemplatesCreateWithoutTagInputSchema;
