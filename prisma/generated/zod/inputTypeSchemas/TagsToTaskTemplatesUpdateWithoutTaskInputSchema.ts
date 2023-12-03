import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema } from './TagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema';
import { PersonUpdateOneRequiredWithoutTaskTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutTaskTagsNestedInputSchema';

export const TagsToTaskTemplatesUpdateWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpdateWithoutTaskInput> = z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema).optional(),
  tagger: z.lazy(() => PersonUpdateOneRequiredWithoutTaskTagsNestedInputSchema).optional()
}).strict();

export default TagsToTaskTemplatesUpdateWithoutTaskInputSchema;
