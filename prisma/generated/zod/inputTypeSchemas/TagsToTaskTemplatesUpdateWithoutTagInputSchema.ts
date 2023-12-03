import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateOneRequiredWithoutTagsNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutTagsNestedInputSchema';
import { PersonUpdateOneRequiredWithoutTaskTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutTaskTagsNestedInputSchema';

export const TagsToTaskTemplatesUpdateWithoutTagInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpdateWithoutTagInput> = z.object({
  task: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tagger: z.lazy(() => PersonUpdateOneRequiredWithoutTaskTagsNestedInputSchema).optional()
}).strict();

export default TagsToTaskTemplatesUpdateWithoutTagInputSchema;
