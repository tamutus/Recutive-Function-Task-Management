import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateNestedOneWithoutTaskTemplatesInputSchema } from './PrivateTagCreateNestedOneWithoutTaskTemplatesInputSchema';

export const PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesCreateWithoutTaskInput> = z.object({
  tag: z.lazy(() => PrivateTagCreateNestedOneWithoutTaskTemplatesInputSchema)
}).strict();

export default PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema;
