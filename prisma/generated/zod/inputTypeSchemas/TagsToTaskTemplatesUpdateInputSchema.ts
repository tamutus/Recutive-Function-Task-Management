import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateOneRequiredWithoutTagsNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutTagsNestedInputSchema';
import { TagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema } from './TagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema';
import { PersonUpdateOneRequiredWithoutTaskTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutTaskTagsNestedInputSchema';

export const TagsToTaskTemplatesUpdateInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpdateInput> = z.object({
  task: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema).optional(),
  tagger: z.lazy(() => PersonUpdateOneRequiredWithoutTaskTagsNestedInputSchema).optional()
}).strict();

export default TagsToTaskTemplatesUpdateInputSchema;
