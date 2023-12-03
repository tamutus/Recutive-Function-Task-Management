import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateNestedOneWithoutTaskTemplatesInputSchema } from './TagCreateNestedOneWithoutTaskTemplatesInputSchema';
import { PersonCreateNestedOneWithoutTaskTagsInputSchema } from './PersonCreateNestedOneWithoutTaskTagsInputSchema';

export const TagsToTaskTemplatesCreateWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateWithoutTaskInput> = z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutTaskTemplatesInputSchema),
  tagger: z.lazy(() => PersonCreateNestedOneWithoutTaskTagsInputSchema)
}).strict();

export default TagsToTaskTemplatesCreateWithoutTaskInputSchema;
