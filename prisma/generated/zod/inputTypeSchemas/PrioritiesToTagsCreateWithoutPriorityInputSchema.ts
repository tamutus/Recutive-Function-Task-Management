import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateNestedOneWithoutPrioritiesInputSchema } from './TagCreateNestedOneWithoutPrioritiesInputSchema';

export const PrioritiesToTagsCreateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTagsCreateWithoutPriorityInput> = z.object({
  notes: z.string().optional().nullable(),
  tag: z.lazy(() => TagCreateNestedOneWithoutPrioritiesInputSchema)
}).strict();

export default PrioritiesToTagsCreateWithoutPriorityInputSchema;
