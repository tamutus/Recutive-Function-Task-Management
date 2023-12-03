import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateNestedOneWithoutPrivateTagsInputSchema } from './TaskTemplateCreateNestedOneWithoutPrivateTagsInputSchema';

export const PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesCreateWithoutTagInput> = z.object({
  task: z.lazy(() => TaskTemplateCreateNestedOneWithoutPrivateTagsInputSchema)
}).strict();

export default PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema;
