import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateOneRequiredWithoutTagsNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutTagsNestedInputSchema';
import { TagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema } from './TagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema';

export const TagsToTaskTemplatesUpdateWithoutTaggerInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpdateWithoutTaggerInput> = z.object({
  task: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema).optional()
}).strict();

export default TagsToTaskTemplatesUpdateWithoutTaggerInputSchema;
