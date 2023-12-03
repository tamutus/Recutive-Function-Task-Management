import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema';
import { PrivateTagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema } from './PrivateTagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema';

export const PrivateTagsToTaskTemplatesUpdateInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUpdateInput> = z.object({
  task: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema).optional(),
  tag: z.lazy(() => PrivateTagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema).optional()
}).strict();

export default PrivateTagsToTaskTemplatesUpdateInputSchema;
