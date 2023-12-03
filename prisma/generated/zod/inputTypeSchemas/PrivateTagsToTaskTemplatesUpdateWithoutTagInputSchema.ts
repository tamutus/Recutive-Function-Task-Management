import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema';

export const PrivateTagsToTaskTemplatesUpdateWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUpdateWithoutTagInput> = z.object({
  task: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema).optional()
}).strict();

export default PrivateTagsToTaskTemplatesUpdateWithoutTagInputSchema;
