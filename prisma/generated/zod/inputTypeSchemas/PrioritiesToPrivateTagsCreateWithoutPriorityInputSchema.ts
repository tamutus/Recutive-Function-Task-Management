import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateNestedOneWithoutPrioritiesInputSchema } from './PrivateTagCreateNestedOneWithoutPrioritiesInputSchema';

export const PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsCreateWithoutPriorityInput> = z.object({
  notes: z.string().optional().nullable(),
  tag: z.lazy(() => PrivateTagCreateNestedOneWithoutPrioritiesInputSchema)
}).strict();

export default PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema;
