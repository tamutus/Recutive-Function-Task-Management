import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateNestedOneWithoutPrivateTagsInputSchema } from './TaskTemplateCreateNestedOneWithoutPrivateTagsInputSchema';
import { PrivateTagCreateNestedOneWithoutTaskTemplatesInputSchema } from './PrivateTagCreateNestedOneWithoutTaskTemplatesInputSchema';

export const PrivateTagsToTaskTemplatesCreateInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesCreateInput> = z.object({
  task: z.lazy(() => TaskTemplateCreateNestedOneWithoutPrivateTagsInputSchema),
  tag: z.lazy(() => PrivateTagCreateNestedOneWithoutTaskTemplatesInputSchema)
}).strict();

export default PrivateTagsToTaskTemplatesCreateInputSchema;
