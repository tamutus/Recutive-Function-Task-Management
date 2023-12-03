import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateNestedOneWithoutTagsInputSchema } from './PriorityCreateNestedOneWithoutTagsInputSchema';

export const PrioritiesToTagsCreateWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToTagsCreateWithoutTagInput> = z.object({
  notes: z.string().optional().nullable(),
  priority: z.lazy(() => PriorityCreateNestedOneWithoutTagsInputSchema)
}).strict();

export default PrioritiesToTagsCreateWithoutTagInputSchema;
