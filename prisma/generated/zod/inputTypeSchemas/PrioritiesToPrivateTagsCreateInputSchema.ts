import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateNestedOneWithoutPrioritiesInputSchema } from './PrivateTagCreateNestedOneWithoutPrioritiesInputSchema';
import { PriorityCreateNestedOneWithoutPrivateTagsInputSchema } from './PriorityCreateNestedOneWithoutPrivateTagsInputSchema';

export const PrioritiesToPrivateTagsCreateInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsCreateInput> = z.object({
  notes: z.string().optional().nullable(),
  tag: z.lazy(() => PrivateTagCreateNestedOneWithoutPrioritiesInputSchema),
  priority: z.lazy(() => PriorityCreateNestedOneWithoutPrivateTagsInputSchema)
}).strict();

export default PrioritiesToPrivateTagsCreateInputSchema;
