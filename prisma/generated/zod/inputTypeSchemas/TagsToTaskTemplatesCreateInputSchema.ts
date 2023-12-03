import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateNestedOneWithoutTagsInputSchema } from './TaskTemplateCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutTaskTemplatesInputSchema } from './TagCreateNestedOneWithoutTaskTemplatesInputSchema';
import { PersonCreateNestedOneWithoutTaskTagsInputSchema } from './PersonCreateNestedOneWithoutTaskTagsInputSchema';

export const TagsToTaskTemplatesCreateInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateInput> = z.object({
  task: z.lazy(() => TaskTemplateCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutTaskTemplatesInputSchema),
  tagger: z.lazy(() => PersonCreateNestedOneWithoutTaskTagsInputSchema)
}).strict();

export default TagsToTaskTemplatesCreateInputSchema;
