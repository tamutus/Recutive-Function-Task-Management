import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateNestedOneWithoutTasksInputSchema } from './PrivateTagCreateNestedOneWithoutTasksInputSchema';

export const PrivateTagsToTasksCreateWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTasksCreateWithoutTaskInput> = z.object({
  tag: z.lazy(() => PrivateTagCreateNestedOneWithoutTasksInputSchema)
}).strict();

export default PrivateTagsToTasksCreateWithoutTaskInputSchema;
