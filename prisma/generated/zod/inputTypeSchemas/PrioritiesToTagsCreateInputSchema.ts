import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateNestedOneWithoutPrioritiesInputSchema } from './TagCreateNestedOneWithoutPrioritiesInputSchema';
import { PriorityCreateNestedOneWithoutTagsInputSchema } from './PriorityCreateNestedOneWithoutTagsInputSchema';

export const PrioritiesToTagsCreateInputSchema: z.ZodType<Prisma.PrioritiesToTagsCreateInput> = z.object({
  notes: z.string().optional().nullable(),
  tag: z.lazy(() => TagCreateNestedOneWithoutPrioritiesInputSchema),
  priority: z.lazy(() => PriorityCreateNestedOneWithoutTagsInputSchema)
}).strict();

export default PrioritiesToTagsCreateInputSchema;
